const openNav = () => {
    // TODO: Select the big green button
    const redButton = document.querySelector(".btn-danger");
    const divBox = document.querySelector(".box");
    redButton.addEventListener("click", (event) => {
      divBox.classList.toggle("active");
      // divBox.style.width = "50%";
      // divBox.style.transition = "0.8s";

      
    });
    
  // ceci est un commentaire pour repusher again !!!!!
    // TODO: Bind the `click` event to the button
    // TODO: On click, display `Thank you!` in a JavaScript alert!
  };

export { openNav };