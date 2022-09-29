function solution(s) {
  // 1st solution
  // let answer = [...new Set(s)];

  // 2nd solution
  let answer = s.filter((v, idx) => {
    if (s.indexOf(v) === idx) return true;
  });

  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
