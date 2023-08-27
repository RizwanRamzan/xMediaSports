// libs
import React, { Fragment } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import Main from "../layout/Main";
import CardDetail from "../page/Analytics/CardDetail";
import Home from "../page/Analytics";
import Analytics2 from "../page/Analytics2";
import AnalyticDetails from "../page/Analytics2/analyticDetail";

const ApplicationRoutes = () => {


    return (
        <Router>
            <Main>
                <Routes>
                    <Route path={"/" } element={<Navigate to="/analytics-1" replace />} />

                    {/* analytic 1 */}
                    <Route path="/analytics-1" element={<Analytics2 />} />
                    <Route path="/analytics-1-detail" element={<CardDetail />} />


                    {/* analytic 2 */}

                    <Route path="/analytics-2" element={<Home />} />
                    <Route path="/analytics-2-detail" element={<AnalyticDetails />} />

                </Routes>
            </Main>
        </Router>
    );
};
export default ApplicationRoutes;
