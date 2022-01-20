import * as actions from './action';

const initialstate={
    data : [],
    id : 0,
    currentTaskId : null
}

const reducer = (state={data:[],id:0},action) => { 

    let id = state.id;
    
    switch(action.type)
    {
        case actions.addTask :
            return {
                ...state,
                data : state.data.concat(action.task),
                id : id+1
            };
            break;

        case actions.editTask :
            return{
                ...state,
               data : [...action.task]
            }
            break;

        case actions.deleteTask :
            return{
                ...state,
               data : [...action.task]
            }
            break;

        case actions.completeTask :
            return{
                ...state,
                data : [...action.task]
            }
            break;

        case actions.currentid : 
            return{
                ...state,
                currentTaskId : action.id
            }
            break;
    }

    return state;
}

export default reducer;