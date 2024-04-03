import React from "react";
import "./uploader.css";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from 'react-icons/fi'

const Uploader = () => {

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      multiple: false,
    });

  return (
    <div className="uploader" {...getRootProps()}>
        <input {...getInputProps()} />
        <span className="uploader_icon">
            <FiUploadCloud />
        </span>
        <p className="uploader_text">drag your image here</p>
        <em className="uploader_drop">
            {
                isDragActive ? "drop it like it`s hot" : isDragReject ? "unsupported file type" : "only jpg and png files will be accepted"
            }
        </em>
    </div>
  )
};

export default Uploader;
