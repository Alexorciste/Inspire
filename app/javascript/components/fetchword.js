

import { contextMenu } from './contextmenu'

 
const rimeWords = (data, clickWord) => {
  // This is the HTML from our response as a text string
  const divBox = document.querySelector('#results');
  const keyWord = clickWord.innerText;

	divBox.innerHTML = ' ';
	data.forEach((result, index) => {
		divBox.insertAdjacentHTML(
			'beforeend',
			`<span id="span${index}">${result} </span><br />`
		);
  });

   divBox.querySelectorAll('span').forEach(span => {
	 	span.addEventListener('click', event => {
      let copyWord = event.currentTarget;
      let textArea = document.createElement("textArea")
      textArea.value = copyWord.textContent
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      textArea.remove()
     });
   })

  // return data;
};



const swapWords = (data, clickWord) => {
  // This is the HTML from our response as a text string
  const divBox = document.querySelector('#results');
  const keyWord = clickWord.innerText;

	divBox.innerHTML = ' ';
	data.forEach((result, index) => {
		divBox.insertAdjacentHTML(
			'beforeend',
			`<span id="span${index}">${result} </span><br />`
		);
	});

	divBox.querySelectorAll('span').forEach(span => {
		span.addEventListener('click', event => {
			const newWord = event.currentTarget.innerText;

      clickWord.innerText = newWord + ' ';
      const divText = document.querySelector('#text_content > div');
      const wordArray = divText.innerText.split(/[\s,;:']+/);
			var regex = new RegExp(`${keyWord}`, 'g');
			for (var i = 0; i < wordArray.length; i++) {
				if (keyWord === wordArray[i]) {
					  wordArray[i] = newWord;
				}

			}
			divText.innerText = test.innerText;

		});
	});

	return data;
};

export const synonymScrapping = (test, clickWord, wordArray, action) => {
	const keyWord = clickWord.innerText;
	const divBox = document.querySelector('#results');

  divBox.classList.add('active');
  console.log(test.dataset.action)
  // fetch(`http://${window.location.host}/api/v1/synonymes?keyword=${keyWord}`)

  if(test.dataset.action === "synonymes" || test.dataset.action === "rimes") {
	// if(test.dataset.action === "rimes") {
	// 	keyWord = keyWord.slice(-letterNumber);
	// }
	fetch(`http://${window.location.host}/api/v1/${test.dataset.action}?keyword=${keyWord}`)
		.then(response => {
			return response.json();
    })
    .then((data) => {
      test.dataset.action === "synonymes" ?
      swapWords(data, clickWord) :
       test.dataset.action === "rimes" ?
      rimeWords(data, clickWord) : console.log("not a valid action");

    })
		.catch(function (err) {
			console.warn('Something went wrong.', err);
		});
  };
}


// const cutWord = () => {

// 	const lastLetter = document.querySelector("#numbers")
// 	return parseInt(lastLetter.value);

//  }




export const rightPannelListener = (test, wordArray, action) => {
	// cutWord();
	test.querySelectorAll('span').forEach(span => {
		span.addEventListener('click', event => {
			menu.style.top = `${event.clientY}px`;
			menu.style.left = `${event.clientX}px`;
			menu.classList.add('show');

			const clickWord = event.currentTarget;
			
			// letterNumber = contextMenu();

			// fetch scrapping api
			synonymScrapping(test,clickWord, wordArray, action);
		});
	});
};
