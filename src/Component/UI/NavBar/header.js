import React from 'react'
import './header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-row">
                    <nav className="navbar nav main-header">
                        <div className="right-section">
                            <div className="profile-img">
                                <img src="../../../../public/assets/img/7e5cd746-ce5b-4b71-bf28-e94b5806e03d.png" className="profile-avatar rounded-circle"
                                    alt="" />
                            </div>
                            <div className="right-icons d-inline-flex position-absolute pr-5">
                                <div className="whatsnews">
                                    <i className="las la-bullhorn"></i>
                                </div>
                                <div className="help">
                                    <i className="las la-question"></i>
                                </div>
                                <div className="setting">
                                    <i className="las la-cog"></i>
                                </div>
                            </div>
                        </div>
                        <div className="search-boxs bg-light rounded">
                            <span className="search-tools">
                                <input type="search" name="" id="" placeholder="search" className="search-box border-0 txt-input" onChange={(e) => this.props.handleSearchProps(e)} />
                                <i className="las la-search"></i>
                            </span>
                        </div>
                        <div className="left-section d-flex">
                            <div className="app-name pl-2">
                                <a href="#">
                                    <span className="font-weight-bold text-light">To Do</span>
                                </a>
                            </div>

                            <div className="app-icon">
                                <a href="#">
                                    <i className="fas fa-th"></i>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header