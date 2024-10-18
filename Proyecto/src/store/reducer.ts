import { Actions } from "../types/store"
import { Task } from "../types/Task";

export const reducer = (currentAction:any, currentState:any) => {
    const {action, payload} = currentAction;

    switch(action){
        case Actions.ADD_TASK:
            return{
                ...currentState,
                tasks: [...currentState.tasks, payload]
            };
        case Actions.REMOVE_TASK:
            return{
                ...currentState,
                tasks: currentState.tasks.filter((task: Task) => task.id !== payload)
            }
        case Actions.TOGGLE_TASK:
            return{
                ...currentState,
                tasks: currentState.tasks.map((task: Task) => {
                    if(task.id === payload){
                        return{
                            ...task,
                            status: !task.status,
                        };
                    }
                    return task;
                })
            };

        default:
            return currentState;
    }
}