

const wordSelector = () => {
    let listSpan = [];
    const urlcourante = document.location.href;
    // console.log(testString(urlcourante));
    //regex sur http://localhost:3000/texts/14/edit
    const listenKey = document.querySelector("#text_content");
    
    listenKey.addEventListener("keyup", (event) => {
        
        const test = document.querySelector("#test");
        const divText = document.querySelector("#text_content > div");
        const splitText = divText.innerText.split(/[\s,;:']+/);
        

        
        
                
        test.innerHTML = " ";
        const array = []
        splitText.forEach((word, index) => {
            array.push(`<span>${word}</span>`) 
            test.insertAdjacentHTML("beforeend", `<span id="span${index}">${word} </span>` )

            
                // console.log(splitText);
        });
        
            test.querySelectorAll("span").forEach((span) => {
            console.log(span);
            span.addEventListener("click", (event) => {
            console.log(event);
                
            });
        });  
       

      const finalString = array.join()
      document.querySelector("#text_content_trix_input_text_17").value = `<div>${finalString}</div>`

    });

   
};



export { wordSelector };


