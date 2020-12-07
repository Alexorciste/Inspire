
export const rightPannelListener = (test) => {
  const divText = document.querySelector("#text_content > div");
  test.querySelectorAll("span").forEach((span) => {
      console.log(span);
      span.addEventListener("click", (event) => {
         
          const clickWord = event.currentTarget
          
  
          // fetch scrapping api
          synonymScrapping(test, divText, clickWord)
  
      });
  
  });
  }


const synonymScrapping = (test, divText, clickWord) => {
  
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

          divText.innerText = test.innerText;

           const splitText = divText.innerText.split(/[\s,;:’]+/);
           test.innerHTML = " ";
           const array = [];
           splitText.forEach((word, index) => {
             array.push(`<span>${word}</span>`);
            test.insertAdjacentHTML(
              "beforeend",
              `<span id="span${index}">${word} </span>`
            );
            rightPannelListener(test);
          });

        });



      });

      console.log(data);
      return data;
    }).catch(function (err) {

      console.warn('Something went wrong.', err);
    });


}


export {
  synonymScrapping
}