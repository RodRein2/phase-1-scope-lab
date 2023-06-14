var customerName = "bob"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    bestCustomer = "not bob"
    return customerName;
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
    return customerName;
}

const leastFavoriteCustomer = "sally"

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "karen";
    return customerName;
}

