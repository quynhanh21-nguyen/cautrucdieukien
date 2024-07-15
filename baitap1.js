/*bài 1
function soSanh(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    if (a%b == 0) {
        alert("a chia het cho b");
    } else{
        alert("a khong chia het cho b");
    }
}*/

/*bài 2
let a = +prompt("Nhập vào tuổi");
if (a<15){
    alert("Không đủ điều kiện vào học lớp 10")
}
*/

/*bài 3
let c = +prompt("Nhập vào số bất kỳ");
if (c>=0){
    alert("Số vừa nhập lớn hơn 0")
} else{
    alert("Số vừa nhập nhỏ hơn 0")
}*/
/*bài 4
function max(){
let d = +document.getElementById("d").value
let e = +document.getElementById("e").value
let f = +document.getElementById("f").value
let max = d
if (max>=e){
    max = max;
} else{
    max = e;
}
if (max >=f){
    max = max;
} else{
max = f;
}
alert("Số lớn nhất là:" + max)}*/

/*bài 5
function ketQua() {
    let kiemtra = +document.getElementById("kiemtra").value
    let giuaky = +document.getElementById("giuaky").value
    let cuoiky = +document.getElementById("cuoiky").value
    let arg = (kiemtra + giuaky + cuoiky) / 3;
    if (arg>=8){
        alert("Học lực giỏi")
    } else{
        if(arg<=5){
            alert("Học lực trung bình")
        }
        else{
            alert("Học lực khá")
        }
    }
}