import React from "react";
import styles from "./NewsField.module.css";
import news1 from "../../assets/images/news1.png";
import PersonIcon from "@material-ui/icons/Person";
const NewsField = () => {
    // const { news } = props;
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={news1} alt="" />
            </div>
            <div className={styles.authorContainer}>
                <PersonIcon className={styles.icon}></PersonIcon>
                <span className={styles.author}>LS Phạm Tuấn Anh</span>
            </div>
            <div className={styles.title}>
                Kháng cáo là gì? Luật sư tư vấn kháng cáo
            </div>
            <div className={styles.content}>
                Kháng cáo bản án sơ thẩm về Dân sự, Hình sự, Đất đai, Lao động,
                Kinh doanh thương mại, Hôn nhân gia đình... là quyền của đương
                sự (nguyên đơn, bị đơn...) người bị hại, bị cáo và những người
                tham gia tố tụng khác, tuy nhiên không phải trường hợp nào đương
                sự hoặc thân nhân của đương sự, bị cáo, người bị hại cũng có thể
                hiểu quy định về Kháng cáo vụ án và xác định được điều kiện, quy
                định pháp luật về kháng cáo.
            </div>
            <div className={styles.button}>Chi tiết </div>
        </div>
    );
};
export default NewsField;
