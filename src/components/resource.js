export async function handleLogin(usn, pass, navigate) {
  try {
    if (usn === "parti" && pass === "parti") {
      navigate("/dashboard");
      return false;
    } else if (usn === "kordas" && pass === "kordas") {
      navigate("/dashboard");
      return false;
    } else {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
}

export async function handleLogout(navigate) {
  navigate("/");
};

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
