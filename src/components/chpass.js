import { Button, Form, Input, Flex, Alert, message } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { handleChangePass } from "./resource";

function ChangePass() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

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
    <div
      className="container"
      style={{
        paddingTop: "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ paddingBottom: "30px" }}>Silahkan masukkan password baru</h1>
      <Flex justify="center" align="center">
        {contextHolder}
        <Form
          name="basic"
          labelCol={{
            span: 100,
          }}
          wrapperCol={{
            span: 100,
          }}
          style={{
            maxWidth: 900,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Password Baru"
            name="passwordchange"
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
            label="Konfirmasi Password:"
            name="passwordconf"
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
    </div>
  );
}

export default ChangePass;
