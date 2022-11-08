let addBtn = document.getElementById("add_btn");
let totalSum = 0;


function clickAddBtn () {
    let inputField = document.getElementById("input_field").value;
    // console.log(inputField);
    // totalSum += inputField;
    // console.log(totalSum);
    // document.getElementById("total_sum").textContent = totalSum;
    // switch (inputField) {
    //     case 0:
    //         window.alert("Input number");
    //         break;
    //     case  inputField % 2 == 0:
    //         totalSum += inputField;
    //         document.getElementById("total_sum").textContect = totalSum;
    //         break;
    //     case inputField % 2 != 0:
    //         totalSum -= inputField;
    //         document.getElementById("total_sum").textContect = totalSum;
    //         break;
    // }
    if(isNaN(inputField)){
        window.alert("Input number");
    }
    else {
        if (inputField % 2 == 0) {
            totalSum += +inputField;
        }
        else {
            totalSum -= inputField;
        }
        document.getElementById("total_sum").textContent = totalSum;
    }
    // switch (inputField) {
    //     case NaN:
    //         window.alert("Input number");
    //         break;
    //     case !isNaN:
    //         window.alert("Input");
    //         break;
    // }
    document.getElementById("input_field").value = "";
}

addBtn.addEventListener("click", clickAddBtn);