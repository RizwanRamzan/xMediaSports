// libs
import React, { Fragment } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../page/Home";
import Main from "../layout/Main";

const ApplicationRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* <Main> */}
                    <Route path="/" element={<Home />} />
                {/* </Main> */}
            </Routes>
        </Router>
    );
};
export default ApplicationRoutes;
