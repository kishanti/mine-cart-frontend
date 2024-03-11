import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TGHeader from "./header";

const TGheader = () => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("token")
        setIsUserAuthenticated(!!token)
    }, [location?.pathname])

    if (!isUserAuthenticated) {
        return <></>
    }

    return <TGHeader />
}

export default TGheader;