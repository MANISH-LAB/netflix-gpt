export const validate = (name, email, password) => {
    if (name !== null) {
      const isNameValid = /^[a-zA-Z\s]+$/.test(name);
      if (!isNameValid) return "Name is not valid!";
      const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
      const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
      console.log("email",isEmailValid,"sds",isPasswordValid)
      if (!isEmailValid) return "Email is not valid!";
      if (!isPasswordValid) return "Password is not valid!";
    } else {
      const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
      const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
      console.log("email",isEmailValid,"sds",isPasswordValid)
      if (!isEmailValid) return "Email is not valid!";
      if (!isPasswordValid) return "Password is not valid!";
    }
    return null;
  };
  