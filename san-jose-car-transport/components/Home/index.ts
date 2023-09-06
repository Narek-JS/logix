export { AboutCompany } from './AboutCompany';
export { CarMovingServices } from './CarMovingServices';
export { CustomerService } from './CustomerService';
export { Articles } from './Articles';


function modifyNegativeNumber (value) {
    if(value > 0) {
        return true;
    } else {
        const modifiedToPositiveNum = value * -1;
        console.log(modifiedToPositiveNum);
        return modifiedToPositiveNum;
    };
};