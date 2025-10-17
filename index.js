require('datejs');
//Creating a combined user function
function combineUsers(...args) {
//arg is an array with arrays (for usernames)
// creating an object  to hold the final result
const combineObject = {
  users: []
};
// creating a loop through each array inside args
for (let array of args) {
  // arrays here later
  // merging the arrays into combinedObject.users
  combineObject.users.push(...array);
}
// adding today's date using DateJS
combineObject.merge_date = new Date().toString("M/d/yyyy");
//return object
return combineObject;
}




module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};