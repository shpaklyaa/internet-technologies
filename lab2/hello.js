let numb = 0;
let str = "lelelele";
let flag = true;
let nullValue = null;
let undefValue;
let obj = { key: "value" };

function otherFunction() {
    let c = 1488;
    try {
        let d = c;
        document.writeln("Переменная c, определенная в документе - Доступна<br>");
    } catch (error) {
        document.writeln("Переменная c, определенная в документе - не Доступна<br>");
    }
    try {
        let a = numb;
        document.writeln("Переменная numb, определенная в документе - Доступна<br>");
    } catch (error) {
        document.writeln("Переменная numb, определенная в документе - не Доступна<br>");
    }

    try {
        let b = string;
        document.writeln("Переменная string, определенная в документе - Доступна<br>");
    } catch (error) {
        document.writeln("Переменная string, определенная в документе - не Доступна<br>");
    }
}

let abab = function() {
    alert("`12`12")
};

function mainFunction() {
    let number = 120;
    const string = "сырники";

    document.open();

    otherFunction();

    document.writeln(number + "<br>");
    document.writeln(++number + "<br>");

    number++;
    document.writeln(number++ + "<br>");

    document.writeln(flag + "<br>");
    document.writeln(+flag + "<br>");

    let hello = function () {
        alert("Здарова");
    };
    hello();

    let choice;

    let isis = confirm("Ты тут?");
    choice = (isis) ? 1 : 0;

    while (true) {
        if (choice == 0) break;
        choice = Number(prompt("1. Как дела? \n2. Все хорошо? \n0. Пока"));
        switch (choice) {
            case 0:
                alert("Пока");
                break;
            case 1:
                alert("Пойдет");
                break;
            case 2:
                alert("Да.");
                break;
            default:
                alert("Чё?");
                break;
        }
    }

    document.close();
}

mainFunction();
