import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import User from "./features/User/index";
import Main from "./features/Main/index";

// const NotFound = React.lazy(() => import("components/NotFound/NotFound/"));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>loading...</div>}>
                <BrowserRouter>
                    <Switch>
                        {/* Chia ra 2 features */}
                        <Route path="/TaiKhoan" component={User} />
                        <Route path="/" component={Main} />

                        {/* <Route path="/Thi" component={Exam} /> */}

                        {/* <Redirect from="/" to="/TaiKhoan" /> */}
                        {/* <Route path="/404" component={NotFound} /> */}
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
