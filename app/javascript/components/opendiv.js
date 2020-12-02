const openNav = () => {
    
    const redButton = document.querySelector(".btn-danger");
    const divBox = document.querySelector(".box");
    
    redButton.addEventListener("click", (event) => {
      divBox.classList.toggle("active");
      

      
    });
      
  };

export { openNav };