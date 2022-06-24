export const contextMenu = () => {
	
	const spanArray = document.querySelectorAll('#test span')
	const test = document.querySelector("#test")
	 const menu = document.querySelector('#menu');
	  const outClick = document.getElementById('out-click');
	  const item = menu.querySelectorAll('.menu-item');
	  const openDivButton = document.querySelector(".open-button")
	  const input = document.querySelector('.action-word')
	  let selection = "synonymes" ;
  
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
	  });
	  });
	   document.addEventListener('click', event => {
		  menu.classList.remove('show');
	 });
	return test.dataset.action;
  };
