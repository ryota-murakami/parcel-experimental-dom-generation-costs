window.addEventListener('DOMContentLoaded', (event) => {
  let forEndFlag = false
  for (let i=0;i<10000;i++) {
    let div = document.createElement('div')
    div.innerText = '<div>'
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)
    document.body.appendChild(div)

    if (i % 0) {
      document.body.innerHTML = ''
    }

    if (i === (100000 - 1)) {
      forEndFlag = true
    }
  }

  if (forEndFlag) {
    document.body.innerText = 'End'
  }

})