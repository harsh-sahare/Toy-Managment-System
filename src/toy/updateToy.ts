import { userCredentials, toyDetails } from "../fieldType";
import prisma_client from "../prisma_client";
import validUserUiid from "./utility";

export default function updateToy(toyId: string, changedData: toyDetails) {
  // Todo for security person check if the owener and currently logined in person is same or not
  const toy = prisma_client.toy.update({
    where: {
      uiid: toyId,
      deleted: false,
    },
    data: changedData,
  });
  return toy;
}
