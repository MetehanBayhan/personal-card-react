import React from "react";
import { FaEnvelope } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import myImage from '../assets/metehan.jpg';

export default function Info(){
  return (
    <div className="info-wrapper">
      <img src={myImage} alt="a picture of metehan bayhan" className="profile-img"/>
      <div className="content-wrapper">
        <h2 className="info-name-title">Metehan Bayhan</h2>
        <p className="info-profession-title">Frontend Developer</p>
        <p className="info-website-text">I still don't have a website 🫣</p>
        <div className ="info-buttons-wrapper">
          <button className="btn">
            <FaEnvelope className="info-btn-icon"/>Email
          </button>
          <button className="btn btn-linkedin">
            <BsLinkedin className="info-btn-icon"/>Linkedin
          </button>
        </div>
      </div>
    </div>

  )
}