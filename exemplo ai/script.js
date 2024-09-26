const titulo = document.querySelector('h1');
// console.log(titulo.innerHTML)

// console.log('innerHTML:', titulo.innerHTML)

// console.log('innertext:', titulo.innerText)

// console.log('textcontent:', titulo.textContent)

const body = document.querySelector('body');
const ancora = document.createElement('a');
body.appendChild(ancora)
ancora.setAttribute("href", "https://github.com/josesbaraini/Front-end")
ancora.setAttribute("target", "_blanc")
ancora.innerText = 'oi'
ancora.style="font-size : 40px; color: red"

titulo.remove()