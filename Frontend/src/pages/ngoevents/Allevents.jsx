import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Allevents() {
  const [curUser, setUser] = useState([]);
  const [myEvents, setEvents] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!localStorage.getItem("crowd-app-ngo-data")) {
          navigate("/");
        } else {
          setUser(JSON.parse(localStorage.getItem("crowd-app-ngo-data")));

          const { data } = await axios.get(
            `http://localhost:5000/ngo/getevents?email=${curUser.email}`
          );
          setEvents(data);
        }
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchData();
  }, [0]);

  return <div>This is it {myEvents.length > 0 && myEvents[0].name}</div>;
}
