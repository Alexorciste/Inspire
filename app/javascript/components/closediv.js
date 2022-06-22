const closeNav = () => {
  const close = document.querySelector(".close");
  const divBox = document.querySelector('#results');
  close.addEventListener("click", (event) => {
    divBox.classList.remove('active');
    close.classList.remove('active');
  });
};
export {closeNav };
