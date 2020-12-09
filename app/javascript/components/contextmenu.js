export const contextMenu = () => {
  const spanArray = document.querySelectorAll('#test span')
  const test = document.querySelector("#test")
  const menu = document.querySelector('#menu');
	const outClick = document.getElementById('out-click');
	const item = menu.querySelectorAll('.menu-item');
  let selection = "synonymes" ;

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
      selection = li.innerText;
      test.dataset.action = selection;
      // console.log(selection);
      console.log(test.dataset.action)
			
    });
    
	});

	document.addEventListener('click', event => {
		menu.classList.remove('show');
  });
  return selection;
};



