function solution(s) {
  // 첫번째 풀이
  // let answer = "",
  //   max = Number.MIN_SAFE_INTEGER;

  // for (let x of s) {
  //   if (x.length > max) {
  //     max = x.length;
  //     answer = x;
  //   }
  // }

  // 두번째 풀이
  return s.sort((a, b) => b.length - a.length)[0];
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
