export const contextMenu = () => {
  const spanArray = document.querySelectorAll('#test span')
  const test = document.querySelector("#test")
  const menu = document.querySelector('#menu');
	const outClick = document.getElementById('out-click');
	const item = menu.querySelectorAll('.menu-item');
  let selection = "synonymes" ;

//   if (spanArray) {
// 	spanArray.forEach(span => {
// 		span.addEventListener('contextmenu', e => {
// 			e.preventDefault();
// 			menu.style.top = `${e.clientY}px`;
// 			menu.style.left = `${e.clientX}px`;
// 			menu.classList.add('show');
// 		});
	// });

	item.forEach(li => {
		li.addEventListener('click', event => {
      selection = li.innerText;
	  test.dataset.action = selection;
	  
	  
	//   test.classList.toggle("rime", "synonyme");
	//         // console.log(selection);
      // console.log(test.dataset.action)
			
	});
	
	
	// document.querySelectorAll('.menu-item').forEach(function(e) {
	// 	e.addEventListener('click', function() {
	// 	  e.classList.add("red");
	// 	})
	//   });

    
	});

	document.addEventListener('click', event => {
		menu.classList.remove('show');
  });
  return test.dataset.action;
};
// }


