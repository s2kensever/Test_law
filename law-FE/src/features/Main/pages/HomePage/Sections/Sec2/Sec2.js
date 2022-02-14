import React from "react";
import styles from "./Sec2.module.css";
import img from "../../../../../../assets/images/2.jpg";
import { ListService } from "../../../../../../constants/ListService";

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
const styleItem = (index) => {
    if (index > 3) {
        if (index % 2 == 0) return styles.item1;
        else return styles.item2;
    } else {
        if (index % 2 == 0) return styles.item2;
        else return styles.item1;
    }
};
const iconList = (index) => {
    switch (index) {
        case 0:
            return (
                <div>
                    <FontAwesomeIcon
                        icon={faGavel}
                        color="#3891C5"
                        fontSize="45"
                    ></FontAwesomeIcon>
                </div>
            );
        case 1:
            return (
                <div>
                    <FontAwesomeIcon
                        icon={faLandmark}
                        color="#3891C5"
                        fontSize="45"
                    ></FontAwesomeIcon>
                </div>
            );
        case 2:
            return (
                <div>
                    <FontAwesomeIcon
                        icon={faGavel}
                        color="#3891C5"
                        fontSize="45"
                    ></FontAwesomeIcon>
                </div>
            );
        case 3:
            return (
                <div>
                    <FontAwesomeIcon
                        icon={faFileSignature}
                        color="#3891C5"
                        fontSize="45"
                    ></FontAwesomeIcon>
                </div>
            );
        case 4:
            return (
                <div>
                    <FontAwesomeIcon
                        icon={faFileContract}
                        color="#3891C5"
                        fontSize="45"
                    ></FontAwesomeIcon>
                </div>
            );
        case 5:
            return (
                <div>
                    <FontAwesomeIcon
                        icon={faHome}
                        color="#3891C5"
                        fontSize="45"
                    ></FontAwesomeIcon>
                </div>
            );
        case 6:
            return (
                <div>
                    <FontAwesomeIcon
                        icon={faBuilding}
                        color="#3891C5"
                        fontSize="45"
                    ></FontAwesomeIcon>
                </div>
            );

        default:
            return (
                <div>
                    <FontAwesomeIcon
                        icon={faPlaceOfWorship}
                        color="#3891C5"
                        fontSize="45"
                    ></FontAwesomeIcon>
                </div>
            );
    }
};
const Sec2 = () => {
    return (
        <div
            className={styles.container}
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className={styles.left}>
                <div className={styles.title}>
                    Dịch vụ <br></br> luật sư
                </div>
                <div className={styles.text}>
                    Luật MTA cung cấp dịch vụ luật sư trong các lĩnh vực
                </div>
                <hr />
            </div>
            <div className={styles.right}>
                <div className={styles.table}>
                    {ListService.map((item, index) => {
                        return (
                            <div
                                className={`${styles.item} 
                                    ${styleItem(index)}
                                `}
                            >
                                <div className={styles.icon}>
                                    {iconList(index)}
                                </div>
                                <div className={styles.item_name}>
                                    {item.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default Sec2;
