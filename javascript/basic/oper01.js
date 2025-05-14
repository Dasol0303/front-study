//oper01.js

//operator

console.log(2 ** 4); //2 * 2 * 2 * 2


let x = 10;
let y = 10;
let z = '10';

console.log(x > 5);

//      ==  !=

// 값이 같다: ==   타입도 같다: ===     -> 자바스크립트는 타입이 달라도 == 을 사용하면 같다고 인식
//           !=              !==
console.log(x==y); //true
console.log(x==z); //true

console.log(x===y); //true
console.log(x===z); //false  === 값 + 자료형 까지 일치 하는가?

console.log( x > 5 && y > 0);
console.log( x == 1 || y >= 50);

//숫자 -> 문자
//문자 -> 숫자

let q = 10;
let w = '20';
let e = 30;

console.log(q+e);
console.log(q+w); //문자열 합치기라서 숫자계산 X

//String() -> 문자열로!!
//Number() -> 숫자로!!
//형변환
console.log(q + String(e));
console.log(q + Number(w));

console.log(Number("123.123"));


if(q == 10) {
    console.log("출력~~~");
}

q == 10 && console.log("출력~~~&&"); //출력 가능!
//&&연산은 앞이 거짓이면 바로 뒤 안보고 넘어감
//앞 코드가 참이면 무조건 참이라 실행! 앞 코드가 거짓이면 X


