export function nextId(tasks){
    if(tasks.length===0){
        return 1
    }else{
        return Math.max(...tasks.map((t)=>t.id))+1
    }
}

export function timeStamp(){
    const now = new Date();
    const localNumeric = now.toLocaleString('en-GB', { hour12: false });
    return localNumeric;
}