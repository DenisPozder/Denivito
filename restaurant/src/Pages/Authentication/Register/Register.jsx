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
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InlineError from "../../../Components/Notifications/InlineError/InlineError";
import toast from "react-hot-toast";
import { registerAction } from "../../../Redux/Actions/UserActions";
import { RegisterValidation } from "../../../Components/Validation/UserValidation";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, userInfo, isSuccess } = useSelector(
    (state) => state.userRegister
  );

  // Validate user
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterValidation),
  });

  // OnSubmit
  const onSubmit = (data) => {
    dispatch(registerAction(data));
  };

  // UseEffect
  useEffect(() => {
    if (userInfo?.isAdmin) {
      navigate("/dashboard");
    } else if (userInfo) {
      navigate("/profile");
    }

    if (isSuccess) {
      toast.success(`Welcome ${userInfo?.userName}`);
      dispatch({ type: "USER_REGISTER_RESET"})
    }

    if (isError) {
      toast.error(isError);
      dispatch({ type: "USER_REGISTER_RESET" });
    }
  }, [userInfo, isSuccess, isError, navigate, dispatch]);

  return (
    <div className="page_container">
      <FormBox image={"/Assets/Home/HSImg.jpg"}>
        <FormHeader title={"Denivito"} text={"Register for exclusive access"} />
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div className="form_inputs">
              <div className="full">
                <span>
                  {errors.userName ? (
                    <InlineError text={errors.userName.message} />
                  ) : (
                    <div className="form_space"></div>
                  )}
                </span>
                <Input
                  icon={<FaUser />}
                  name={"userName"}
                  register={register("userName")}
                  type={"text"}
                  placeholder={"Username"}
                />
              </div>
              <div className="full">
                <span>
                  {errors.email ? (
                    <InlineError text={errors.email.message} />
                  ) : (
                    <div className="form_space"></div>
                  )}
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
                  {errors.password ? (
                    <InlineError text={errors.password.message} />
                  ) : (
                    <div className="form_space"></div>
                  )}
                </span>
                <Input
                  icon={<RiLockPasswordFill />}
                  name={"password"}
                  register={register("password")}
                  type={"password"}
                  placeholder={"Password"}
                />
              </div>
            </div>
            <button disabled={isLoading} type="submit" className="submit">
              <span>{isLoading ? "Loading..." : "register now"}</span>
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
