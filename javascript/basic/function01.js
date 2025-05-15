//function 함수

//funciton 함수 선언
function func01() {
    console.log('func01호출');
}
//-> 여기까지는 선언만한 상태라서 아무일도 일어나지 않는다... 불러야 코드가 실행됨

func01(); //-> 선언된 함수를 부르는(호출) 과정

//let도 가능 그러나 보통은 function 담을 때는 const 사용
const func02 = function() { //-> 함수인식 
    console.log('func02호출');
}

func02();

const func03 = function func303() { // -> 문법적으로는 가능하나...func303정의되지 않는 필요없는 이름
    console.log('func03호출');
}
func03();
//func303();

const func04 = ()=> {
    console.log('func04호출ㄹㄹㄹㄹ');
}
func04();


//함수 + 매개변수
function func05(a, b){
    console.log(a + " " + b);
}
func05(10, 20);
func05("A", "B");

const func06 = function(a, b){
    console.log(a + " " + b);
}
func06(20, 30);

const func07 = function func007(a, b){
    console.log(a + " " + b);
}
func07(50, 60);

const func08 = (x, y)=> {
    console.log(x + " " + y);
}
func08(90, 100);


