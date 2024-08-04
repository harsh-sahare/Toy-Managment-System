import { userCredentials } from "../fieldType";

export default function validUserUiid(
  userCredentail: userCredentials
): boolean {
  if (userCredentail.uiid.length > 0) {
    return true;
  }
  return false;
}
