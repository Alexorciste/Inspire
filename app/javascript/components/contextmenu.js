const contextMenu = () => {
  
  const clickable = document.querySelector('#test' )
  // const clickable = test.querySelector("span" )
  const menu = document.querySelector('#menu')
  const outClick = document.getElementById('out-click')

  clickable.querySelectorAll("span").forEach((span) => {

    span.addEventListener('contextmenu', e => {
    e.preventDefault()

      menu.style.top = `${e.clientY}px`
      menu.style.left = `${e.clientX}px`
      menu.classList.add('show')

      outClick.style.display = "block"
    })
  })

    outClick.addEventListener('click', () => {
      menu.classList.remove('show')
      outClick.style.display = "none"
    })
}

export { contextMenu }


