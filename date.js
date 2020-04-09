const header_date = document.getElementById("header-date");

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ];

let d = new Date();
let day = d.getDate();
let month = d.getMonth();

let plus;

if(day == 1){
    plus = "st";
} else if(day == 2){
    plus = "nd";
} else if(day == 3){
    plus = "rd";
} else{
    plus = "th";
}

header_date.innerHTML = `${months[month]} ${day + plus}`