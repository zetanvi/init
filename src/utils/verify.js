/**
 * 邮箱
 * @param {*} s
 */
export function isEmail (s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile (s) {
  return /^1(3|4|5|7|8)\d{9}$/.test(s)
}

/**
 * URL地址
 * @param {*} s
 */
export function isURL (s) {
  return /^http[s]?:\/\/.*/.test(s)
}
/**
 * 密码等级
 * @param {*} s
 */
export function passwordLevel(password) {
  var Modes = 0;
  for (let i = 0; i < password.length; i++) {
      Modes |= CharMode(password.charCodeAt(i));
  }
  return bitTotal(Modes);

  //CharMode函数
  function CharMode(iN) {
      if (iN >= 48 && iN <= 57)//数字
          return 1;
      if (iN >= 65 && iN <= 90) //大写字母
          return 2;
      if ((iN >= 97 && iN <= 122) || (iN >= 65 && iN <= 90)) //大小写
          return 4;
      else
          return 8; //特殊字符
  }

  //bitTotal函数
  function bitTotal(num) {
      var modes = 0;
      for (let i = 0; i < 4; i++) {
          if (num & 1) modes++;
          num >>>= 1;
      }
      return modes;
  }
}