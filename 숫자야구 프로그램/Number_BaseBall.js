// 터미널에서 입력받기 위해 readline 가져오기
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

let count = 0;
  
let random_num = '';
for(let i = 0; i < 3; i++) {
    // 0 ~ 9 , 0 ~ 1 미만
    let ran = Math.floor(Math.random() * 10) + '';
    // 0이 나오면 random한번 더 실행해줘
    if(random_num[0] === '0') {
        i--;
    } else if(random_num.includes(ran)) {
        i--;
    } else {
        random_num += ran;
    }
}
console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!');
rl.on("line", function (line) { // line : 한 줄을 키보드로 입력받기 (여러줄을 입력받으려면 반복문)
    count++;
    console.log(`${count}번째 시도 : ${line}`);
    let ball = 0;
    let strike = 0;
    let result = '';
    for(let i = 0 ; i < line.length; i++) { // 인덱스 번호가 같을때 값이 같으면 스트라이크 인덱스 번호가 다르지만 값이 있다면(includes()) 볼
        if(line[i] === random_num[i]) {
            strike++;
        } else if(random_num.includes(line[i])) {
            ball++;
        }
    }
    if(ball === 0 && strike === 0) {
        result += `${ball}B${strike}S`; // 0B0S
    }
    // 볼만 있는 경우
    if(ball !== 0) { // 1B --> 볼이 1개
        result += `${ball}B`
    }
    // 스트라이크만 있는 경우
    if(strike !==0) {
        result += `${strike}S`
    }
    console.log(result);
    if(result === '3S') {
        rl.close();
    }
}).on("close", function () { // 입력 종료 후 실행되는 코드
    console.log(`${count}번만에 맞히셨습니다.`);
    console.log('게임을 종료합니다.');
    process.exit();
});