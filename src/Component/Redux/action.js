export const addTodo =(data)=>{
    return{
        type:'todos/todoAdded',
        payload:data
    }
}

export const filterSearchName =(data)=>{
    return{
        type:'filter/SearchName',
        payload:data
    }
}