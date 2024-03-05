import { Alert } from "antd";

export async function handleLogin(navigate) {
  try {
    navigate("/dashboard");
  } catch (err) {
    console.error(err);
  }
}

export async function handleRegister(navigate) {
  try {
    navigate("/dashboard");
  } catch (err) {
    console.error(err);
  }
}

export async function handleChangePass() {
  try {
    console.log("Success purrr");
  } catch (err) {
    console.error(err);
  }
}
