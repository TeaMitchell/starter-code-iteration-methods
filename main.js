// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')
const isActive = users.filter(user => user.isActive === true)

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)


    
    
}
//Kata 1: Use the .filter() method
//Filter the users array to show only the users with an isActive property of true.

const activeArray = users.filter(function (index){
    return index.isActive === true
});

const KATA1 = document.createElement("h1")
KATA1.append('KATA1: .filter, .isActive')
printKata(1, isActive)



// Kata 2: Use the .map() method
// Map over the users array to show only the email addresses of the users.
// const mapArray = users.map()


const emailArray = users.map(index => index.email)
printKata(2, emailArray)


// Kata 3: Use the .some() method
// Check whether at least one user in the users array has a company property of "OVATION".
const companyArray = users.some(function (index){
    return index.company === "OVATION"
}) 
printKata(3,companyArray)


// Kata 4: Use the .find() method
// Find the first user in the array over the age of 38.

const ageArray = users.find(function (index){
    return index.age >= 38
})
printKata(4, ageArray)


// Kata 5: Use the .filter() and .find() methods
// Find the first user in the array over the age of 38 who is active.

const activeAgeArray = users.filter(index => index.isActive === true).find(index => index.age >= 38)
printKata(5, activeAgeArray)


// Kata 6: Use the .filter() and .map() methods
// Show the balance of every user in the array from the "ZENCO" company.

const zencoArray = users.filter(index => index.company === "ZENCO").map(index => index.balance)
printKata(6,zencoArray)


// Kata 7: Use the .filter() method with .includes() and the .map() method
// Show the age of every user with the "fugiat" tag.

const fugiatAge = users.filter(index => index.tags.includes("fugiat")).map(index => index.age)
printKata(7,fugiatAge)
