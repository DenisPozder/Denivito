import React from "react";
import FormBox from "../Components/FormBox/FormBox";
import FormHeader from "../Components/FormHeader/FormHeader";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Input from "../Components/Input/Input";
import "../auth.css";

const Register = () => {
  return (
    <div className="page_container">
      <FormBox image={"/Assets/Home/HSImg.jpg"}>
        <FormHeader title={"Denivito"} text={"Register for exclusive access"} />
        <div className="form">
          <form action="">
            <Input icon={<FaUser />} type={"text"} placeholder={"Username"} />
            <Input icon={<MdEmail />} type={"email"} placeholder={"Email"} />
            <Input
              icon={<RiLockPasswordFill />}
              type={"password"}
              placeholder={"Password"}
            />
            <button className="submit">
              <span>register now</span>
            </button>
            <p className="form_text">
              Already have an account? <Link to={"/login"}>Login now!</Link>
            </p>
          </form>
        </div>
      </FormBox>
    </div>
  );
};

export default Register;
