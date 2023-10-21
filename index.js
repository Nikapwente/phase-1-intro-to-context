// Your code here

let myDetails =["Harris", "Anyayngu", "Engineer", 15]
let test ={};
test.firstName = "Harris";
test.familyName = "Anyangu";
test.title = "Engineer";
test.payPerHour = 15;
test.timeInEvents = [{type: "TimeIn", date: "2023-11-30", hour: "0900"},{type: "TimeIn", date: "2023-11-29", hour: "1000"},{type: "TimeIn", date: "2023-11-28", hour: "1100"}];
test.timeOutEvents = [{type: "TimeOut", date: "2023-11-30", hour: "1400"},{type: "TimeOut", date: "2023-11-29", hour: "1500"},{type: "TimeOut", date: "2023-11-28", hour: "1600"}];




function createEmployeeRecord(employeeDetails) {
    let detailsObject = {};
    detailsObject.firstName = employeeDetails[0];
    detailsObject.familyName = employeeDetails[1];
    detailsObject.title = employeeDetails[2];
    detailsObject.payPerHour = employeeDetails[3];
    detailsObject.timeInEvents = [];
    detailsObject.timeOutEvents = [];
    console.log(detailsObject);
    return detailsObject;
}



function createEmployeeRecords(employeesDetails) {
    let employeeRecords = [];
    employeesDetails.forEach(element => {
        employeeRecords.push(createEmployeeRecord(element));
    });
    return employeeRecords;
}

function createTimeInEvent(detailsObject, date) {
    let timeInEvent = {};
    let dateArray = date.split(" ");
    timeInEvent.type = "TimeIn";
    timeInEvent.hour = parseInt(dateArray[1]);
    timeInEvent.date = dateArray[0];
    detailsObject.timeInEvents.push(timeInEvent);

    return detailsObject;
    

}

function createTimeOutEvent(detailsObject, date) {
    let timeOutEvent = {};
    let dateArray = date.split(" ");
    timeOutEvent.type = "TimeOut";
    timeOutEvent.hour = parseInt(dateArray[1]);
    timeOutEvent.date = dateArray[0];
    detailsObject.timeOutEvents.push(timeOutEvent);

    return detailsObject;
    

}




function hoursWorkedOnDate(detailsObject, date) {
    let timeOutEventsArray = detailsObject.timeOutEvents;
    let timeInEventsArray = detailsObject.timeInEvents;
    // console.log(timeOutEventsArray);
    let timeOut;
    let timeIn;
    
    timeOutEventsArray.forEach(item => {
        if (item.date === date) {
            // console.log(item.hour);
            timeOut = parseInt(item.hour);
        }
    })
    timeInEventsArray.forEach(item => {
        if (item.date === date) {
            // console.log(item.hour);
            timeIn = parseInt(item.hour);
        }
    })
    let hoursWorked = parseInt((timeOut - timeIn)/100);
    // console.log(hoursWorked);
    return hoursWorked;

}


function wagesEarnedOnDate(detailsObject, date) {
    let hours = hoursWorkedOnDate(detailsObject, date);
    let wages = hours * detailsObject.payPerHour;
    return wages;
}

function allWagesFor(detailsObject) {
    let allWages=0;
    let timeInEventsArray = detailsObject.timeInEvents;
    timeInEventsArray.forEach(item => {
        
        let date = item.date;
        allWages =  allWages + wagesEarnedOnDate(detailsObject, date);
        
    })

    return allWages;
    
}


function calculatePayroll(employeeDetails) {
    let payRoll=0;
    employeeDetails.forEach(item => {
        payRoll = payRoll + allWagesFor(item);
    })
return payRoll;
}