
import React from "react";
import { Dropdown, Avatar } from 'antd';
import { SVGicon } from "../../assets/SVGicon";
import "./style.css";
import { Layout, theme } from 'antd';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const { Header } = Layout;


const TGHeader = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/login', { replace: true });
        window.location.reload(false);
    }

    const items = [
        {
            label: (
                <div className="admin-dashboard-profile-details">
                    <h6>Admin</h6>
                </div>
            ),
            key: "0",
        },
        
        {
            label: (
                <Link
                    to="#"
                    onClick={handleLogout}
                    className="admin-dashboard-profile-drop-down-item admin-sign-out-text"
                >
                    <span className="admin-dashboard-profile-drop-down-item-icon flex-center contain-image">
                        {SVGicon.mtpIconSignOut}
                    </span>
                    <span className="admin-dashboard-profile-drop-down-item-text">
                        Sign Out
                    </span>
                </Link>
            ),
            key: "5",
        },
    ];

    return (<>
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <header className="d-align">
                <h2><b>Admin panel ( {location.pathname.replace("/", "")} )</b></h2>

                <div className="ms-auto cursor-pointer" >
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottomRight"
                        arrow
                    >
                        <Avatar style={{ backgroundColor: '#f56a00' }}>admin</Avatar>
                    </Dropdown>
                </div>
            </header>
        </Header>
    </>)

}

export default TGHeader;