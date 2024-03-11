import React from 'react';
import './style.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { login, storeUserData } from "../../common/actions/auth";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        try {
            const loginResponse = await login(values)
            if (loginResponse?.status === 1) {
                toast.success(loginResponse?.message)
                dispatch(storeUserData(loginResponse?.data.user))
                navigate('/product',);
            } else {
                toast.error(loginResponse?.data?.message || loginResponse?.response?.data?.message || "Something went wrong.")
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ margin: "auto" }}>
            <h1 style={{ textAlign: "center", marginTop: 15, marginBottom: 20 }}>Textile Graphicx</h1>
            <h1 style={{ textAlign: "center", marginTop: 15, marginBottom: 20 }}>Admin login</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}

                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email !',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                {/* <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                </Form.Item> */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>

                </Form.Item>
            </Form>
        </div>
    );
};
export default Login;