const wordSelector = () => {
    const divText = document.querySelector("#text_content")
    console.log(divText);
    divText.addEventListener("keyup", (event) => {
        console.log(event);
    })
    
};





export { wordSelector };