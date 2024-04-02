import React from 'react'
import './dashboard-grid.css'
import { GiHotMeal } from "react-icons/gi";
import { BiSolidCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

const DashboardGrid = () => {
  return (
    <div className="dashboard_grid">
        <div className="dashboard_item">
            <div className="dashboard_content">
                <div className="dashboard_circle"><GiHotMeal /></div>
                <div className="dashboard_text">
                  <p>Total meals</p>
                  <h2>9</h2>
                </div>
            </div>
        </div>

        <div className="dashboard_item">
            <div className="dashboard_content">
                <div className="dashboard_circle"><BiSolidCategory /></div>
                <div className="dashboard_text">
                  <p>Total categories</p>
                  <h2>5</h2>
                </div>
            </div>
        </div>

        <div className="dashboard_item">
            <div className="dashboard_content">
                <div className="dashboard_circle"><FaUsers /></div>
                <div className="dashboard_text">
                  <p>Total users</p>
                  <h2>25</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardGrid