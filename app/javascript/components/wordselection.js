import { synonymScrapping, rightPannelListener } from './fetchword'; 

import {
    contextMenu
} from "./contextmenu";



const wordSelector = () => {

    const listenKey = document.querySelector("#text_content");

    if (listenKey) {
        let listSpan = [];
        listenKey.addEventListener("keyup", (event) => {

            const test = document.querySelector("#test");
            const divText = document.querySelector("#text_content > div");
            const splitText = divText.innerText.split(/[\s,;:']+/);

            test.innerHTML = " ";
            const array = []
            splitText.forEach((word, index) => {
                array.push(`<span>${word}</span>`)
                test.insertAdjacentHTML("beforeend", `<span id="span${index}">${word} </span>`)
            });

            // pannelright
            rightPannelListener(test);

            
                const finalString = array.join(" ")
                const urlcourante = document.location.href;
                const regex = /\/(\d+)\/[e]/;
                if (regex.test(urlcourante)) {
                    const found = urlcourante.match(regex);
                    const textId = '_'.concat(found[1])
                    document.querySelector(`#text_content_trix_input_text${textId}`).value = `<div>${finalString}</div>`
                } else {
                    document.querySelector("#text_content_trix_input_text").value = `<div>${finalString}</div>`
                };

        

        });

    }
};




export {
    wordSelector
};