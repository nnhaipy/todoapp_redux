// export const selector=(state)=>state.todos;
export const selectorTodos=(state)=>{
    const filteredData = state.todos.filter(item=>{
        return item.name.includes(state.filters.name);
    })
    return filteredData;
};

export const selectorSearchText=(state)=>state.filters.name;

