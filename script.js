let input = "";
let prevInput = ""; // Variável para armazenar o número anterior
let operator = ""; // Variável para armazenar o operador

function updateDisplay() {
    // Atualiza a tela com o número atual, o número anterior e o operador
    const display = document.getElementById("display");
    if (prevInput && operator) {
        display.innerHTML = `<div class="small-text">${prevInput} ${operator}</div>${input || "0"}`;
    } else {
        display.textContent = input || "0";
    }
}

function handleClick(value) {
    if (['+', '-', '*', '/'].includes(value)) {
        // Salva o número e o operador quando um operador é digitado
        if (input) {
            prevInput = input;
            input = "";
        }
        operator = value; // Armazena o operador
    } else {
        input += value; // Adiciona o número ao input
    }
    updateDisplay();
}

function handleClear() {
    input = "";
    prevInput = "";
    operator = "";
    updateDisplay();
}

function handleDelete() {
    input = input.slice(0, -1);
    updateDisplay();
}

function handleCalculate() {
    try {
        if (prevInput && operator) {
            input = Function(`return ${prevInput}${operator}${input}`)().toString();
            prevInput = ""; // Limpa o número anterior após o cálculo
            operator = ""; // Limpa o operador após o cálculo
            updateDisplay();
        }
    } catch {
        input = "Erro";
        prevInput = "";
        operator = "";
        updateDisplay();
    }
}
