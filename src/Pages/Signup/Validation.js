/*export function IsEmail(value) {
  var regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  return regExp.test(value) ? true : false;
} */

export function IsId(value) {
  let regExp = /[A-Za-z0-9]\w{4,}/;
  return regExp.test(value) ? true : false; //조건 충족 시 true 반환
}

export function IsPassword(value) {
  var regExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;
  console.log(regExp.test(value));
  return regExp.test(value) ? true : false; //형식에 맞는 경우 true 리턴
}
