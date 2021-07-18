const myText = document.querySelector("#myText");
const result = document.querySelector("#result");
const upperButton = document.querySelector("#upperButton");
const lowerButton = document.querySelector("#lowerButton");
const captalizeButton = document.querySelector("#captalizeButton");
const clearButton = document.querySelector("#clearButton");
const copyButton = document.querySelector("#copyButton");

upperButton.addEventListener("click", pressUpper);
lowerButton.addEventListener("click", pressLower);
copyButton.addEventListener("click", pressCopy);
captalizeButton.addEventListener("click", pressCaptalize);


function pressUpper(event) {
    event.preventDefault();
    result.innerHTML = myText.value.toUpperCase();
}

function pressLower(event) {
    event.preventDefault();
    result.innerHTML = myText.value.toLowerCase();
}

function pressCaptalize(event) {
    event.preventDefault();
    const text = myText.value;
    const arrayText = text.split(" ");

    const textResult = arrayText.map(function(item) {
        return item.charAt(0).toUpperCase() + item.slice(1);
    });

    result.innerHTML = textResult.join(" ");
}

function pressClear(event) {
    event.preventDefault();
    result.innerHTML = "";
}

function pressCopy() {
    result.select();
    document.execCommand("copy");
}