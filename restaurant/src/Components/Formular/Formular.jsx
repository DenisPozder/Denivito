import React from "react";
import "./formular.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Formular = () => {
  return (
    <div className="formular">
      <div className="formular_content">
        <div className="formular_box">
          <div className="formular_box_content">
            <div className="fbc_header">
              <h1>Denivito</h1>
              <h2>Register for exclusive access</h2>
            </div>
            <div className="fbc_form">
              <form action="">
                <div className="fbc_box">
                    <div className="fbc_wrap">
                        <FaUser />
                        <input type="text" placeholder="Username" />
                    </div>
                </div>
                <div className="fbc_box">
                    <div className="fbc_wrap">
                        <MdEmail />
                        <input type="text" placeholder="Email" />
                    </div>
                </div>
                <div className="fbc_box">
                    <div className="fbc_wrap">
                        <RiLockPasswordFill />
                        <input type="text" placeholder="Password" />
                    </div>
                </div>
                <button className="submit"><span>register now</span></button>
                <p className="formular_text">Already have an account? <Link to={'/login'}>Login now!</Link></p>
              </form>
            </div>
          </div>
        </div>
        <div className="formular_img">
          <img src="/Assets/Home/HSImg.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Formular;
