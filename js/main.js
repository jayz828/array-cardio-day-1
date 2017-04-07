/**
 * Created by jasonnatividad on 4/4/17.
 */


// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's


//    The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//console.log(inventors);

    function filterBefore1500(value) {

        return value.year > 1499 && value.year < 1600;
    }


    var filteredInventor = inventors.filter(filterBefore1500);


console.log(filteredInventor);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names






//    The map() method creates a new array with the results of calling a provided function on every element in this array.


    function mapped(value) {
        return value.first + " " + value.last;
    }

    var mappedInventor = inventors.map(mapped);

console.log(mappedInventor);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

    // The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.

    function sortOldest(a,b) {

        return a.year - b.year;
    }


    var oldest = inventors.sort(sortOldest);


console.log(oldest);
// Array.prototype.reduce()
// 4. How many years did all the inventors live?


// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.




//var birthYears = inventors.reduce(function() {
//
//});


var allAges = inventors.reduce(function(acc, val) {


    //console.log(val.year);

    //val = inventors.passed - inventors.year;
    //console.log(val);
    return acc + (val.passed - val.year);
}, 0);




console.log(allAges);


// 5. Sort the inventors by years lived



function getAge(acc, val){

    return val.passed - val.year;
}


var ageInventor = inventors.reduce(getAge,0);

console.log(ageInventor);

function sortByAge(a, b) {


    return (a.passed - a.year)  - (b.passed - b.year);
}

var sorted = inventors.sort(sortByAge);








console.log(sorted);





// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


function findBlvd(value) {

    return value.title.match(expr);

}

//var listItems = document.querySelectorAll("li a[title]");


var nodesArray = [].slice.call(document.querySelectorAll("li a[title]"));


var blvd = nodesArray.filter(findBlvd);

console.log(blvd);


var expr = /Boulevard de/;  // no quotes here



// 7. sort Exercise
// Sort the people alphabetically by last name

    var sortedNames = people.sort();
console.log(sortedNames);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

var numCars = 0;
var numTrucks = 0;
var numBikes = 0;
var numVan =0;
var numWalk=0;

var dataCount = data.reduce(function(acc, val) {

    console.log(val);
    if (val == "car") {
        numCars+=1;
    }

    if (val == "truck") {
        numTrucks+=1;
    }

    if (val == "bike") {
        numBikes+=1;
    }

    if (val == "van") {
        numVan+=1;
    }

    if (val == "walk") {
        numWalk+=1;
    }

    //console.log(numCars);

});

console.log(numCars,numTrucks,numBikes,numVan,numWalk);