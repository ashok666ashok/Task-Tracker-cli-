const {addTask, listAllTasks,updateTask,deleteTask,changeStatus,listByStatus} = require('./operations/index')
const {listHelp} = require('./helper/index')

function main(){
    const [,,operation,...tasks] = process.argv;
    switch(operation !== undefined?operation.toLowerCase():''){
        case "add":
            addTask(tasks[0])
            break;
        case "update":
            updateTask(tasks[0],tasks[1])
            break;
        case "delete":
            deleteTask(tasks[0])
            break;
        case "mark-in-progress":
            changeStatus(tasks[0],"in-progress")
            break;
        case "mark-done":
            changeStatus(tasks[0],"done")
            break;
        case "list":
            listAllTasks()
            break;
        case "list-in-progress":
            listByStatus("in-progress")
            break;
        case "list-done":
            listByStatus("done")
            break;
        case "list-todo":
            listByStatus("todo")
            break
        default:
            listHelp()
    }


}

main()
