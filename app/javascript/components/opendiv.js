const openNav = () => {
   
    
  const test = document.querySelector("#test");
  const openDivButton = document.querySelector(".open-button")


  openDivButton.addEventListener("click", (event) => {
    console.log(event)
    test.classList.toggle("active");
});

};

export { openNav };