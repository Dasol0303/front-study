
//함수 리턴
function sum1() {
    return 100;
}

sum1();
console.log(sum1());
let n = 20 + sum1();
console.log(n);

const sum2 = function(a, b) {
    return a+b;
}
console.log(sum2(10,20));

const sum3 = function sum333(a, b){
    return a+b;
}
console.log(sum3(90,20));

const sum4 = (a, b) =>{
    return a+b;
}
console.log(sum4(101,202));

const sum5 = (a, b)=> a+b;  //화살표 뒤 코드를 바로 return 으로 인식
 //->중괄호랑 리턴없이도 가능!!
console.log(sum5(15, 25));

const sum6 = ()=>1+2+3+4+5;

// const sum6 = ()=>{
//     return 1+2+3+4+5;
// }
console.log(sum6());


function func(){
    let x = 10;
    console.log(x);
}
//console.log(x); ->변수 선언이 function 안에서 이루어졌기 때문에 없는 코드!
if(true){
    let x = 20;
}

{
    let x = 30;
}
//->위 코드 사용 가능!
//console.log(x);

/*
console.log(q);
let q = 30;
*/

console.log(w);
var w = 30;
//var -> 호이스팅 함수 : 위 코드를 예시로 w라는 코드를 맨 위 자리에 있는 코드처럼 만들어준다.

r = 3000;
var r;
console.log(r);

check(); // 출력 가능!! -> 얘도 위의 var처럼 만들어줌
function check() {
    console.log('check');
}
check();

// let name = "이름";
// let name = "내이름";

var r = 5000;       //이미 선언한 변수명인데, 다시 선언하면서 기존값 덮어쓰기
console.log(r);


//일회용 함수!!
function welcome() { //-> 한 번 썼으니까 다른 함수에는 못 쓰는 이름!!
    console.log("환영합니다~");
    //
    //
}

(function(){
    console.log('이것은 일회용 함수');
})();

