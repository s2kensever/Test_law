import React from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";

// import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import Header2 from "../../../../components/Header2/Header2";
import Footer from "../../../../components/Footer/Footer";
import Sec4 from "../HomePage/Sections/Sec4/Sec4";
import handleApi from "../../../../handleApi/handleApi";
import luatSuApi from "../../../../api/luatSu";
import styles from "./LuatSu.module.css";
import { Link, useHistory } from "react-router-dom";
const LuatSuPage = () => {
    const match = useRouteMatch();
    let history = useHistory();
    return (
        <div className={styles.luatSuPage}>
            <Header2 />
            <div>Hế lô tao là luật sư page</div>
            <Sec4 id={1}></Sec4>
        </div>
    );
};

export default LuatSuPage;
