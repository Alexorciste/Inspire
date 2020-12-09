import { rightPannelListener } from './fetchword';
import { contextMenu } from './contextmenu';

const wordSelector = () => {

	const listenKey = document.querySelector('#text_content');

	if (listenKey) {
		// let listSpan = [];
		listenKey.addEventListener('keyup', event => {
			const test = document.querySelector('#test');
			const divText = document.querySelector('#text_content > div');
			const wordArray = divText.innerText.split(/[\s,;:']+/);

			test.innerHTML = ' ';
			const spanArray = [];
			wordArray.forEach((word, index) => {
				spanArray.push(`<span>${word}</span>`);
				test.insertAdjacentHTML(
					'beforeend',
					`<span id="span${index}">${word} </span>`
				);
			});

			
            const action = contextMenu();
            console.log(action);
            
			// pannelright
			rightPannelListener(test, wordArray, action);

			// const finalString = wordArray.join(" ")
			// const urlcourante = document.location.href;
			// const regex = /\/(\d+)\/[e]/;
			// if (regex.test(urlcourante)) {
			//     const found = urlcourante.match(regex);
			//     const textId = '_'.concat(found[1])
			//     document.querySelector(`#text_content_trix_input_text${textId}`).value = `<div>${finalString}</div>`
			// } else {
			//     document.querySelector("#text_content_trix_input_text").value = `<div>${finalString}</div>`
			// };
		});
	}

};

export { wordSelector };
