import { Button, Checkbox, Form, Input, Flex, notification } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { handleLogin } from "./resource";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Login Failed",
      description: "Username or password is incorrect",
    });
  };

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const onFinish = (values) => {
    if (handleLogin(values.username, values.password, navigate)) {
      openNotificationWithIcon("error");
      setAuth(true);
    } else {
      //setAuth(true);
      console.log("Success:", values);
      //if (auth != null) {
      //  console.log("BBBB");
      //}
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
      <div
        className="container"
        style={{
          paddingTop: "15%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ paddingBottom: "30px" }}>
          Probation Web Development 2024
        </h1>
        <Flex justify="center" align="center">
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
                  message: "Please input your username!",
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
                  message: "Please input your password!",
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
            <Link className="link" to="/signup">
              Create one
            </Link>
          </Form>
        </Flex>
      </div>
    </>
  );
}

export default Login;
