
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../Journal/routes/JournalRoutes";

export const mAppRouter = () => {

    return(
        <Routes>

            {/* Login y registro */}
            <Route path="/auth/*" element = {<AuthRoutes/>}/>



            {/* journal app */}
            <Route path="/*" element={ <JournalRoutes/>}/>


        </Routes>

    )

}