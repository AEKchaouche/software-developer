

let role = prompt("what is your role :")

switch(role){

    case "admin":
        document.write("create,  update, delete")
        break
    
    case "moderator":
        document.write("creat , update");
        break
    
    case "editor":
        document.write("update");
        break
    
    default:
        document.write("hello user")
     
}
