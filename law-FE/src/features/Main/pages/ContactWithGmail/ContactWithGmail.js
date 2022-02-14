import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { FastField, Field, Form, Formik } from "formik";
import Alert from "@material-ui/lab/Alert";
import moment from "moment";


import Header2 from "../../../../components/Header2/Header2";
import Header from "../../../../components/Header/Header";

import InputLable from "../../../../CustomField/InputFiledLable/InputFiledLable";
// import DatetimePicker from "CustomField/DatetimePicker/DatetimePicker";
import Button from "../../../../CustomField/Button/Button";

// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../../../../../node_modules/font-awesome/css/font-awesome.min.css';

import "./ContactWithGmail.css";

import handleApi from "../../../../handleApi/handleApi";
// import contactApi from "api/user";
import contactApi from "../../../../api/contactWithGmail";

const fileds = [
    {
        lable: "Họ và tên",
        name: "fullName",
        required: true,
        component: InputLable,
    },
    {
        lable: "Gmail",
        name: "gmail",
        multiline: false,
        required: true,
        component: InputLable,
    },
    {
        lable: "Số điện thoại",
        name: "phoneNumber",
        multiline: false,
        required: true,
        isNumber: true,
        component: InputLable,
    },
    {
        lable: "Địa chỉ",
        name: "address",
        multiline: false,
        required: true,
        component: InputLable,
    },

    {
        lable: "Nội dung",
        name: "content",
        multiline: false,
        required: true,
        type: "textarea",
        component: InputLable,
        style: "width:100%",
        height: "100px",
    },

];

function ContactWithGmail(props) {
    const history = useHistory();
    const [error, setError] = useState();
    const [mess, setMess] = useState();

    const initialValues = {
        name: "",
        phoneNumber: "",
        gmail: "",
        address: "",
        content: "",
    };

    const handleSubmit = (values) => {
        setError("");
        setMess("");
        console.log(values);

        const contactwithgmail = (res) => {
            console.log(res.response);
            if (res.response && res.response.status == 401) {
                setError("Thông tin không đủ");
            }
            else if (res.status === 200) {
                setMess("Gửi đề nghị thành công!");
                history.push("/");
            }
        };

        handleApi(contactApi.contactWithGmail, contactwithgmail, values);
    };

    return (
        <React.Fragment>
            <Header2 />
            <div className="container contact-with-gmail">
                <div className="row form-header">
                    <p className="">Quyền lợi của bạn là</p>
                    <div className="list-interest">
                        <p><i className="fa fa-check"/> Câu hỏi được tư vấn ngay lập tức và trả lời nhanh nhất (không quá 24 giờ làm việc)</p>
                        <p><i className="fa fa-check"/> Bạn được hỗ trợ bởi đội ngũ luật sư có chuyên môn và nhiều kinh nghiệm</p>
                        <p><i className="fa fa-check"/> Bạn được hỗ trợ thường xuyên, đồng hành trong suốt quá trình giải quyết</p>
                    </div>
                </div>

                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {(formikProps) => {
                        const { values, errors, touched } = formikProps;

                        return (
                            <Form className="form-contact">
                                {fileds.map((filed, index) => (
                                    <FastField
                                        component={filed.component}
                                        name={filed.name}
                                        lable={filed.lable}
                                        multiline={filed.multiline}
                                        required={filed.required}
                                        type={filed.type}
                                        isNumber={filed.isNumber}
                                        style={filed.style}

                                    />
                        
                                ))}
                                <div className="Notice-register">
                                    {error && (
                                        <Alert severity="error">{error}</Alert>
                                    )}
                                    {mess && (
                                        <Alert severity="success">{mess}</Alert>
                                    )}
                                </div>
                                <div className="btn_contact">
                                    <Button type="submit">Tiếp tục</Button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>

        </React.Fragment>
    );
}

ContactWithGmail.propTypes = {};

export default ContactWithGmail;
