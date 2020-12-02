const wordSelector = () => {
    const divText = document.querySelector("#text_content")
    console.log(divText);
    divText.addEventListener("keyup", (event) => {
        if(event.key=" ")
        console.log(event);
    })
    
};





export { wordSelector };