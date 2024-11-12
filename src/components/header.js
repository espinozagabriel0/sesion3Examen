import { logo } from "./logo.js";
import {menu} from "./menu.js";


export function header(){
    return `
        <nav class="navbar navbar-light bg-body-tertiary text-light">
            <div class="container">
                <a class="navbar-brand" href="#">${logo()}<a/>
            </div>
            ${menu()}
        </nav>
        
    `;
}