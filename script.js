// Creating a simple calculator tha can perform the four basic operation


let num1 = prompt("Please enter the first number");
let num2 = prompt("Please enter the second number");
let operation = prompt("Please choose an operation (add , sub , mul or div)");

if (operation === "add")
    {
        let sum = Number(num1) + Number(num2);
        alert(sum);
    }

else if (operation === "sub")
    {
        let dif = Number(num1) - Number(num2);
        alert(dif);

    }

else if (operation === "mul")
    {
        let prod = Number(num1) * Number(num2);
        alert(prod);

    }

else (operation === "div")
    {
        let prod = Number(num1) * Number(num2);
        alert(prod);

    }

