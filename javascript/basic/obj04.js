
//내장객체

let str = "hellohi@gmail.com";

console.log(str.length); //문자의 길이

console.log(str.includes("g"));//해당 문자가 포함인가?

console.log(str.indexOf("@"));//해당 문자의 인덱스 찾기
console.log(str.indexOf("!"));//문자가 없으면 -1 return

//if(str.indexOf("!") == -1) 과 같이 활용 가능!!

console.log(str.substring(0, 4));//문자 잘라내기
           //예시로 위 코드 0 ~ 3까지만 가져오는 경우 있음!
console.log(str.substring(5, 11));

// 처음 ~ @ : 아이디
// @ 다음 ~ 끝 : 도메인
console.log(str.indexOf("@"));
let id = str.substring(0, str.indexOf("@"));
console.log(id);
let domain = str.substring(str.indexOf("@") + 1, str.length);  //7+1, 17  (8,17)
//let domain = str.substring(str.indexOf("@") + 1);
console.log(domain);

//" abc"  "abc " -> 공백제거 해줘야 함!! (사용자가 인지하지 못하는 공백이 있을 수 있기 때문)
// "abc"        // "firstname lastname" 같이 의도 공백 제외하고!!

//앞뒤 공백 제거  trim
let test = " abc ";
console.log(test);
console.log(test.trim()); //공백제거
test = test.trim(); //trim이 비파괴적이라서 test에 의도적으로 trim식을 저장 해줌!!
console.log(test); // 원본을 훼손하지 않아서 비파괴적!

//문자 분리 split
// study.java.practice.main
let number = "010-1234-5678";
let s = number.split("-"); //-> - 표시를 제외하고 출력?
console.log(s); //->배열 형태로 내보내줌!!
console.log(s[2]);
console.log(s[0]);

//
console.log('---------------');
let today = new Date();

console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth()); // 0 ~ 11    +1    (1월~12월)
console.log(today.getDate()); //일
console.log(today.getDay()); //요일 0~6   (일~토)
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

console.log(Math.abs(-10)); //절대값
console.log(Math.round(123.56)); //반올립



