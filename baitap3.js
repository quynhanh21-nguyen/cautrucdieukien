/*Nhập vào tuổi trong biến age, in ra 'Đủ tuổi' nếu age>18
Nhập và a, in ra 'Hello' nếu a chẵn, 'Hi' nếu a lẻ
Nhập vào a, b. Nếu a>b in ra tổng, nếu a<b in ra tích, nếu a =b in ra 'Hihi'
Nhập a,b,c. In ra số lớn nhất*/

/*Nhập vào tuổi trong biến age, in ra 'Đủ tuổi' nếu age>18

let age = +prompt("Nhập vào tuổi");
if (age>18){
    alert("ĐỦ TUỔI")
}*/

/* Nhập và a, in ra 'Hello' nếu a chẵn, 'Hi' nếu a lẻ

let a = +prompt("a:");
if(a%2 ==0){
alert("Hello")
} else{
    alert("Hi")
}*/

/*Nhập vào a, b. Nếu a>b in ra tổng, nếu a<b in ra tích, nếu a =b in ra 'Hihi'

let a = +prompt("a:");
let b = +prompt("b:");
let c = a+b;
let d = a*b;
if (a>b){
    alert("Tổng: " + c)
} else{
 if (a<b){
    alert("Tích:" + d)
}else{
    alert("hihi")
}
}*/

// Nhập a,b,c. In ra số lớn nhất

let e = +prompt("e:")
let f = +prompt("f")
let g = +prompt("g")
let max = e;
if (max<=f){
    max=f;
}else{s
    max=max;
}
if (max<=g){
    max=g;
}else{
    max=max;
}
alert("Số lớn nhất là: " + max);