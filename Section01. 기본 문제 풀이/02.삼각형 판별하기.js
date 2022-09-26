function solution(a, b, c) {
  let answer = "YES";
  const numArr = [a, b, c];
  const sortArr = numArr.sort(function (a, b) {
    return a - b;
  });

  if (sortArr[0] + sortArr[1] > sortArr[2]) return answer;
  else return "NO";
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
