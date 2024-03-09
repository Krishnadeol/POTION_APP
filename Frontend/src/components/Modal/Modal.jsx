import React from 'react'
import {Link} from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import signUp from "../signUp/signUp.jsx"
import "./Modal.css";

const Modal = ({onClose}) => {

    return (
        <div className="Modal">
            <div className="popUp">
                <button onClick={onClose} className='cross'><IoIosClose size={30}/></button>
                <div className="signup-login">
                    <signUp/>
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
                 <br/>
                 frfrffrfrfrf
                 <br/>
                 frfrfrff
                 <button className="button"><a href="https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/">Open Up</a></button>
                </div>
            </div>
        </div>
    )
}

export default Modal