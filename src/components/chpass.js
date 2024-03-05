import { Button, Form, Input, Flex, Alert, message } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { handleChangePass } from "./resource";

function ChangePass() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const boxStyle = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Password change success!",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Password Change Failed",
    });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    success();
    handleChangePass();
    return <Alert message="Password change success." type="success" />;
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    error();
  };
  return (
    <Flex style={boxStyle} justify="center" align="center">
      {contextHolder}
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
          label="Password2"
          name="password2"
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
    </Flex>
  );
}

export default ChangePass;