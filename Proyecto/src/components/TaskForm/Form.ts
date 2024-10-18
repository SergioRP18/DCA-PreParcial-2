import { addTask } from "../../store/actions";
import { Task } from "../../types/Task";
import { addObserver,appState,dispatch } from "../../store/index"; 

class TaskForm extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <h1>Gestionador De Tareas</h1>
                <div class="content">
                    <form>
                        <input type="text" id="add" placeholder="Escribe una tarea" required>
                        <button type="submit" id="addButton">Add Task</button>
                    </form>
                </div>
            `
        }

        const taskForm = this.shadowRoot?.querySelector('.content') as HTMLFormElement;
        taskForm?.addEventListener("submit", (e) => {
            e.preventDefault()

            const taskInput = this.shadowRoot?.querySelector('#add') as HTMLInputElement;
            const taskName = taskInput.value;
            
            const newTask: Task = {
                id: Date.now(),
                name: taskName,
                status: false
            }
            dispatch(addTask(newTask)) 
        })
    }
}

customElements.define('task-form', TaskForm)
export default TaskForm;