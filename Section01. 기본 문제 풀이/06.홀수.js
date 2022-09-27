function solution(arr) {
  let answer = [];
  let oddsArr = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddsArr.push(arr[i]);
      sum += arr[i];
    }
  }

  answer.push(sum);
  answer.push(Math.min(...oddsArr));

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
