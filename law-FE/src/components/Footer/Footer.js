import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import TelegramIcon from "@material-ui/icons/Telegram";
import styles from "./Footer.module.css";
import Logo from "../../assets/images/goodi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faHome,
    faAdress,
    faLink,
    faLocation,
    faGavel,
} from "@fortawesome/free-solid-svg-icons";
import { ListLaw } from "../../constants/ListLaw";
const Link = ["Văn bản pháp luật", "Kiến thức pháp luật", "Tuyển dụng"];
function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.sec2}>
                <div className={styles.info}>
                    <div
                        style={{
                            textAlign: "left",
                            fontSize: "22px",
                            marginBottom: "12px",
                            color: "white",
                        }}
                    >
                        Thông tin liên hệ
                    </div>
                    {/* <div>
                        <hr
                            style={{
                                width: "100%",
                                height: "0.8px",
                                backgroundColor: "#103057",
                                borderColor: "#103057",
                                border: "1px solid #103057",
                                noshade: "true",
                            }}
                        ></hr>
                    </div> */}

                    <div
                        style={{
                            display: "flex",
                            width: "14vw",
                            marginBottom: "12px",
                        }}
                    >
                        <div style={{ marginRight: "10px" }}>
                            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                        </div>
                        <div>Công ty luật MTA</div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            width: "18vw",
                            marginBottom: "12px",
                        }}
                    >
                        <div style={{ marginRight: "10px" }}>
                            <FontAwesomeIcon
                                icon={faLocation}
                            ></FontAwesomeIcon>
                        </div>
                        <div>Số 236, Hoàng Quốc Việt, Hà Nội</div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            width: "14vw",
                            marginBottom: "12px",
                        }}
                    >
                        <div style={{ marginRight: "10px" }}>
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                        </div>
                        <div>0375300930</div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            width: "14vw",
                            marginBottom: "12px",
                        }}
                    >
                        <div style={{ marginRight: "10px" }}>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                            ></FontAwesomeIcon>
                        </div>
                        <div>MTA_Law@gmail.com</div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            width: "14vw",
                            marginBottom: "12px",
                        }}
                    >
                        <div style={{ marginRight: "8px" }}>
                            <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                        </div>
                        <div>LuatMta.com</div>
                    </div>
                </div>
                <div className={styles.info}>
                    <div
                        style={{
                            textAlign: "left",
                            fontSize: "22px",
                            marginBottom: "12px",
                            color: "white",
                        }}
                    >
                        Dịch vụ luật sư
                    </div>
                    {ListLaw.map((item) => (
                        <div
                            style={{
                                display: "flex",
                                width: "14vw",
                                marginBottom: "12px",
                            }}
                        >
                            <div style={{ marginRight: "10px" }}>
                                <FontAwesomeIcon
                                    icon={faGavel}
                                ></FontAwesomeIcon>
                            </div>
                            <div>{`Luật sư ${item}`}</div>
                        </div>
                    ))}
                </div>

                <div className={styles.info}>
                    <div
                        style={{
                            textAlign: "left",
                            fontSize: "22px",
                            marginBottom: "12px",
                            color: "white",
                        }}
                    >
                        Liên kết
                    </div>
                    {Link.map((item) => (
                        <div
                            style={{
                                display: "flex",
                                width: "14vw",
                                marginBottom: "12px",
                            }}
                        >
                            <div style={{ marginRight: "10px" }}>
                                <FontAwesomeIcon
                                    icon={faLink}
                                ></FontAwesomeIcon>
                            </div>
                            <div>{`${item}`}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
