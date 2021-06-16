window.onload = function()

{
    var numberField = document.getElementById.numberField;
    var textfield = document.getElementById.textfield;
    var submitMyFormButton = document.getElementById.submitMyFormButton;

    var info = document.getElementById("info");

    numberField.onkeydown = function (e)
    {
        info.innerHTML = ++1;
    }

}