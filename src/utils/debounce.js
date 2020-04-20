// 防抖函数
const debounce =(fn,wait)=>{
  let timer = null
  return ()=>{
    if(timer!==null) clearTimeout(timer)
    timer = setTimeout(fn,wait)
  }
}
export default  debounce;