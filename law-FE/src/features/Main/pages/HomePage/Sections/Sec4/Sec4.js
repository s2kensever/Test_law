import React, { useState, useEffect } from "react";
import styles from "./Sec4.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item from "../../../../../../CustomField/LawyerItem/Item";
import avt from "../../../../../../assets/images/lawyer.jpg";
import avt2 from "../../../../../../assets/images/lawyer2.jpg";
import avt3 from "../../../../../../assets/images/lawyer3.jpg";
import back from "../../../../../../assets/images/back-4.jpg";
import handleApi from "../../../../../../handleApi/handleApi";
import luatSuApi from "../../../../../../api/luatSu";

// const info = {
//     name: "Phạm Tuấn Anh",
//     avt: avt,
//     position:
//         " Giám đốc - Luật sư điều hành của chúng tôi và chịu trách nhiệm về toàn bộ hoạt động của công ty",
//     phone: "(024) 6683.1212",
//     email: "tuan.ls@luatminhgia.vn",
//     major: "Lĩnh vực hoạt động chuyên môn chủ yếu luật sư Tuấn đảm nhiệm là tham gia tố tụng các vụ án Hình sự, Dân sự, Đất đai, Kinh doanh - thương mại, Lao động, Đại diện, đàm phán và giải quyết tranh chấp… ngoài ra luật sư Tuấn thực hiện Tư vấn pháp luật trong lĩnh vực Doanh nghiệp trong nước - doanh nghiệp có vốn nước ngoài, tư vấn lập dự án đầu tư, tư vấn pháp luật về Sở hữu trí tuệ. ",
// };
// const info2 = {
//     name: "Bùi Thế Bình",
//     avt: avt2,
// };
// const info3 = {
//     name: "Lê Hồng Hiền",
//     avt: avt3,
// };

const Sec4 = (props) => {
    const { id } = props;
    const [list, setList] = useState();
    useEffect(() => {
        const getList = (res) => {
            if (res.status == 200) {
                if (id == 0) {
                    setList(res.data.slice(0, 4));
                    console.log(res.data);
                } else {
                    setList(res.data);
                }
            }
        };
        handleApi(luatSuApi.getList, getList);
    }, []);
    return (
        <>
            {list && (
                <div
                    className={styles.container}
                    style={{ backgroundImage: `url(${back})` }}
                >
                    <div className={styles.wrapper}>
                        <div className={styles.title}>Đội ngũ</div>
                        <div className={styles.text}>
                            Tại Luật MTA tất cả luật sư đều có chứng chỉ hành
                            nghề và có nhiều năm kinh nghiệm.
                        </div>
                        <div className={styles.listItem}>
                            {list.map((item) => {
                                return (
                                    <div>
                                        <Item lawyer={item}></Item>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.button}>Xem thêm</div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Sec4;
