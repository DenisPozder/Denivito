import React, { useCallback, useState } from "react";
import "./uploader.css";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import { uploadImageService } from "../../Redux/APIs/ImageUploadService";
import UploaderLoading from "../UploaderLoading/UploaderLoading";

const Uploader = ({ setImageUrl }) => {
  const [loading, setLoading] = useState(false);

  // Upload file
  const onDrop = useCallback(
    async (acceptedFiles) => {
      const file = new FormData();
      file.append("file", acceptedFiles[0]);
      const data = await uploadImageService(file, setLoading);
      setImageUrl(data);
    },
    [setImageUrl]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      multiple: false,
      onDrop,
    });

  return (
    <>
      {loading ? (
        <div className="uploader_loading">
          <UploaderLoading />
        </div>
      ) : (
        <div className="uploader" {...getRootProps()}>
          <input {...getInputProps()} />
          <span className="uploader_icon">
            <FiUploadCloud />
          </span>
          <p className="uploader_text">drag your image here</p>
          <em className="uploader_drop">
            {isDragActive
              ? "drop it like it`s hot"
              : isDragReject
              ? "unsupported file type"
              : "only jpg and png files will be accepted"}
          </em>
        </div>
      )}
    </>
  );
};

export default Uploader;
