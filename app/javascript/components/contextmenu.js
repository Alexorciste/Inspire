export const contextMenu = () => {
	const spanArray = document.querySelectorAll('#test span')
	const test = document.querySelector("#test")
	 const menu = document.querySelector('#menu');
	  const outClick = document.getElementById('out-click');
	  const item = menu.querySelectorAll('.menu-item');
	  const openDivButton = document.querySelector(".open-button")
	  const input = document.querySelector('.action-word')
	  
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
  
	  item.forEach(button => {
		  button.addEventListener('click', event => {
			  selection = button.innerText;
			  test.dataset.action = selection;
  
			  if(selection === "rimes") { 
				  input.style.display = ""
				  
			  }
			  else if (selection === "synonymes") {
				  input.style.display = "none"
			  }
  
				  
		
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
  
  // 	openDivButton.addEventListener("click", (event) => {
  // 		console.log(event)
  // 		test.classList.toggle("active");
  // });
  
  
	   document.addEventListener('click', event => {
		  menu.classList.remove('show');
	 });
	return test.dataset.action;
  };
  // }
  
  
  