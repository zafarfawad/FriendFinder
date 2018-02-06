// module.exports = [{
//     name: "Eric",
//     scoresArray: [1,2,3,4,5,1,2,3,4,5]
// },{}]

var friends = [{
    name: "Eric",
    scoresArray: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
}]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
