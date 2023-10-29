// Write your solution in this file!
const employee = { employeeName: "Sam", streetAddress: "11 Broadway"};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee};
    newEmployee[key] = value;

    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee
}

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = { ...employee};
    delete newEmployee[key];

    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];

    return employee
}