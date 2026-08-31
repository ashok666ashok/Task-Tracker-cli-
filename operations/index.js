
import {loadTask,saveTask} from '../helper/index.js'
import {nextId,timeStamp} from '../utils/index.js'


export function addTask(description){
    let tasks = loadTask();
    let task = {
        id:nextId(tasks),
        description:description,
        status:'todo',
        createdAt:timeStamp(),
        updatedAt:null
    }
    tasks.push(task)
    saveTask(tasks)
    console.log(`task ${description} added.`)
    process.exit(1)
}

export function updateTask(id,description){
    let tasks = loadTask();
    id = parseInt(id)
    let task = tasks.find((t)=>t.id===id);
    if(!task){
        console.error("task is not existed at provided id. ")
        process.exit(1)
    }
    task.description=description
    task.updatedAt=timeStamp()
    saveTask(tasks)
    console.log("Task Updated")
    process.exit(1)
}

export function deleteTask(id){
    let tasks = loadTask();
    id = parseInt(id)
    let taskIndex = tasks.findIndex((t)=>t.id===id)
    if(taskIndex<0){
        console.error("task is not registered on provided id")
        process.exit(1)
    }
    tasks.splice(taskIndex,1)
    saveTask(tasks)
    console.log("task deleted")
    process.exit(1)
}

export function changeStatus(id,status){
    const state = ['todo','in-progress','done']
    if(!state.includes(status)){
        console.error("invalid status")
        process.exit(1)
    }else{
        let tasks = loadTask() ;
        id = parseInt(id)
        let task = tasks.find((t)=>t.id===id);
        if(!task){
            console.error("invalid id")
            process.exit(1)
        }else{
            task.status=status;
            task.updatedAt=timeStamp()
            saveTask(tasks)
            console.log("status updated")
            process.exit(1)
        }
    }

}

export function listByStatus(status){
    const tasks=loadTask()
    const list = tasks.filter((task)=>task.status===status)
    if(list.length==0){
        console.log(`There is no task in ${status} status.`)
        process.exit(1)
    }else{
        console.table(list)
        process.exit(1)
    }
}

export function listAllTasks(){
    const tasks = loadTask();
    if(tasks.length>0){
        console.table(tasks)
        process.exit(1);
    }else{
        console.log(`There has no Tasks.`);
        process.exit(1);
    }
}

