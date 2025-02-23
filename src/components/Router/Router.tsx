import React, {FC, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";

export interface RouterProps {
    routes: Route[];
}

export interface Route {
    path: string;
    element: React.ReactNode;
}

const Router: FC<RouterProps> = ({routes}: RouterProps) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map((route, index) =>
                    <Route key={index} path={route.path} element={route.element} />
                )}
            </Routes>
        </Suspense>
    );
};

export default Router;