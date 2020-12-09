export const contextMenu = () => {
  const spanArray = document.querySelectorAll('#test span')
  const menu = document.querySelector('#menu');
	const outClick = document.getElementById('out-click');
	const item = menu.querySelectorAll('.menu-item');

	spanArray.forEach(span => {
		span.addEventListener('contextmenu', e => {
			e.preventDefault();
			menu.style.top = `${e.clientY}px`;
			menu.style.left = `${e.clientX}px`;
			menu.classList.add('show');
		});
	});

	item.forEach(li => {
		li.addEventListener('click', event => {
			let selection = li.innerText;
			// console.log(selection);
			return selection;
		});
	});

	document.addEventListener('click', event => {
		menu.classList.remove('show');
	});
};



