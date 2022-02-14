import React from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";

// import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import Header2 from "../../components/Header2/Header2";
import Footer from "../../components/Footer/Footer";

const Register = React.lazy(() => import("./pages/Register/Register"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
// const InfoUser = React.lazy(() => import("./pages/InfoUser/InfoUser"));
const ChangePassword = React.lazy(() =>
    import("./pages/ChangePassword/ChangePassword")
);

function User() {
    const match = useRouteMatch();

    return (
        <React.Fragment>
            <Header2 />
            <Switch>
                <Route exact path={`${match.url}`} component={LoginPage} />
                <Route
                    exact
                    path={`${match.url}/DangKy`}
                    component={Register}
                />
                <Route
                    exact
                    path={`${match.url}/DangNhap`}
                    component={LoginPage}
                />
                

                {/* <PrivateRoute
                    exact
                    path={`${match.url}/ThongTin`}
                    component={InfoUser}
                /> */}
                {/* <PrivateRoute
                    exact
                    path={`${match.url}/DoiMatKhau`}
                    component={ChangePassword}
                /> */}
            </Switch>

            <Footer />
        </React.Fragment>
    );
}

export default User;
