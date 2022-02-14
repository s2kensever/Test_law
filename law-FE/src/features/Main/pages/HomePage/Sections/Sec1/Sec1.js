import React from "react";
import styles from "./Sec1.module.css";
import img from "../../../../../../assets/images/1.jpg";
function Sec1() {
    const content = `
    Công ty Luật Minh Gia thuộc Đoàn Luật sư thành phố Hà Nội, thành lập và hoạt động theo Giấy Chứng nhận đăng ký hoạt động số: 01020716/TP/ĐKHĐ do Sở Tư pháp HN cấp. \n
    Với đội ngũ luật sư chuyên nghiệp, giàu kinh nghiệm, phạm vi hoạt động đa dạng bao gồm các phòng ban chuyên môn thuộc nhiều lĩnh vực khác nhau, Luật Minh Gia tư vấn pháp luật, đại diện ngoài tố tụng và tham gia tranh tụng nhằm bảo vệ quyền và lợi ích hợp pháp cho khách hàng tại Tòa án các cấp trong các vụ án Dân sự, Hình sự, Đất Đai, Thừa kế, Hợp đồng, Kinh doanh thương mại, Lao động, Hôn nhân Gia đình, Hành chính…, \n
    Cung cấp dịch vụ pháp lý khác như: Soạn thảo các loại văn bản, hợp đồng, dịch vụ luật sư doanh nhiệp, sở hữu trí tuệ, đầu tư nước ngoài, luật sư riêng và tư vấn pháp luật thường xuyên.`;
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.title}>Về chúng tôi</div>
                <div className={styles.content}>{content}</div>
            </div>
            <div className={styles.Right}>
                <div className={styles.imgContainer}>
                    <img src={img} className={styles.img} alt="" />
                </div>
            </div>
        </div>
    );
}
export default Sec1;
