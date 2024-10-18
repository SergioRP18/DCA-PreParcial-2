import './components/indexPadre'
import { addObserver } from './store/index';


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    async connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <task-form></task-form>
                <task-list></task-list>
            `
            
        }
    }
}
customElements.define('app-container', AppContainer)