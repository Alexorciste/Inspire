// import { synonymeScraping } from 'fetchword'; 

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

            test.querySelectorAll("span").forEach((span) => {
                console.log(span);
                span.addEventListener("click", (event) => {

                    const clickWord = event.currentTarget
                    const keyWord = clickWord.innerText;
                    const divBox = document.querySelector("#results");

                    divBox.classList.add("active");

                    fetch(`http://${window.location.host}/api/v1/synonymes?keyword=${keyWord}`)
                        .then((response) => {
                            return response.json();
                        }).then((data) => {
                            // This is the HTML from our response as a text string
                            let index = 0
                            divBox.innerHTML = " ";

                            data.forEach((result) => {
                                divBox.insertAdjacentHTML("beforeend", `<span id="span${index}">${result} </span><br />`)
                                index++;
                            })

                            divBox.querySelectorAll("span").forEach((span) => {
                                span.addEventListener("click", (event) => {
                                    const newWord = event.currentTarget.innerText;
                                    clickWord.innerText = newWord + " ";
                                    changeValueInput();
                                    divText.innerText = test.innerText;
                                

                                });

                            });

                            console.log(data);
                            return data;
                        }).catch(function (err) {

                            console.warn('Something went wrong.', err);
                        });

                });

            });

            const changeValueInput = () => {
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

            };

        });

    }
};




export {
    wordSelector
};