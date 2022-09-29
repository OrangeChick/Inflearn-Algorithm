function solution(s) {
  let answer;

  const centerStr = Math.floor(s.length / 2);

  for (let x of s) {
    s.length % 2 === 0
      ? (answer = s[centerStr - 1] + s[centerStr])
      : (answer = s[centerStr]);
  }

  return answer;
}
