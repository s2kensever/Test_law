import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Sec5.module.css";

import { List } from "../../../../../../constants/ListNews";

const Sec5 = () => {
    return (
        <div className={styles.container}>
            <div
                style={{
                    fontSize: "40px",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    letterSpacing: "0px",
                    color: "#025a93",
                    marginBottom: "2vh",
                }}
            >
                {" "}
                Kiến thức pháp luật{" "}
            </div>
            <div className={styles.wrapper}>
                {List.map((item) => {
                    return (
                        <div className={styles.item}>
                            <div className={styles.imgContainer}>
                                <img
                                    className={styles.img}
                                    src={item.img}
                                    alt=""
                                />
                            </div>
                            <div className={styles.itemTitle}>{item.title}</div>
                            <div className={styles.itemDescription}>
                                {item.description}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Sec5;
