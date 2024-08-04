import userLoginCredentials from "../fieldType";

const validEmail = (email: string): boolean => {
  const emailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  if (email.length > 254) {
    return false;
  }
  return emailRegex.test(email);
};

const validPassword = (password: string): boolean => {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
  // Todo : Add proper validation
};

const validUserCredentials = (
  userCredential: userLoginCredentials
): boolean => {
  // Authenticate if the username or password is not empty
  if (userCredential.email.length != 0 && userCredential.password.length != 0) {
    // validate if email and password are valid
    if (
      validEmail(userCredential.email) &&
      validPassword(userCredential.password)
    ) {
      return true;
    }
  }
  return false;
};

export default validUserCredentials;
