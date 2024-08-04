import prisma_client from "../prisma_client";
import userLoginCredentials, { userCredentials } from "./fieldType";
import validUserCredentials from "./utility";

const loginUser = async (
  userCredentail: userLoginCredentials , showDirectory :boolean = false
): Promise<userCredentials | null> => {
  if (validUserCredentials(userCredentail)) {
    try {
      const user = await prisma_client.user.findUnique({
        where: userCredentail,
        select: { email: true, uiid: true , directory : showDirectory},
      });
      return user;
    } catch (error) {
      console.log("Error");
    }
  }
  return null;
};

export default loginUser;
