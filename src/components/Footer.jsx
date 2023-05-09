import React from "react";
import { FaInstagramSquare,FaGithubSquare,FaTwitterSquare } from 'react-icons/fa';



export default function Footer() {
  return (
    <div className="footer">
      <FaTwitterSquare className="footer-icon"/>
      <FaInstagramSquare className="footer-icon"/>
      <FaGithubSquare className="footer-icon"/>
    </div>
  )
}