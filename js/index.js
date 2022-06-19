// Calculate Button
document.getElementById("calculateButton").addEventListener("click", function(){

    // Getting all expenses fields values.
    // Food Field
    // const foodField = document.getElementById("foodField");
    // const foodFieldText = foodField.value;
    // const foodFieldAmount = parseFloat(foodFieldText);
    // foodField.value = "";

    // Rent Field
    // const rentField = document.getElementById("rentField");
    // const rentFieldText = rentField.value;
    // const rentFieldAmount = parseFloat(rentFieldText);
    // rentField.value = "";

    // Cloths Field
    // const clothsField = document.getElementById("clothsField");
    // const clothsFieldText = clothsField.value;
    // const clothsFieldAmount = parseFloat(clothsFieldText);
    // clothsField.value = "";


    // Function For ALL Field's Value.
    function getAllFieldValue(inputFieldId){
        const inputField = document.getElementById(inputFieldId);
        const inputFieldText = inputField.value;
        const expenseAmount = parseFloat(inputFieldText);
        inputField.value = "";
        return expenseAmount;
    }

    // Calling Function And Giving The ids To Get The Value.
    const foodAmount = getAllFieldValue("foodField");
    const rentAmount = getAllFieldValue("rentField");
    const clothsAmount = getAllFieldValue("clothsField");

    // Getting The Total Of Food, Rent, Cloths.
    const totalOfAll = foodAmount + rentAmount + clothsAmount;

    // Total Expenses Field
    const totalExpensesField = document.getElementById("totalExpense");
    totalExpensesField.innerText = totalOfAll;
})