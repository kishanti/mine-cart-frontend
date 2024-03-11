import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TGFooter from "./footer";

const TGfooter = () => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("token")
        setIsUserAuthenticated(!!token)
    }, [location?.pathname])


    if (!isUserAuthenticated) {
        return <></>
    }

    return <TGFooter />
}

export default TGfooter;