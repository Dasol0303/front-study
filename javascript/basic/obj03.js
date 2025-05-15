
//java 비교
//new int[3];
//new int[5]; -> ArrayList     .add .get


//javascript 배열 조작 함수

/*
앞
    -삭제: shift   
    -추가: unshift
뒤 
    -삭제: pop   
    -추가: push
*/

let arr = [1,2,3];

//파괴적 함수 : 함수 실행 후 원본데이터에 영향O
//비파괴적함수 :  함수 실행 후 원본데이터에 영향X

arr.unshift(9);
console.log(arr);
arr.push(20);
console.log(arr);
arr.shift();
console.log(arr);
arr.pop();
console.log(arr);

let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log("===배열 연결===");
//concat 배열 연결
console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

//arr1 = arr1.concat(arr2); -> 전개연산자 테스트 위해서 잠시 주석처리함!!
console.log(arr1);

//... -> 붙여서 사용!! (해체한다?) - 전개연산자 라고 표현?

let arr3 = [80, ...arr1, 90];
//         [80, [1,2,3], 90]; -> ...을 붙이면 이걸 [80, 1,2,3, 90]; 이렇게 만든다.(한꺼풀 벗김)
console.log(arr3);

console.log("===복사===");
//깊은복사(deep copy) vs 얕은복사(shallow copy)
//값 자체를 복사       vs 주소 복사

let x = [1,2,3];
let y = x;      //얕은복사
let z = [...x];//깊은복사
console.log(x);
console.log(y);
console.log(z);

x[1] = 20;
console.log(x);
console.log(y);
console.log(z);

console.log("===splice 함수===");
// splice 함수
// 특정위치에 추가/삭제

// splice(인덱스, 삭제할 갯수) -> 매개변수 2개 넣어주기
// splice(인덱스, 삭제할 갯수, 추가할값) -> 매개변수 3개 넣어주기

let arr4 = [1,2,3,4,5];
console.log(arr4);
arr4.splice(1, 2);
console.log(arr4); // [1, 4, 5]
arr4.push(6);
console.log(arr4);
arr4.splice(2, 1, 50); 
//arr4[2] = 50; -> 위랑 동일!! 근데 위가 더 원하는 위치 지정 가능
console.log(arr4);
arr4.splice(2, 0, 30); //-> 추가    (2, 30)>이렇게 쓰면 30개를 지움
console.log(arr4);

console.log("===객체===");
let obj = {
    name: "김밥천국",
    menu: "김밥"
};
console.log(obj);
obj.menu = "참치김밥";     //값 저장
console.log(obj);
obj.price = 5500; //새로운 키값으로 저장(추가)
console.log(obj);
delete obj.price; //특정 키값 삭제
console.log(obj);

