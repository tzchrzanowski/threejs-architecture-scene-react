import { useRouteError } from "react-router-dom";
import {TopNavigation} from "../navigation/top-navigation/TopNavigation";
import React from "react";

export function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <TopNavigation />
            <h1>Oops!</h1>
            <p>Sorry, this page does not exist!</p>
        </div>
    )
};

export default ErrorPage;
