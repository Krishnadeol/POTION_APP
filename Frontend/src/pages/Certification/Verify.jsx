import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Verify = () => {
  const tobj = {
    position: "bottom-right",
    autoclose: 3000,
    pauseOnhover: true,
    draggable: true,
    theme: "dark",
  };
  const [curUser, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!localStorage.getItem("crowd-app-ngo-data")) {
          navigate("/");
        } else {
          console.log(localStorage.getItem("crowd-app-ngo-data"));
          setUser(JSON.parse(localStorage.getItem("crowd-app-ngo-data")));
        }
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchData();
  }, []);

  const stringArray = [
    { key: "Government", value: "key1" },
    { key: "India", value: "key2" },
    { key: "ngo", value: "key3" },
    { key: "charitable", value: "key4" },
    { key: "organisation", value: "key5" },
    { key: "Date", value: "key6" },
    { key: "Non-governmental", value: "key7" },
    { key: "Governmental", value: "key8" },
    { key: "Certify", value: "key9" },
    { key: "Certified", value: "key10" },
    { key: "Mission", value: "key11" },
    { key: "Trustees", value: "key12" },
    { key: "Non-profit", value: "CERTIFICATE" },
    { key: "CERTIFICATE", value: "key14" },
    { key: "Appreciation", value: "key14" },
  ];

  const check = (res) => {
    let count = 0;
    for (let i = 0; i < res.length; i++) {
      if (stringArray.some((obj) => obj.key === res[i].text)) {
        count++;
      }
    }
    return count > 1;
  };

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const response = await axios.post(
        "https://api.api-ninjas.com/v1/imagetotext",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-Api-Key": "ruWrTCHLOG0v1jhS+ffBPA==VosjaG6jTS2BFH0V",
          },
        }
      );

      if (check(response.data)) {
        alert("inside the fuunction ");
        const { data } = await axios.patch(
          `http://localhost:5000/ngo/verified?id=${curUser._id}`
        );
        alert("after the api call");
        if (data.success) {
          toast.success("You are verified now", tobj);
          setTimeout(() => {
            navigate("/ngoAdmin");
          }, 2500);
        } else toast.error("Error in verifying ", tobj);
      } else {
        toast.error("Invalid document ", tobj);
      }
    } catch (error) {
      console.error("Error:", error.response.data);
      // Handle error here
    }
  };

  return (
    <>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleSubmit}>Verify</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Verify;
