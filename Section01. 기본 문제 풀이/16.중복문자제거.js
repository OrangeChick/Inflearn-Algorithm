function solution(s) {
  // 1st solution
  // let answer = "";

  // const strArr = s.split("");
  // const setStrArr = [...new Set(strArr)];
  // answer = setStrArr.join("");

  // 2nd solution
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }

  return answer;
}
console.log(solution("ksekkset"));
