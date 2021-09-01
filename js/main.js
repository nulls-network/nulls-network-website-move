const formatTime = (i) => {
  return i < 10 ? `0${i}` : i
}

const refreshTime = () => {
  let t = new Date()
  document.getElementById('time').innerHTML = `$ ${t.getHours()}:${formatTime(t.getMinutes())}:${formatTime(t.getSeconds())}`
}

refreshTime()
setInterval(refreshTime, 1000)
