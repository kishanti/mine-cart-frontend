import React from "react";
import { Spin } from 'antd';

const TGLoader = (props) => {
    return (
        <Spin tip="" spinning={props.loading} size="large" />
    )
}
export default TGLoader;
