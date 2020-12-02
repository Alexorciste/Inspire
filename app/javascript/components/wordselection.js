import { inputChangeSelector } from "@rails/ujs";

const wordSelector = () => {
    
    const keyText = document.querySelector("#text_content")
    
    keyText.addEventListener("keyup", (event) => {
        
        // if(event.key == " ");
        const divText = document.querySelector(".form-inputs");
        const val = divText.textContent; 
        const split = val.split(/[\s,\n]+/);
        console.log(split);
        console.log(event);
        

    })
    
};





export { wordSelector };