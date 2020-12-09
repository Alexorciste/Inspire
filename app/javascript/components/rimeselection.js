// import { synonymeScraping } from 'fetchword';

const rimeSelector = () => {
	// console.log(testString(urlcourante));
	//regex sur http://localhost:3000/texts/14/edit
	const listenKey = document.querySelector('#text_content');
	console.log(listenKey);
	if (listenKey) {
		let listSpan = [];
		listenKey.addEventListener('keyup', event => {
			const test = document.querySelector('#test');
			const divText = document.querySelector('#text_content > div');
			const splitText = divText.innerText.split(/[\s,;:']+/);

			test.innerHTML = ' ';
			const array = [];
			splitText.forEach((word, index) => {
				array.push(`<span>${word}</span>`);
				test.insertAdjacentHTML(
					'beforeend',
					`<span id="span${index}">${word} </span>`
				);

				// console.log(splitText);
			});

			test.querySelectorAll('span').forEach(span => {
				console.log(span);
				span.addEventListener('click', event => {
					const clickWord = event.currentTarget;
					const keyWord = clickWord.innerText;
					const divBox = document.querySelector('#results');
					divBox.classList.add('active');

					// divBox.querySelectorAll("li").forEach((li) => {
					// console.log(li);
					// li.addEventListener("click", (event) => {
					//     console.log(event);
					//  });

					// });

					// liClick.addEventListener("click",  (event) => {
					//     console.log(event.currenTarget);
					// });

					fetch(
						`http://${window.location.host}/api/v1/synonymes?keyword=${keyWord}`
					)
						.then(response => {
							return response.json();
						})
						.then(data => {
							// This is the HTML from our response as a text string
							let index = 0;
							divBox.innerHTML = ' ';

							data.forEach(result => {
								divBox.insertAdjacentHTML(
									'beforeend',
									`<span id="span${index}">${result} </span><br />`
								);
								index++;
							});

							divBox.querySelectorAll('span').forEach(span => {
								span.addEventListener('click', event => {
									const newWord = event.currentTarget.innerText;
									clickWord.innerText = newWord + ' ';

									divText.innerText = test.innerText;
									// divText.parentNode.replaceChild(test, divText);
								});
							});

							console.log(data);
							return data;
						})
						.catch(function (err) {
							// There was an error
							console.warn('Something went wrong.', err);
						});
				});
			});

			const finalString = array.join(' ');
			const urlcourante = document.location.href;
			const regex = /\/(\d+)\/[e]/;
			if (regex.test(urlcourante)) {
				const found = urlcourante.match(regex);
				const textId = '_'.concat(found[1]);
				document.querySelector(
					`#text_content_trix_input_text${textId}`
				).value = `<div>${finalString}</div>`;
			} else {
				document.querySelector(
					'#text_content_trix_input_text'
				).value = `<div>${finalString}</div>`;
			}

			//   document.querySelector("#text_content_trix_input_text_19").value = `<div>${finalString}</div>`
		});
	}
};

// const liSelector = () => {
// const divTwo = document.querySelector("#results")
//            divTwo.querySelectorAll("li").forEach((li) => {
//                  console.log(li);
//            });
//         };

export { rimeSelector };
//  export { liSelector };
