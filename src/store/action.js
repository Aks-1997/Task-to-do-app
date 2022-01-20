export const addTask = "AddTask";
export const editTask = "EditTask";
export const deleteTask = "DeleteTask";
export const completeTask = "CompleteTask";
export const currentid = "CurrentId";

export const setAddTask = (data) => {
    return(
        {
            type: addTask,
            task: data
        } 
    )
}

export const setEditTask = (data) => {
    return(
        {
            type: editTask,
            task: data
        } 
    )
}

export const setDeleteTask = (data) => {
    return(
        {
            type: deleteTask,
            task: data
        } 
    )
}

export const setCompleteTask = (data) => {
    return(
        {
            type: completeTask,
            task: data
        } 
    )
}

export const setCurrentId = (id) => {
    return(
        {
            type: currentid,
            id: id
        } 
    )
}