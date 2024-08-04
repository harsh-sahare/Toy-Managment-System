# Toy Management System

It lets the user to create a account and store toys in there database


## Run 
downlaod the repository and run \
`npm run dev`\
 in the terminal



## Functions

### Create a new user
createNewUser( {email,password} ):
return newly created users {uiid , email}

### Login 
loginUser( {email,password} ):
return users data {uiid , email , directory }

### Create a new toy
createToy( {uuid , email , directory } , { toyname } )
return newly created toy

### Update a exisiting toy
updateToy(toyId , data)
returns updated toy

### Delete a toy
deleteToy(toyId)
soft deletes the entry
returns nothing
  
### Search a toy with name
searchToy(Toyname [case sensitive])
returns array of toys with same same
