import React from 'react';
import { Link } from 'react-router-dom';
import './sideMenu.css'
class SideMenu extends React.Component {
    render() {
        return (
            <div className="menu-entered">
                <div className="sidebar-header pr-1">
                    <i className="fas fa-bars" style={{ fontSize: "18px" }}></i>
                </div>
                <div className="sidebar-body">
                    <Link to="/main/toDayTask" className="sb-item">
                        <div className="sb-icon">
                            <i className="las la-sun"></i>
                        </div>
                        <div className="sb-tex">
                            <span>My Day</span>
                        </div>
                    </Link>
                    <Link to="/main/important" className="sb-item">
                        <div className="sb-icon">
                            <i className="lar la-star"></i>
                        </div>
                        <div className="sb-tex">
                            <span>Important</span>
                        </div>
                    </Link>
                    <div className="sb-item">
                        <div className="sb-icon">
                            <i className="las la-calendar-alt"></i>
                        </div>
                        <div className="sb-tex">
                            <span>planned</span>
                        </div>
                    </div>
                    <Link className="sb-item" to="/main/assigned_to_me">
                        <div className="sb-icon">
                            <i className="las la-user"></i>
                        </div>
                        <div className="sb-tex">
                            <span>Assigned to you</span>
                        </div>
                    </Link>
                    <Link to="/main" className="sb-item">
                        <div className="sb-icon">
                            <i className="las la-home"></i>
                        </div>
                        <div className="sb-tex">
                            <span>Tasks</span>
                        </div>
                    </Link>
                </div>
                <div className="sidebar-footer pt-3">
                    <div className="float-right">
                        <div className="sb-item">
                            <div className="sb-icon">
                                <i className="las la-plus"></i>
                            </div>
                            <input type="text" name="" id="" className="border-0 new-task-input ds-hidden txt-input" placeholder="New list" />
                        </div>
                    </div>
                    <div className="float-left">
                        <div className="sb-icon ds-hidden">
                            <i className="las la-folder-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideMenu