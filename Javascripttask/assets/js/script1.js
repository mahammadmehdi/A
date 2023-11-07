const display = document.getElementById("display");
let currentInput = "";

function evaluateExpression() {
    try {
        //Istifadəçini girdiyi funksiyalar işlək hala gəlməsi üçün istifadə olunur.
        currentInput = new Function('return ' + currentInput)();
        display.value = currentInput;
    } catch (error) {
        //Hər hansısa bir xəta halı baş verərsə ekrana xəta yazısını çıxarar
        display.value = "Xəta";
    }
}

document.addEventListener("keydown", function(element) {
    switch (element.key) {
        case "Enter":
            evaluateExpression();
            break;
        case "Backspace":
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
            break;
        case "c":
        case "C":
            currentInput = "";
            display.value = "";
            break;
        default:
            switch (element.key) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case "+":
                case "-":
                case "*":
                case "/":
                case ".":
                case "=":
                    currentInput += element.key;
                    display.value = currentInput;
                    break;
                default:
                    // Digər knopkalar üçün heç bir funksiya yerinə yetirmə
                    break;
            }
            break;
    }
});
