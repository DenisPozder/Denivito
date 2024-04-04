import React, { useEffect, useState } from "react";
import "./profile-form.css";
import Uploader from "../../../../../Components/Uploader/Uploader";
import ImagePreview from "../../../../../Components/ImagePreview/ImagePreview";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileValidation } from "../../../../../Components/Validation/UserValidation";
import { FaUser } from "react-icons/fa";
import InlineError from "../../../../../Components/Notifications/InlineError/InlineError";
import InputField from "../../../Components/InputField/InputField";
import { MdEmail } from "react-icons/md";
import {
  deleteProfileAction,
  updateProfileAction,
} from "../../../../../Redux/Actions/UserActions";
import toast from "react-hot-toast";

const ProfileForm = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  const [imageUrl, setImageUrl] = useState(userInfo ? userInfo.image : "");

  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.userUpdateProfile
  );

  const { isLoading: deleteLoading, isError: deleteError } = useSelector(
    (state) => state.userDeleteProfile
  );

  // Validate user
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProfileValidation),
  });

  // Update profile
  const onSubmit = (data) => {
    dispatch(updateProfileAction({ ...data, image: imageUrl }));
  };

  // Delete profile
  const deleteProfile = () => {
    window.confirm("Are you sure you want to delete your profile?") &&
      dispatch(deleteProfileAction());
  };

  // UseEffect
  useEffect(() => {
    if (userInfo) {
      setValue("userName", userInfo?.userName);
      setValue("email", userInfo?.email);
    }
    if (isSuccess) {
      dispatch({ type: "USER_UPDATE_PROFILE_RESET" });
    }
    if (isError || deleteError) {
      toast.error(isError || deleteError);
      dispatch({ type: "USER_UPDATE_PROFILE_RESET" });
      dispatch({ type: "USER_DELETE_PROFILE_RESET" })
    }
  }, [userInfo, setValue, isSuccess, isError, dispatch, deleteError]);
  return (
    <div className="profile_form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pf_grid">
          <div className="pf_uploader">
            <Uploader setImageUrl={setImageUrl} />
          </div>
          <div className="pf_preview">
            <ImagePreview
              image={imageUrl}
              name={userInfo ? userInfo?.userName : "Denivito restaurant"}
            />
          </div>
        </div>
        <div className="pf_inputs">
          <div className="pf_full">
            <div className="pf_input_content">
              <InputField
                type={"text"}
                name={"userName"}
                icon={<FaUser />}
                register={register("userName")}
                label={"Username"}
                placeholder={"Username"}
              />
              {errors.userName ? (
                <InlineError text={errors.userName.message} />
              ) : (
                <div className="pf_space"></div>
              )}
            </div>
          </div>
          <div className="pf_full">
            <div className="pf_input_content">
              <InputField
                type={"email"}
                name={"email"}
                icon={<MdEmail />}
                register={register("email")}
                label={"Email"}
                placeholder={"Email"}
              />
              {errors.email ? (
                <InlineError text={errors.email.message} />
              ) : (
                <div className="pf_space"></div>
              )}
            </div>
          </div>
        </div>
        <div className="pf_btns">
          <button
            onClick={deleteProfile}
            disabled={deleteLoading || isLoading}
            className="pf_delete"
          >
            <span>{deleteLoading ? "deleting..." : "delete profile"}</span>
          </button>
          <button disabled={deleteLoading || isLoading} className="pf_update">
            <span>{isLoading ? "updating..." : "update profile"}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
