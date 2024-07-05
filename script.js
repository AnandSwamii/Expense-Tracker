const totalInputDiv = document.querySelector("#totalInput");
const setBudgetInput = document.querySelector("input");
const setBudgetBtn = document.querySelector("button");

const buttons = document.querySelectorAll(".info span:last-of-type");

const addExpenseDiv = document.querySelector("#addExpanse");
const expanseNameInput = addExpenseDiv.querySelector("input:first-of-type");
const expanseValueInput = addExpenseDiv.querySelector("input:last-of-type");
const expanseNameBtn = addExpenseDiv.querySelector("button");
const tbody = document.querySelector("table tbody")

let totalBudget = 0;
let count = 1;

setBudgetBtn.addEventListener("click", ()=>{
    if (setBudgetInput.value.length == 0){
        alert("Enter Busget Amount")
    }
    else
    {
        totalBudget = setBudgetInput.value;

        buttons[0].innerHTML = totalBudget;
        buttons[1].innerHTML = 0;
        buttons[2].innerHTML = totalBudget;
    }
});

expanseNameBtn.addEventListener("click", ()=>{
    const name = expanseNameInput.value;
    const amount = expanseValueInput.value;

    
        if ( amount > Number(buttons[2].innerHTML) ){
            console.log(amount, totalBudget, (buttons[2].innerHTML));
            alert("Monthly Limit Exceeded");
        }

        else
        {

            const tr = document.createElement("tr");

            const td1 = document.createElement("td")
            const td2 = document.createElement("td")
            const td3 = document.createElement("td")
        
            td1.innerHTML = count++;
            td2.innerHTML = name;
            td3.innerHTML = amount;
            tr.append(td1, td2, td3);
            tbody.append(tr);

            buttons[1].innerHTML = Number(buttons[1].innerHTML) + Number(amount);
            buttons[2].innerHTML = Number(buttons[2].innerHTML) - amount ;
            
        }

})

