let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

/* {코딩부분} */
function changeLink(url) {
    //url 주소안에 //있는가?
    //console.log(url.includes('://'));  //true false
    //console.log(url.indexOf('://'));  //있으면 index, 없으면 -1

    if(url.includes('://') == false){

    }

    if(url.indexOf('://') == -1){
        return "경로가 잘못되었습니다.";
    }

    //console.log(url.substring(url.indexOf('://') + 3));
    //문자 잘라서 원하는 위치에서 잘 나오는지 확인!!

    // https    url.includes('https')   
    // http     url.includes('http')

    // 첫 시작 5글자 : https    https://
    // 첫 시작 4글자 : http    http://
    // 첫 시작 5글자 : http
    //console.log(url.substring(0, 5));

    /*
    if(url.substring(0, 5) == 'https'){
        return "https://" + "secure." + url.substring(url.indexOf("://") + 3);
    }
    if(url.substring(0, 5) == 'http:'){
        return "https://" + "open." + url.substring(url.indexOf("://") + 3);
    }
    //앞을 자르고 뒤를 잘라서 활용하자는 의도!!
    */

    let splitUrl = url.split("://");   //https human.or.kr
    //console.log(splitUrl);
        if(splitUrl[0] == 'https'){
            return splitUrl[0] + "://secure." + splitUrl[1];
        } else {
            return splitUrl[0] + "s://open." + splitUrl[1];
            //     http://open.주소
            //     https://open.주소
        }
}


console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));