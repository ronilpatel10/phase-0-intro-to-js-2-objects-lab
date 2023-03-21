// Write your solution in this file!
const employee = {
    name: "Ronil",
    address: "122 blue street",
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newobj = {...obj };
    newobj[key] = value;
    return newobj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey(obj, key, value) {
    const newobj = {...obj };
    newobj[key] = value;
    return newobj;
}
function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value;
    return obj;
}