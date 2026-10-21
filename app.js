let todo = [];

let req = prompt("Please Enter Your Request: ");

while (true) {

    if (req == "Quit") {
        console.log("Quit From The Todo");
        break;
    }

    if (req == "List") {
        console.log("----------------");
        for(let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("----------------");
    }

    else if (req == "Add") {
        let task = prompt("Enter What Task You Want To Add: ");
        todo.push(task);
        console.log("Task Added");
    }
    
    else if (req == "Delete")
    {
        let idx = prompt("Enter Index of Task You Want To Delete: ");
        todo.splice(idx,1);
        console.log("Task Deleted");
    } 

    else {
        console.log("Wrong Request");
    }

    req = prompt("Please Enter Your New Request: ");

}