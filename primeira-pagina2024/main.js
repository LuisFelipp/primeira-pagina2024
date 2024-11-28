import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1> Versionando minha aplicação web<h1>
    <img src="https://archives.sva.edu/uploads/post/486c07fc9955b994aa92080dec4ee2f6.jpg" >
  </div>
`

setupCounter(document.querySelector('#counter'))
