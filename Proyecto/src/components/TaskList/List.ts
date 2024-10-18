import { appState } from "../../store/index";
import { Task } from "../../types/Task";
import { TaskItem } from "../indexPadre";
import AppItem, { Attribute } from "../TaskItem/Item";

class AppList extends HTMLElement {
    Items: TaskItem[]=[]
    constructor(){
        super();
        this.attachShadow({mode: "open"})

        appState.tasks.forEach((task: Task) => {
            const Item = this.ownerDocument.createElement('task-item') as AppItem;
            Item.setAttribute(Attribute.uid, String(task.id));
            Item.setAttribute(Attribute.name, task.name);
            Item.setAttribute(Attribute.status, task.status ? "true" : "false");
            this.Items.push(Item)
        })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
			this.Items.forEach((taskItem) => {
				this.shadowRoot?.appendChild(taskItem)
			})
		}
    }
}

customElements.define('task-list', AppList);
export default AppList;