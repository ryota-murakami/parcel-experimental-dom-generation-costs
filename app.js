window.addEventListener('DOMContentLoaded', (event) => {
  function counterFunc(num) {

    function innerFunc() {
      return Date.now()
    }

    return num + 1
  }

  var setIntervalId
  let num = 1
  function fireCounter() {
    setIntervalId = setInterval(() => {
      const result = counterFunc(num++)
      let li = document.createElement('li')
      li.innerText = result
      document.getElementById('list').appendChild(li)
    }, 500)
  }

  fireCounter()

  const StopButton = document.getElementById('stop-button')
  StopButton.addEventListener('click', () => {
    if (setIntervalId) {
      clearInterval(setIntervalId)
      console.log(setIntervalId)
      setIntervalId = undefined
      console.log(setIntervalId)
    }
  })

  const StartButton = document.getElementById('start-button')
  StartButton.addEventListener('click', () => setIntervalId || fireCounter())
})
