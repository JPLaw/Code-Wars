function solution(str){
  let stringArr = str.split('');
  console.log(str.split());
  let newArray = [];
  while(stringArr.length > 0) {
  let currentEl = stringArr.pop();
  newArray.push(currentEl);
  }
  return newArray.join('');
}

