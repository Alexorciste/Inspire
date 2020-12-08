export const rightPannelListener = (test, wordArray) => {
  const divText = document.querySelector("#text_content > div");
  test.querySelectorAll("span").forEach((span) => {
    
    span.addEventListener("click", (event) => {

      const clickWord = event.currentTarget
      // fetch scrapping api
      synonymScrapping(test, divText, clickWord, wordArray)

    });

  });
}


const synonymScrapping = (test, divText, clickWord, wordArray) => {

  const keyWord = clickWord.innerText;
  const divBox = document.querySelector("#results");

  divBox.classList.add("active");

  fetch(`http://${window.location.host}/api/v1/synonymes?keyword=${keyWord}`)
    .then((response) => {
      return response.json();
    }).then((data) => {
      // This is the HTML from our response as a text string
      divBox.innerHTML = " ";
      data.forEach((result, index) => {
        divBox.insertAdjacentHTML("beforeend", `<span id="span${index}">${result} </span><br />`)
      })

      divBox.querySelectorAll("span").forEach((span) => {
        span.addEventListener("click", (event) => {
          const newWord = event.currentTarget.innerText;
          console.log("before", wordArray);

          // clickWord.innerText = newWord + " ";
          var regex = new RegExp(`${keyWord}`,"i")
          for(var i=0; i < wordArray.length; i++) {
            // console.log(keyWord, newWord)
            wordArray[i] = wordArray[i].replace(regex, newWord);
           }

          console.log("after", wordArray);
          

          // let fruits = [‘Apple’, ‘Banana’];
          // var dep = new RegExp(`${fruits[0]}`,“i”)
          // const arr = ‘arrivee’
          // console.log(fruits,arr)
          // for(var i=0; i < fruits.length; i++) {
          //  fruits[i] = fruits[i].replace(dep, arr);
          // }
          // console.log(fruits,arr)















          //  divText.innerText = test.innerText;
          
          //  const splitText = divText.innerText.split(/[\s,;:’]+/);
          //  test.innerHTML = " ";
          //  const array = [];
          //  splitText.forEach((word, index) => {
          //    array.push(`<span>${word}</span>`);
          //    test.insertAdjacentHTML(
          //     "beforeend",
          //      `<span id="span${index}">${word} </span>`
          //    );
          //   rightPannelListener(test);
          //    });

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