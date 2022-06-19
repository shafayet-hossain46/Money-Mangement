// Calculate Button
document.getElementById("calculateButton").addEventListener("click", function(){

    // Function For ALL Field's Value.
    function getAllFieldValue(inputFieldId){
        const inputField = document.getElementById(inputFieldId);
        const inputFieldText = inputField.value;
        const expenseAmount = parseFloat(inputFieldText);

        // Condition For Not To Clear The Income Field
        if(inputFieldId != "incomeField"){
            inputField.value = "";
        }
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

    // Income 
    const incomeAmount = getAllFieldValue("incomeField");
    const restIncomeAmount = incomeAmount - totalOfAll;
    
    // Setting Balance Field
    const balanceField = document.getElementById("balanceField");
    balanceField.innerText = restIncomeAmount;
})