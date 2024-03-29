/**
 * 校验手机号码
 * @param str
 * @returns {boolean}
 */
export function checkMobile(mobile) {
  return mobile == null ? false : /^(((1[3456789][0-9]{1})|(15[0-9]{1}))+\d{8})$/.test(mobile);
}

/**
 * 校验验证码
 * @param verifyCode
 * @returns {boolean}
 */
export function checkVerifyCode(verifyCode) {
  return verifyCode == null ? false : /^[0-9]{4}$/.test(verifyCode);
}

/**
 * 校验密码
 * @param password
 * @returns {boolean}
 */
export function checkPassword(password) {
  return password == null ? false : /^[a-zA-Z0-9]{8,20}$/g.test(password);
}


/**
 * 是否为空
 * @param input
 * @returns {boolean}
 */
export function isBlank(input) {
  return input == null || input == undefined || input == '';
}

/* 判断字符串长度，汉字为1 */
export function strLength(str) {
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    len++;
  }
  return len;
}


