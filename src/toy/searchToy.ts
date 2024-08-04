import { userCredentials, toyDetails } from "../fieldType";
import prisma_client from "../prisma_client";
import validUserUiid from "./utility";

export default function searchToy(toyId: string) {
  // Todo for security person check if the owener and currently logined in person is same or not
  const toy = prisma_client.toy.findUnique({
    where: { uiid: toyId, deleted: false },
  });
  return toy;
}
