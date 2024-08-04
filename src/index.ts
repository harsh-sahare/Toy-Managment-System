import createNewUser from "./user/createUser";
import loginUser from "./user/loginUser";

console.log("hello");
let user = createNewUser({ email: "harsh@gmail.com", password: "harsh123" });
user.then((res) => {
  loginUser({ email: "harsh@gmail.com", password: "harsh123" }).then((res1) =>
    console.log(res1)
  );
});
