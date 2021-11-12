// lines 2 - 4 are the variables to change the colour of the voucher value icons when they are selcted
let btn5 = document.querySelector("#button5");
let btn10 = document.querySelector("#button10");
let btn15 = document.querySelector("#button15");

// lines 7 - 9 are the event listeners for changing the colour of the voucher value icons when they are selected
btn5.addEventListener("click", () => (btn5.style.backgroundColor = "pink"));
btn10.addEventListener("click", () => (btn10.style.backgroundColor = "pink"));
btn15.addEventListener("click", () => (btn15.style.backgroundColor = "pink"));

//lines 11 - 35 are the event listeners which will allow the selected voucher value to be stored in the local storage
document.getElementById("button5").addEventListener("click", function () {
    localStorage.setItem(
        "voucherValue",
        document.getElementById("button5").value
    );
    if (button5 == "5") {
        document.getElementById("voucherdetails").innerHTML =
            "You have selected £5";
    }
});

document.getElementById("button10").addEventListener("click", function () {
    localStorage.setItem(
        "voucherValue",
        document.getElementById("button10").value
    );
});

document.getElementById("button15").addEventListener("click", function () {
    localStorage.setItem(
        "voucherValue",
        document.getElementById("button15").value
    );
});

//the following function carrys out the function of calculating the total value of the vouchers purchased and the functionality of the form.
function vouchers() {
    // all my local variables which are required for the form
    let name = document.getElementById("customername").value;
    let email = document.getElementById("email").value;
    let amount = document.getElementById("amount").value;
    let cost = localStorage.getItem("voucherValue");
    let payment = document.getElementById("payment").value;
    let total = amount * cost;

    document.getElementById("details").style.display = "block";

    // feedback to the DOM if any areas of the form are left empty
    if (name == "") {
        document.getElementById("details").innerHTML =
            "Please enter your name!";
    } else if (email == "") {
        document.getElementById("details").innerHTML =
            "Please enter your email address!";
    } else if (amount == "") {
        document.getElementById("details").innerHTML =
            "Please enter how many vouchers you want!";
    } else if (cost == "") {
        document.getElementById("details").innerHTML =
            "Please select a voucher value!";
    } else if (payment == "Select form of payment....") {
        document.getElementById("details").innerHTML =
            "Please enter a payment method!";
    }
    // final feedback to the DOM if transaction is successfully completed
    else {
        document.getElementById("details").innerHTML =
            name.toUpperCase() +
            "<br><br>" +
            "You have purchased " +
            amount +
            " voucher(s) of £" +
            cost +
            " each for a total of £" +
            total +
            " of Apple Vouchers.<br>" +
            "These vouchers have been paid for by " +
            payment +
            ".<br>These vouchers will be sent to the email address of: " +
            email +
            "<br>If you wish to purchase further vouchers please refresh the page.";
    }
}

// calling the function
document.getElementById("BuyNow").addEventListener("click", function () {
    vouchers();
});
