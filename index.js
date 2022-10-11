// Code your solution in this file!
const returnFirstTwoDrivers = drivers => drivers.slice (0,2)

const returnLastTwoDrivers = drivers => drivers.slice (drivers.length-2 , drivers.length)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (fare1){
    return function (fare2){
        return fare1 * fare2;
    }
}

const fareDoubler = fare => 2 * fare

const fareTripler = fare => 3 * fare

function selectDifferentDrivers (drivers, driversName) {
    if (driversName === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else {
       return returnLastTwoDrivers(drivers);
    }
}
