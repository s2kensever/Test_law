import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { FastField, Form, Formik } from "formik";
import Alert from "@material-ui/lab/Alert";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Md5 from 'md5';
// import Header from "../../../../components/Header";
import InputLable from "../../../../CustomField/InputFiledLable/InputFiledLable";
import Button from "../../../../CustomField/Button/Button";

import "./LoginPage.css";

import handleApi from "../../../../handleApi/handleApi";

import authApi from "../../../../api/auth";

const fileds = [
    {
        lable: "Tài khoản",
        name: "username",
        required: true,
        component: InputLable,
    },
    {
        lable: "Mật khẩu",
        name: "password",
        required: true,
        type: "password",
        component: InputLable,
    },
];

function LoginPage(props) {
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

    const handleSubmit = (values) => {
        const login = (res) => {
            console.log(values);
            console.log(res.data.user);
            if (res.status === 200) {
                localStorage.removeItem("accessToken");
                localStorage.setItem("accessToken", res.data.token);

                if (!props.location.state) {
                    history.push("/");
                    return;
                }
                const { from } = props.location.state;
                history.push(from);

                return;
            } else if (res.response && res.response.status === 401) {
                setError("Thông tin đăng nhập không chính xác");
            }
        };

        handleApi(authApi.login, login, { ...values });
    };

    const handleChangeChecked = (values) => {
        return (e) => {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            setChecked(e.target.checked);
            if (e.target.checked && values.username && values.password) {
                localStorage.setItem("username", values.username);
                localStorage.setItem("password", values.password);
            }
        };
    };

    return (
        <div className="LoginPage">
            <div className="form-header-login">
                <h2>Đăng Nhập</h2>
                <p>Vui lòng đăng nhập để sử dụng các dịch vụ của chúng tôi</p>
            </div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {(formikProps) => {
                    const { values } = formikProps;

                    return (
                        <Form className="form-login">
                            {fileds.map((filed, index) => (
                                <FastField
                                    component={filed.component}
                                    name={filed.name}
                                    lable={filed.lable}
                                    required={filed.required}
                                    type={filed.type}
                                />
                            ))}
                            <div className="Notice-login">
                                {error && (
                                    <Alert severity="error">{error}</Alert>
                                )}
                            </div>
                            <div className="login_redirect">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleChangeChecked(
                                                values
                                            )}
                                            name="remember"
                                            color="primary"
                                        />
                                    }
                                    label="Nhớ mật khẩu"
                                />
                                <div className="grow"></div>
                                <Link to="#" className="login_link">
                                    Quên mật khẩu
                                </Link>
                            </div>
                            <div className="bnt_login">
                                <Button type="submit">Đăng nhập</Button>
                            </div>
                            <div className="Login-redirect">
                                Chưa có tài khoản?{" "}
                                <Link
                                    className="login_link"
                                    to="/TaiKhoan/DangKy"
                                >
                                    Đăng ký
                                </Link>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

LoginPage.propTypes = {};

export default LoginPage;
