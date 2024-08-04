import { userCredentials, toyDetails } from "../fieldType";
import prisma_client from "../prisma_client";
import validUserUiid from "./utility";

export default function createToy(
  userCredential: userCredentials,
  toydetail: toyDetails
) {
  if (validUserUiid(userCredential)) {
    const user = prisma_client.user.update({
      where: { uiid: userCredential.uiid },
      data: {
        directory: {
          create: toydetail,
        },
      },
      select: {
        uiid: true,
        email: true,
        directory: {
          select: {
            name: true,
          },
        },
      },
    });
    return user;
  }
  return null;
}
