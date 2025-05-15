
//콜백함수 -> 나중에 실행 될 함수!!

//js에서는 함수를 변수에 저장 가능!!
//js에서는 함수를 매개변수, return 활용도 가능!!

function func01(a){
    console.log(a);
}
func01('매개변수');

function func02(f){
    console.log("func02");
    f(); //f를 함수로 받음
}

const temp = ()=> {
    console.log("temp 함수 호출");
}

func02(temp); // temp를 매개변수로 넘김?? 뭔 소리여

//callback(콜백)함수는 나중에 실행(호출)될 함수~~~ 홍뇽뇽.....
function reserv(name, callback){
    console.log('어서오세요~');
    console.log('등록 도와드림~');
    // 쭈르륵
    //  다른 거
    //  올 수
    // 있음!!
    // name 예약자 목록
    console.log(name + " 님 예약 저장 완료");
    //..
    callback();
}

function msg(){
    console.log('문자로 안내하기');
}

reserv('나예약', msg); //msg라는 함수를 넘김

reserv('나다음', function(){
    console.log('전화로 안내하기');
})

reserv('김아픔', ()=>{
    console.log('카톡 안내');
})

console.log('-------------------------------');
//반복처리 (콜백이든 뭐든 다 같이 들어있음)
function arrForEach(){ // -> 배열을 for 위치로 반복?
    let arr = [10, 20, 30, 40];

    for(let i in arr){ //-> i에 인덱스 값 넣기
        console.log(i + " : " + arr[i]);
    }
}
arrForEach();

function arrForEach2(arr){
    for(let i in arr){
        console.log(i + " : " + arr[i]);
    }
}
arrForEach2( [9, 8, 7, 6] );

function arrForEach3( func ){ //함수를 전달받아 작동할 수 있도록 만듦!!
    let arr = [10, 20, 30, 40];

    for(let i in arr) {
        func(i, arr[i]);
    }

}

const printFunc = (a, b)=>{
    console.log(a + " : " + b);
}
arrForEach3(printFunc);


arrForEach3((a, b)=>{
    console.log(a + " --------- " + b);
} );


//setTimeout (함수, 시간) -> "시간"이 지난 후에 함수를 실행
setTimeout( ()=>{
    console.log("setTumeout에 전달한 함수");
} , 2000); //1000 -> 1초


const cb = ()=>{
    console.log('cb함수');
}

const outCb = (f)=>{
    console.log("outCb 실행할거~");
    cb();
}

setTimeout ( ()=>{
    console.log("setTimeout에 넘긴 콜백함수");
    outCb(cb); // -> outCb 함수 안에 cb함수? 그래서 둘 다 실행된듯!!
}, 3000);


