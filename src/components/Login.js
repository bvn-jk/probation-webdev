import { Button, Checkbox, Form, Input } from 'antd';
// import { useContext, useState, Redirect } from 'react';
// import AuthContext from '../context/AuthContext.js';

function Login() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const { setUser } = useContext(AuthContext); 

  const onFinish = (values) => {
    // if (values.username === 'praktikan1' && values.password === 'passpraktikan1') {
    //   setUser({
    //     username: values.username,
    //     role: 'praktikan' 
    //   });
    //   console.log('Login Berhasil:', values);
    //   setIsLoggedIn(true);
    // }
    // else if (values.username === 'asprak1' && values.password === 'passasprak1') {
    //   setUser({
    //     username: values.username,
    //     role: 'asprak' 
    //   });
    //   console.log('Login Berhasil:', values);
    //   setIsLoggedIn(true);
    // } else {
      //   console.log('Login Salah');
      // }
    console.log('Login Berhasil:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return ( 
    // isLoggedIn ? (
    //   <Redirect to="/dashboard" />
    // ) : (
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
  // )
};

export default Login