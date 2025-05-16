

let scores = [10, 30, 50, 70];


for(let i=0; i<scores.length; i++) {
    console.log(scores[i]);
} 

//for ... in ->향상 for문
/*
    for(let i in scores) { //i: index 만 들어있는 상태라 출력값:0123
        console.log(i);
    }
*/
for(let i in scores) {
    console.log(i + ' ' + scores[i]);
}

//for ... of ->향상 for문
for(let scores of scores) {
    console.log(scores);
}

// 0  1  2  3
//10 30 50 70
scores.forEach( (item, index)=> { //자바스크립트 함수
            //item에 10 넣고 index 0돌리기?
    console.log(item + " " + index);
});



