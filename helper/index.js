import * as path from 'path';
import * as fs from 'fs';
const DB_FILE = path.join(process.cwd(),'Tasks.json')

export function loadTask(){
    if(!fs.existsSync(DB_FILE)){
       fs.writeFileSync(DB_FILE,JSON.stringify([]),'utf-8')
       return []
    }
    const data = fs.readFileSync(DB_FILE,'utf-8')
    try {
        if(!data){
            fs.writeFileSync(DB_FILE,JSON.stringify([]),'utf-8')
            return []
        }
        return JSON.parse(data)
    } catch (error) {
        console.error( `ERROR: task can't parsed`)
    }
}

export function saveTask(tasks){
    fs.writeFileSync(DB_FILE,JSON.stringify(tasks,null,2))
}

export function listHelp(){
    const commands = [
        {command:"add",description:"<descrition of tasks>"},
        {command:"update", description:"<ID of task you want to update>"},
        {command:"delete", description:"<ID of task you want to delete>"},
        {command:"mark-in-progress", description:"<ID of task you want to mark-in-progress>"},
        {command:"mark-done", description:"<ID of task you want to mark-done>"},
        {command:"list", description:"to list all task"},
        {command:"list-done", description:"to list done task"},
        {command:"list-in-progress", description:"to list in-progress task"},
    ]
    commands.forEach((ele)=>{
        console.log(`${ele.command} ${ele.description}`)
    })
    process.exit(1)

}

