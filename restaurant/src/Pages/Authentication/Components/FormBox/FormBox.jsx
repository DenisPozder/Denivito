import React from 'react'
import './form-box.css'

const FormBox = ({ children, image}) => {
  return (
    <div className="form_box">
        <div className="fb_content">
            <div className="fb_wrap">
                <div className="fb_inner">
                    { children }
                </div>
            </div>
            <div className="fb_img">
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default FormBox