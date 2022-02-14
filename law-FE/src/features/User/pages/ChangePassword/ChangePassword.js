import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { FastField, Form, Formik } from "formik";
import Alert from "@material-ui/lab/Alert";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import moment from "moment";

import InputLable from "../../../../CustomField/InputFiledLable/InputFiledLable";
import Button from "../../../../CustomField/Button/Button";

import "./ChangePassword.css";

// import handleApi from "handleApi/handleApi";
// import userApi from "api/user";

const fileds = [
    {
        lable: "Mật khẩu",
        name: "oldPassword",
        multiline: false,
        required: true,
        type: "password",
        component: InputLable,
    },
    {
        lable: "Mật khẩu mới",
        name: "newPassword",
        multiline: false,
        required: true,
        type: "password",
        component: InputLable,
    },
    {
        lable: "Nhập lại mật khẩu mới",
        name: "reNewPassword",
        multiline: false,
        required: true,
        type: "password",
        component: InputLable,
    },
];

function ChangePassword(props) {
    const history = useHistory();
    const [mess, setMess] = useState();
    const [error, setError] = useState();

    const initialValues = {
        oldPassword: "",
        newPassword: "",
        reNewPassword: "",
    };

    const handleSubmit = (values) => {
        setMess("");
        setError("");
        if (values.newPassword !== values.reNewPassword) {
            setError("Mật khẩu xác nhận không chính xác");
        } else {
            const changPassword = (res) => {
                if (res.status === 200) {
                    setMess("Thay đổi mật khẩu thành công");
                } else {
                    setError("Thay đổi mật khẩu thất bại");
                }
            };

            // handleApi(userApi.changePassword, changPassword, values);
        }
    };

    return (
        <div className="ChangePassword">
            <div className="form-header">
                <h2>Đổi mật khẩu</h2>
                <p>
                    written on charmed justice is amiable farther besides. Law
                    insensible middletons unsatiable for apartments boy
                    delightful unreserved.
                </p>
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
                            <div className="btn_changePassword">
                                <Button type="submit">Lưu lại</Button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

ChangePassword.propTypes = {};

export default ChangePassword;
