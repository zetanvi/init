// 保留n位小数并格式化输出(整数的在后面加上.0)
const keepDecimal = (num,n)=>{
  // Math.round() 四捨五入  Math.pow() 冪運算  返回運算值  Math.pow(10,1) 返回10 
  let integer = Math.round(num*Math.pow(10,n))/Math.pow(10,n)
  let str = integer.toString()
  let point = str.indexOf('.')
  if(point<0){
    str += '.'
  }
  for (let i = str.length - str.indexOf('.'); i<=n; i++) {
    str += '0'
  }
  return str
}
export default keepDecimal