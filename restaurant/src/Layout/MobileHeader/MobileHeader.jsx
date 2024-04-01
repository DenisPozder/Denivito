import React, { useEffect, useState } from 'react'
import Logo from '../../Components/Logo/Logo'
import './mobile-header.css'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaSquareInstagram, FaHeart } from "react-icons/fa6";
import { FaRegWindowClose, FaUser } from "react-icons/fa";
import HeaderLinksData from '../../Data/HeaderLinksData';
import { GiKnifeFork } from "react-icons/gi";
import { useSelector } from 'react-redux';

const MobileHeader = () => {

    const {userInfo} = useSelector((state) => state.userLogin)

    const [toggle, setToggle] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const toggleMenu = () => {
        setToggle(!toggle)
    }

    const scrolledHeader = () => {
        if(window.scrollY > 0) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrolledHeader)

        return () => {
            window.removeEventListener('scroll', scrolledHeader)
        }
    },[])

  return (
    <div className={`mobile_header ${scrolled ? 'background' : ''}`}>
        <div className="mh_content">
            <Link to={'/'} className="mh_logo">
                <Logo />
            </Link>
            <div className={`mh_toggle ${toggle ? "switch" : "delay"}`} onClick={toggleMenu}>
                <FaBars className="mh_bars" />
                <FaRegWindowClose className="mh_close" />
            </div>
        </div>
        <div className={`mh_wrap ${toggle ? "show" : "hide"}`}>
            <div className="mh_ground"></div>
            <div className="mh_ground"></div>
            <div className="mh_inner">
                <div className="mh_margin">
                    <div className="mh_header">
                        <Link to={'#'} className='call_btn'><span>0600142498</span></Link>
                    </div>
                    <div className="mh_links">
                        {
                            HeaderLinksData.map((link, index) => (
                                <NavLink className="mh_link" to={link.link} key={index}><GiKnifeFork /><span>{link.title}</span><GiKnifeFork /></NavLink>
                            ))
                        }
                    </div>
                    <div className="mh_media">
                        <Link target='_blank' to={'#'} className='mh_media_link'><FaSquareInstagram /></Link>
                        <Link to={userInfo?.isAdmin ? "/dashboard" : userInfo ? "/profile" : "/login"} className='mh_media_link'><FaUser /></Link>
                        <button className='mh_media_link'><FaHeart /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileHeader