function solution(arr) {
  let answer = 0;
  let plusScore = 0;

  for (let x of arr) {
    if (x === 1) {
      plusScore += 1;
      answer += plusScore;
    } else plusScore = 0;
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
