import prisma_client from "./prisma_client";

async function main() {
  console.log("hello");

  // const user = await loginUser({
  //   email: "harsh@gmail.com",
  //   password: "harsh123",
  // });
  // console.log(user);
  // if (user != null) {
  //   console.log(user);
  //   const toy = await searchToy("494bccd9-d721-4596-97c9-8d9a4cbbfdfc");
  //   console.log(toy);
  // }
}

main()
  .then(() => prisma_client.$disconnect())
  .catch(() => prisma_client.$disconnect());
