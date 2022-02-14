import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import img from "../../../../assets/images/background.jpg";
import styles from "./HomePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGavel,
    faHandshake,
    faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { faRegular } from "@fortawesome/free-regular-svg-icons";
import handleApi from "../../../../handleApi/handleApi";
import Sec1 from "./Sections/Sec1/Sec1";
import Sec2 from "./Sections/Sec2/Sec2";
import Sec3 from "./Sections/Sec3/Sec3";
import Sec4 from "./Sections/Sec4/Sec4";
import Sec5 from "./Sections/Sec5/Sec5";
import authApi from "../../../../api/auth";
import Header from "../../../../components/Header/Header";
import NewsField from "../../../../CustomField/NewsField/NewsField";
function HomePage(props) {
    let history = useHistory();
    const [error, setError] = useState();
    const [checked, setChecked] = useState(
        localStorage.getItem("username") ? true : false
    );

    const initialValues = {
        username: localStorage.getItem("username")
            ? localStorage.getItem("username")
            : "",
        password: localStorage.getItem("password")
            ? localStorage.getItem("password")
            : "",
    };

    return (
        <div className={styles.LoginPage}>
            <Header></Header>
            <div className={styles.background_home} id="top">
                <div className={styles.description}>
                    <p className={styles.desc1}> Công ty luật MTA</p>
                    <p className={styles.desc2}>
                        Với đội ngũ luật sư hàng đầu, chúng tôi mang đến cho
                        khách hàng các dịch vụ hỗ trợ pháp luật tốt nhất
                    </p>
                </div>
                <div className={styles.description2}>
                    <div className={styles.item1}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                icon={faGavel}
                                color="#3891C5"
                                fontSize="40"
                                spin
                            />
                        </div>

                        <div className={styles.text}>
                            20+ năm kinh nghiệm tư vấn Luật, bảo vệ công lý
                        </div>
                    </div>
                    <div className={styles.item2}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                icon={faPerson}
                                color="#3891C5"
                                fontSize="40"
                                spin
                            />
                        </div>

                        <div className={styles.text}>
                            30+ luật sư trình độ cao, tận tâm với nghề
                        </div>
                    </div>
                    <div className={styles.item3}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                icon={faHandshake}
                                color="#3891C5"
                                fontSize="40"
                                spin
                            />
                        </div>

                        <div className={styles.text}>
                            300+ khách hàng tin tưởng dịch vụ của chúng tôi
                        </div>
                    </div>
                </div>
                <img src={img} alt="" className={styles.img} />
            </div>
            <div className={styles.sec1}>
                <Sec1></Sec1>
            </div>
            <div className={styles.sec2}>
                <Sec2></Sec2>
            </div>
            <div className={styles.sec3}>
                <Sec3></Sec3>
            </div>
            <div className={styles.sec4}>
                <Sec4 id={0}></Sec4>
            </div>
            <div className={styles.Sec5}>
                <Sec5></Sec5>
            </div>

            <div>
                <NewsField></NewsField>
            </div>
        </div>
    );
}

HomePage.propTypes = {};

export default HomePage;
