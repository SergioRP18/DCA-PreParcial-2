import { removeTask, toggleTask } from "../../store/actions";
import { dispatch } from "../../store/index";

export enum Attribute {
    "uid"="uid",
    "name"="name",
    "status"="status",
}

class AppItem extends HTMLElement {
    uid?: number;
    name?: string;
    status?: boolean;

    static get observedAttributes(){
        return Object.keys(Attribute);
    }

    attributeChangedCallback(propName:Attribute, oldValue:string|undefined, newValue:string|undefined){
        switch(propName){
            case Attribute.uid:
                this.uid = newValue ? Number(newValue):undefined;
                break;
            case Attribute.status:
                this.status = newValue ? newValue === 'true' : undefined;
                break;

            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
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
                <div class="container">
                    <h1>${this.name}</h1>
                    <button class="delete">Delete</button>
                    <input type="checkbox" ${this.status ? 'checked':''} class="check">
                </div>
            `
        }
        const btnDelete = this.shadowRoot?.querySelector('.delete')
        const btnCheck = this.shadowRoot?.querySelector('.check')
        btnDelete?.addEventListener('click', () => {
            dispatch(removeTask(this.uid!))
        })
        
        btnCheck?.addEventListener('change', () => {
            dispatch(toggleTask(this.uid!))
        })
    }
}

customElements.define('task-item', AppItem);
export default AppItem;