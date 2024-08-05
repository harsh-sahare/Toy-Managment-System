import { userCredentials, toyDetails } from "../fieldType";
import prisma_client from "../prisma_client";
import validUserUiid from "./utility";

export default function searchToy(toyName: string) {
  // Todo for security person check if the owener and currently logined in person is same or not
  const toy = prisma_client.toy.findMany({
    where: { name: toyName, deleted: false },
  });
  return toy;
}
