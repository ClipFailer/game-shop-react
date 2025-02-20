
import {publicRoutes} from "../routes";
import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import Loader from "./Loader/Loader";

const AppRouter = () => {


    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                {
                    publicRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                            exact={route.exact}
                        />
                    )
                }
            </Routes>
        </Suspense>
    );
};

export default AppRouter;