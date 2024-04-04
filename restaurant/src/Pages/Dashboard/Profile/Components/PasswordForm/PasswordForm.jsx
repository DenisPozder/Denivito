import React, { useEffect } from "react";
import "./password-form.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordValidation } from "../../../../../Components/Validation/UserValidation";
import InputField from "../../../Components/InputField/InputField";
import InlineError from "../../../../../Components/Notifications/InlineError/InlineError";
import { RiLockPasswordFill } from "react-icons/ri";
import { changePasswordAction } from "../../../../../Redux/Actions/UserActions";
import toast from "react-hot-toast";

const PasswordForm = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.userChangePassword
  );

  // Validate user
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(PasswordValidation) });

  // OnSubmit
  const onSubmit = (data) => {
    dispatch(changePasswordAction(data));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch({ type: "USER_CHANGE_PASSWORD_RESET" });
    }
    if (isError) {
      toast.error(isError);
      dispatch({ type: "USER_CHANGE_PASSWORD_RESET" });
    }
    if (message) {
      toast.success(message);
      reset();
    }
  }, [isSuccess, isError, message, dispatch, reset]);
  return (
    <div className="password_form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="ps_inputs">
          <div className="ps_full">
            <div className="ps_input_content">
              <InputField
                type={"password"}
                name={"oldPassword"}
                icon={<RiLockPasswordFill />}
                register={register("oldPassword")}
                label={"Previous password"}
                placeholder={"Previous password"}
              />
              {errors.oldPassword ? (
                <InlineError text={errors.oldPassword.message} />
              ) : (
                <div className="pf_space"></div>
              )}
            </div>
          </div>
          <div className="ps_full">
            <div className="ps_input_content">
              <InputField
                type={"password"}
                name={"newPassword"}
                icon={<RiLockPasswordFill />}
                register={register("newPassword")}
                label={"New password"}
                placeholder={"New password"}
              />
              {errors.newPassword ? (
                <InlineError text={errors.newPassword.message} />
              ) : (
                <div className="pf_space"></div>
              )}
            </div>
          </div>
          <div className="ps_full">
            <div className="ps_input_content">
              <InputField
                type={"password"}
                name={"confirmPassword"}
                icon={<RiLockPasswordFill />}
                register={register("confirmPassword")}
                label={"Confirm password"}
                placeholder={"Confirm password"}
              />
              {errors.confirmPassword ? (
                <InlineError text={errors.confirmPassword.message} />
              ) : (
                <div className="pf_space"></div>
              )}
            </div>
          </div>
        </div>
        <button disabled={isLoading} type="submit" className="cp_btn">
          <span>{isLoading ? "changing..." : "change password"}</span>
        </button>
      </form>
    </div>
  );
};

export default PasswordForm;
