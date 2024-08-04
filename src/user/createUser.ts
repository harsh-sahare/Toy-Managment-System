import prisma_client from "../prisma_client";
import userLoginCredentials, { userCredentials } from "../fieldType";
import validUserCredentials from "./utility";

export default async function createNewUser(
  userCredentail: userLoginCredentials
): Promise<userCredentials | null> {
  // check is email and password is valid
  if (validUserCredentials(userCredentail)) {
    try {
      const user = await prisma_client.user.create({
        data: userCredentail,
        select: { uiid: true, email: true },
      });
      return user;
    } catch (e) {
      // Todo : Add more detail of the error
      console.log("Error", e);
      return null;
    }
  }

  return null;
}
