import React from "react";
import "./profile-form.css";
import Uploader from "../../../../../Components/Uploader/Uploader";
import ImagePreview from "../../../../../Components/ImagePreview/ImagePreview";

const ProfileForm = () => {
  return (
    <div className="profile_form">
      <form action="">
        <div className="pf_grid">
          <div className="pf_uploader">
            <Uploader />
          </div>
          <div className="pf_preview">
            <ImagePreview />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
