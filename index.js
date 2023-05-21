//! let x = 10;
// alert(x);
// confirm("Ok?");

//! if (x == "") {
//     console.log("Пустая строка");
// } else console.log("x = NaN");

//! let x = prompt("qwe", "");

//! if (x == "") {
//     console.log("Пустая строка");
// } else if (!x) {
//     console.log("x = NaN");
// }

//! let day1 = prompt("First Num", "");
// let day2 = prompt("Second Num", "");
// let difference = day1 - day2;
// if (difference < 0) {
//     console.log(-difference);
// } else {
//     console.log("Разница положительная " + difference);
// }

//! let x;
// if (typeof x == undefined) {
//     console.log(" x = undefined");
// }
// x = 25;
// if (typeof x == undefined) {
//     console.log(" x = undefined");
// } else {
//     console.log("x != undefined");
// }

//! let xNum = 12000;
// if (xNum > 1000) console.log(xNum - xNum / 10);

//! let num = prompt("Num", "");
// if (num % 2 == 0) {
//     let prompt = num;
// console.log("prompt: ", prompt);
// console.log(`prompt: ${prompt}`);
// }

//! let num = prompt("Num", "");
// let process = Math.round(num);
// if (process % 2 == 0) {
//     console.log(`Result: ${process}`);
// } else if (process % 2 != 0) {
//     console.log(process - 1);
// }

//! let xNum = prompt("Num", "");
// let parity;
// parity = xNum % 2 == 0 ? "even" : "odd";
// alert(parity);

//! const protocol = prompt("Write Protocol:", "");
// let description;
// function Check() {
//     switch (protocol) {
//         case "HTTP":
//             description = "Hypertext transfer protocol";
//             break;
//         case "HTTPS":
//             description = "Secure hypertext transfer protocol";
//             break;
//         case "FTP":
//             description = "File transfer protocol";
//             break;
//         default:
//             description = "Unsupported protocol";
//     }
//     alert(description);
// }
// protocol || "" ? Check() : false;

//! let numX = +prompt("Write Num");
// var text = "";
// switch (numX) {
//     case 1:
//         text += "1";
//     case 2:
//         text += "2";
//     case 3:
//         text += "3";
//     case 4:
//         text += "4";
//     default:
//         text += "5";
// }
// alert(text);

//! let result = confirm("Ok?")
// switch (result) {
//     case true:
//         alert("Подтвержденно");
//         break;
//     case false:
//         alert("Отменено");
//         break;
// }
