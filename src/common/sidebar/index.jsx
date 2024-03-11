import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TGSidebar from "./sidebar";

const TGsidebar = () => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("token")
        setIsUserAuthenticated(!!token)
    }, [location?.pathname])

    if (!isUserAuthenticated) {
        return <></>
    }

    return <TGSidebar />
}

export default TGsidebar;