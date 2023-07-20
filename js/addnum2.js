//간단한 화살표 함수

// let hi = function(){
//     return "안녕하세요.";
// }

let hi = () => '안녕하세요';

alert(hi());

// let hi2 = function(name){
//     alert(name + "님 안녕하세요.");
// };

let hi2 = (name) => alert(name+ "님 안녕하세요.");
hi2("홍길동");