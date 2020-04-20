// 节流函数
const throttle = (fn, delay) => {
  let prev = Date.now()
  return () => {
    let now = Date.now()
    if (now - prev > delay) {
      fn()
      prev = Date.now()
    }
  }
}


export default throttle;
