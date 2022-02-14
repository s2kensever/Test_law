import React from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";

// import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import Header from "../../components/Header/Header";
import Header2 from "../../components/Header2/Header2";
import Footer from "../../components/Footer/Footer";
import LuatSuPage from "./pages/LuatSuPage/LuatSuPage";

const ContactWithGmail = React.lazy(() => import("./pages/ContactWithGmail/ContactWithGmail"));

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));

function User() {
    const match = useRouteMatch();

    return (
        <React.Fragment>
            {/* <Header /> */}
            <Switch>
                <Route exact path={`${match.url}`} component={LuatSuPage} />
                <Route
                    exact
                    path={`${match.url}/GioiThieu/CongTy`}
                    component={HomePage}
                />
                <Route
                    exact
                    path={`${match.url}/GioiThieu/LuatSu`}
                    component={LuatSuPage}
                />
                <Route
                    exact
                    path={`${match.url}LienHe`}
                    component={ContactWithGmail}
                />
                <Redirect
                    from={`${match.url}/GioiThieu`}
                    to={`${match.url}/GioiThieu/CongTy`}
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
