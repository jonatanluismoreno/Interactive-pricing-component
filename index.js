cantviews = document.getElementById("cant-views");
price = document.getElementById("price");
range = document.getElementById("myRange");

switchBool = false;

function sliderChange(value) {
    cantviews.innerHTML= views[value];
    if (!switchBool) {
        price.innerHTML= "$" + prices[value].toString() + ".00";
    }
    else {
        price.innerHTML= "$" + (prices[value] - (prices[value] * 25 / 100)).toString() + ".00";
    }
}

function swBool() {
    switchBool = !switchBool;
    sliderChange(range.value);
}



views = ["10K PAGEVIEWS", "50K PAGEVIEWS", "100K PAGEVIEWS", "500k PAGEVIEWS", "1M PAGEVIEWS" ];

prices = [8, 12, 16, 24, 36];



    /* value = [];/ $8 per month
 / $12 per month
 / $16 per month
prices = ["8.00", "12.00", "16.00", "24.00", "36.00"];
 / $24 per month
 / $36 per month
if (antvalue != range.value) {
    cantviews.innerHTML=views[range.value];
    antvalue = range.value;
}*/
