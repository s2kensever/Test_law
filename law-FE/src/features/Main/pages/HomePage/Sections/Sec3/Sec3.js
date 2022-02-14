import React from "react";
import styles from "./Sec3.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileContract,
    faHome,
    faFileSignature,
    faLandmark,
    faGavel,
    faBuilding,
    faPlaceOfWorship,
} from "@fortawesome/free-solid-svg-icons";
const List = [
    { name: "Vụ việc tố tụng", number: "1968" },
    { name: "Khách hàng cá nhân", number: "1102" },
    { name: "Doanh nghiệp", number: "468" },
    { name: "Năm kinh nghiệm", number: "21" },
];
const styleIndex = (index) => {
    switch (index) {
        case 0:
        case 3:
            return styles.item1;
        default:
            return styles.item2;
    }
};
const iconList = (index) => {
    switch (index) {
        case 0:
            return (
                <div>
                    <FontAwesomeIcon
                        icon={faGavel}
                        color="white"
                        fontSize="48"
                    ></FontAwesomeIcon>
                </div>
            );
        case 1:
            return (
                <div>
                    <FontAwesomeIcon
                        icon={faLandmark}
                        color="#1A2431"
                        fontSize="48"
                    ></FontAwesomeIcon>
                </div>
            );
        case 2:
            return (
                <div>
                    <FontAwesomeIcon
                        icon={faGavel}
                        color="#1A2431"
                        fontSize="48"
                    ></FontAwesomeIcon>
                </div>
            );

        default:
            return (
                <div>
                    <FontAwesomeIcon
                        icon={faLandmark}
                        color="white"
                        fontSize="48"
                    ></FontAwesomeIcon>
                </div>
            );
    }
};
const Sec3 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.title}>Chúng tôi ở đây</div>
                <div className={styles.text}>
                    Để giải đáp mọi vướng mắc về pháp luật cho bạn <br></br>
                    Quyền lợi của bạn là ưu tiên hàng đầu của chúng tôi, Hãy gửi
                    yêu cầu nếu bạn cần luật sư giải quyết mọi vấn đề pháp lý
                    của mình.
                </div>
                <p className={styles.hr}></p>
                <div className={styles.button}>Gửi yêu cầu</div>
            </div>

            <div className={styles.right}>
                <div className={styles.table}>
                    {List.map((item, index) => {
                        return (
                            <div
                                className={`${styles.item} 
                                    ${styleIndex(index)}
                                `}
                            >
                                <div className={styles.item}>
                                    <div className={styles.icon}>
                                        {iconList(index)}
                                    </div>
                                    <div className={styles.item_name}>
                                        {item.number}
                                    </div>
                                    <div className={styles.item_number}>
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default Sec3;
