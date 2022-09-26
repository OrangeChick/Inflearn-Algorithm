function solution(a, b, c) {
  let numArr = [a, b, c];
  let answer = Math.min(...numArr);
  return answer;
}

console.log(solution(6, 5, 11));
