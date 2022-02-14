import React, { useState, useEffect } from "react";
import styles from "./Item.module.css";
import Modal from "react-modal";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
Modal.setAppElement("#root");
const Item = (props) => {
    const { lawyer } = props;
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };
    const closeModal = () => {
        setOpen(false);
    };
    useEffect(() => {
        const body = document.querySelector("body");
        body.style.overflow = open ? "hidden" : "auto";
    }, [open]);
    return (
        <div className={styles.container}>
            <div className={styles.avt_container}>
                <img
                    className={styles.avt}
                    src={`http://localhost:4000/${lawyer.avt}`}
                    alt=""
                />
            </div>
            <div className={styles.name}>Luật sư {lawyer.ten}</div>
            <div className={styles.layer} onClick={openModal}>
                <div className={styles.button}>Chi tiết</div>
            </div>
            <Modal
                isOpen={open}
                contentLabel="onRequestClose Example"
                onRequestClose={closeModal}
                className={styles.modal}
                overlayClassName={styles.overlay}
                preventScroll={true}
            >
                <div className={styles.modalTop} style={{ display: "flex" }}>
                    <div className={styles.modalLeft}>
                        <div className={styles.modalAvtContainer}>
                            <img
                                className={styles.modalAvt}
                                src={`http://localhost:4000/${lawyer.avt}`}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={styles.modalRight}>
                        <div className={styles.modalName}>
                            Luật sư {lawyer.ten}
                        </div>
                        <div
                            className={styles.modalNamSinh}
                        >{` Năm sinh : ${lawyer.namSinh} `}</div>

                        <div
                            className={styles.modalDiaChi}
                        >{` Địa chỉ : ${lawyer.diaChi} `}</div>
                        <div style={{ fontWeight: "bold" }}>Liên hệ</div>
                        <div>
                            {/* <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> */}
                            <LocalPhoneIcon
                                className={styles.icon}
                                style={{ fontSize: "30px", color: "#175C8E" }}
                            ></LocalPhoneIcon>
                            <span>{lawyer.sdt}</span>
                        </div>
                        <div>
                            {/* <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> */}
                            <MailIcon
                                className={styles.icon}
                                style={{ fontSize: "30px", color: "#175C8E" }}
                            ></MailIcon>
                            <span>{lawyer.email}</span>
                        </div>
                        <div style={{ fontWeight: "bold", marginTop: "2vh" }}>
                            Tài khoản MXH
                        </div>
                        <div>
                            {/* <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> */}
                            <FacebookIcon
                                className={styles.icon}
                                style={{ fontSize: "30px", color: "#175C8E" }}
                            ></FacebookIcon>
                        </div>
                    </div>
                </div>
                <div className={styles.modelBot}>
                    <div
                        style={{
                            fontWeight: "bold",
                            padding: "15px 15px 15px 15px",
                        }}
                    >
                        Lĩnh vực hành nghề chính
                    </div>
                    <div className={styles.modalMajor}>{lawyer.trinhDo}</div>
                </div>
            </Modal>
        </div>
    );
};
export default Item;
