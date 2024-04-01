import React, { useEffect } from "react";
import FormBox from "../Components/FormBox/FormBox";
import FormHeader from "../Components/FormHeader/FormHeader";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Input from "../Components/Input/Input";
import "../auth.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { LoginValidation } from "../../../Components/Validation/UserValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import InlineError from "../../../Components/Notifications/InlineError/InlineError";
import { loginAction } from "../../../Redux/Actions/UserActions";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, userInfo, isSuccess } = useSelector(
    (state) => state.userLogin
  );

  // Validate user
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidation),
  });

  // OnSubmit
  const onSubmit = (data) => {
    dispatch(loginAction(data))
  };

  // UseEffect
  useEffect(() => {
    if(userInfo?.isAdmin) {
      navigate('/dashboard')
    } else if (userInfo) {
      navigate('/profile')
    }

    if(isSuccess) {
      toast.success(`Welcome back ${userInfo?.userName}`)
    }

    if(isError) {
      toast.error(isError)
      dispatch({ type: "USER_LOGIN_RESET" })
    }
  },[userInfo, isSuccess, isError, navigate, dispatch])

  return (
    <div className="page_container">
      <FormBox image={"/Assets/Home/HSImg.jpg"}>
        <FormHeader title={"Denivito"} text={"Login for exclusive access"} />
        <div className="form">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="full">
              <span>
                {errors.email ? <InlineError text={errors.email.message} /> : <div className="form_space"></div>}
              </span>
              <Input
                icon={<MdEmail />}
                name={"email"}
                register={register("email")}
                type={"email"}
                placeholder={"Email"}
              />
            </div>
            <div className="full">
              <span>
                {errors.password ? <InlineError text={errors.password.message} /> : <div className="form_space"></div>}
              </span>
              <Input
                icon={<RiLockPasswordFill />}
                name={"password"}
                register={register("password")}
                type={"password"}
                placeholder={"Password"}
              />
            </div>
            <button disabled={isLoading} type="submit" className="submit">
              <span>{isLoading ? ('Loading...') : ("login now")}</span>
            </button>
            <p className="form_text">
              Dont have an account yet?{" "}
              <Link to={"/register"}>Register now!</Link>
            </p>
          </form>
        </div>
      </FormBox>
    </div>
  );
};

export default Login;
