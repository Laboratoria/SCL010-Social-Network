
import {templateConfirmationTxt} from './assets/views/templateConfirmationTxt.js'
import {templateLogin} from './assets/views/templateLogin.js'
import {templateMainScreen} from './assets/views/templateMainScreen.js'
import {templateProfile} from './assets/views/templateProfile.js'
import {templateRegister} from './assets/views/templateRegister.js'
import {templateRegister2} from './assets/views/templateRegister2.js'
import {templateWall} from './assets/views/templateWall.js'

const showTemplate = (hash) =>{
    //console.log("SHOW TEMPLATE HASH", hash);
    const router = hash.substring(2);
    const containerRoot =
        document.getElementById('root');
    containerRoot.innerHTML = '';


    switch (router) {
        case 'confirmation':
            containerRoot.appendChild(templateConfirmationTxt())
            break;
        case 'login':
            containerRoot.appendChild(templateLogin())
            break;
        case '':
            containerRoot.appendChild(templateMainScreen())
            break;
        case 'profile':
            templateProfile().then(templateProfile=>{
                containerRoot.appendChild(templateProfile);
            });
            break;         
        case 'register':
            containerRoot.appendChild(templateRegister())
            break;
        case 'register2':
            containerRoot.appendChild(templateRegister2())
            break;
        case 'wall':
            containerRoot.appendChild(templateWall())
            break;
        default:
            containerRoot.innerHTML = `<p> Error 404</p>`
    }
}

export const initRouter = () => {
    window.addEventListener('load', showTemplate(window.location.hash));
    if ('onhashchange' in window) {
        window.onhashchange = () => {
            showTemplate(window.location.hash);
        }
    }
}