import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MapIcon from "@material-ui/icons/Map";
import DraftsIcon from "@material-ui/icons/Drafts";
import PhoneIcon from "@material-ui/icons/Phone";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import PersonIcon from "@material-ui/icons/Person";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ViewMore from "./ViewMoreMobile";
import MenuDrawer from "./MenuDrawer";

import Logo from "../../assets/images/goodi.png";

import "./Header.css";

// import handleApi from "handleApi/handleApi";
// import authApi from "api/auth";

import ListMenu from "../../constants/ListItem";

function Header(props) {
    const { id } = props;
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeBackground);
    return (
        <div className={`Header  ${color == true ? "scrolling" : ""}`}>
            {loading && (
                <div className="H-info Container" id="scroll-top">
                    <Link className="rp-mobile" to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                    <div className="grow"> </div>
                    <div className="H-btn">
                        <Link className="H-button" to="/TaiKhoan/DangKy">
                            <BorderColorIcon style={{ fontSize: "16px" }} />
                            <span>Đăng ký</span>
                        </Link>
                        {user ? (
                            <Link className="H-button" to="/TaiKhoan/ThongTin">
                                <PersonIcon style={{ fontSize: "16px" }} />
                                <span>{user.Ten}</span>
                            </Link>
                        ) : (
                            <Link className="H-button" to="/TaiKhoan/DangNhap">
                                <PersonIcon style={{ fontSize: "16px" }} />
                                <span>Đăng nhập</span>
                            </Link>
                        )}
                    </div>
                    <ViewMore user={user} />
                </div>
            )}
            <div className="H-nav Container">
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
                <div className="grow"></div>
                <ul className="H-menu">
                    {ListMenu.listMenu.map((item, index) => (
                        <li key={index} className="NavItem">
                            <Link
                                // style={{ color: "white" }}
                                to={item.href}
                                className={`LinkItem  ${color == true ? "scrollingColor" : ""
                                    } `}
                            >
                                {item.name}
                            </Link>
                            {item.subMenu && (
                                <div className="H-DownIcon">
                                    <KeyboardArrowDownIcon
                                        style={{ fontSize: "16px" }}
                                    />
                                </div>
                            )}
                            {item.subMenu && (
                                <div className="H-UpIcon">
                                    <KeyboardArrowUpIcon
                                        style={{ fontSize: "16px" }}
                                    />
                                </div>
                            )}
                            {item.subMenu && (
                                <div className="H-subMenu">
                                    {item.subMenu.map((item, index) => (
                                        <div style={{ textAlign: "center" }}>
                                            <div
                                                key={index}
                                                className="H-subItem"
                                            >
                                                <Link
                                                    to={item.href}
                                                    className="H-subLink"
                                                >
                                                    {item.name}
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <a className="btn-scrollTop" href="#scroll-top">
                <KeyboardArrowUpIcon style={{ fontSize: "32px" }} />
            </a>
        </div>
    );
}

export default Header;
