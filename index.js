let employee = {name: "gian", streetAdress: "123rd"}
function updateEmployeeWithKeyAndValue(employee, key, value){
    // employee[key] = value;
    const clone = {...employee, [key]: value}
    return clone
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}
function  deleteFromEmployeeByKey(employee, key){
    const clone = {...employee}
    delete clone[key]
    return clone
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}