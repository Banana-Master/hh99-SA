// 터미널에서 입력받기 위해 readline 가져오기
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

let input;

rl.on("line", function (line) { // line : 한 줄을 키보드로 입력받기 (여러줄을 입력받으려면 반복문)
    input = line;
    rl.close(); // 입력 종료
}).on("close", function () { // 입력 종료 후 실행되는 코드
    console.log(input);
    process.exit();
});