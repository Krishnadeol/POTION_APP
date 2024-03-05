import React from 'react'
import { X } from 'lucide-react';
import { IoIosClose } from "react-icons/io";
import signUp from "../signUp/signUp.jsx"
import "./Modal.css";

const Modal = ({onClose}) => {

    return (
        <div className="Modal">
            <div className="popUp">
                <button onClick={onClose} className='cross'><IoIosClose size={30}/></button>
                <div className="signup-login">
                    <signUp />
                    gggoeihgoiehgoiehgojfrjni
                    grhh
                    rtgrterergergetgergerferf

                    gggoeihgoiehgoiehgojfrjni
                 ighoroog
                 rgjerhrgrgregerg
                 <br/>
                 egjehgieergerg
                 <br/>
                 grtgrt
                 <br/>
                 right
                </div>
            </div>
        </div>
    )
}

export default Modal