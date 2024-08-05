import prisma_client from "./prisma_client";
import deleteToy from "./toy/deleteToy";
import searchToy from "./toy/searchToy";
import updateToy from "./toy/updateToy";
import createNewUser from "./user/createUser";
import loginUser from "./user/loginUser";

async function main() {
  // createNewUser( {email,password} ):
  // return newly created users {uiid , email}

  // loginUser( {email,password} ):
  // return users data {uiid , email , directory }

  // createToy( {uuid , email , directory } , { toyname } )
  // return newly created toy

  // updateToy(toyId , data)
  // returns updated toy

  //  deleteToy(toyId)
  // soft deletes the entry
  // returns nothing
  
  // searchToy(Toyname [case sensitive])
  // returns array of toys with same same
}

main()
  .then(() => prisma_client.$disconnect())
  .catch(() => prisma_client.$disconnect());
