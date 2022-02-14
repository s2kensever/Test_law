import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { FastField, Field, Form, Formik } from "formik";
import Alert from "@material-ui/lab/Alert";
import moment from "moment";

import InputLable from "../../../../CustomField/InputFiledLable/InputFiledLable";
// import DatetimePicker from "CustomField/DatetimePicker/DatetimePicker";
import Button from "../../../../CustomField/Button/Button";

import "./Register.css";

import handleApi from "../../../../handleApi/handleApi";
// import userApi from "api/user";
import authApi from "../../../../api/auth";

const fileds = [
    {
        lable: "Họ Và Tên",
        name: "name",
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
        lable: "Email",
        name: "email",
        multiline: false,
        required: true,
        component: InputLable,
    },
    {
        lable: "Tài khoản",
        name: "username",
        multiline: false,
        required: true,
        component: InputLable,
    },

    {
        lable: "Mật khẩu",
        name: "password",
        multiline: false,
        required: true,
        type: "password",
        component: InputLable,
    },
];

function Register(props) {
    const history = useHistory();
    const [error, setError] = useState();
    const [mess, setMess] = useState();

    const initialValues = {
        name: "",
        username: "",
        password: "",
        phoneNumber: "",
        email: "",
        address: "",
    };

    const handleSubmit = (values) => {
        setError("");
        setMess("");
        console.log(values);

        const register = (res) => {
            console.log(res.response);
            if (res.response && res.response.status == 401) {
                setError("Thông tin không đủ");
            } else if (res.response && res.response.status === 402) {
                setError("Tài khoản đã tồn tại");
            } else if (res.status === 200) {
                setMess("Tạo tài khoản thành công, Đăng nhập ngay!");
                history.push("/TaiKhoan/DangNhap");
            }
        };

        handleApi(authApi.register, register, values);
    };

    return (
        <div className="Register">
            <div className="form-header">
                <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
                <p></p>
            </div>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {(formikProps) => {
                    const { values, errors, touched } = formikProps;

                    return (
                        <Form className="form-register">
                            {fileds.map((filed, index) => (
                                <FastField
                                    component={filed.component}
                                    name={filed.name}
                                    lable={filed.lable}
                                    multiline={filed.multiline}
                                    required={filed.required}
                                    type={filed.type}
                                    isNumber={filed.isNumber}
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
                            <div className="btn_register">
                                <Button type="submit">Đăng ký</Button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

Register.propTypes = {};

export default Register;
