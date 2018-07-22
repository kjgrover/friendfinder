// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

// var tableArray = [
//   {
//     customerName: "Ahmed",
//     customerEmail: "ahmed@example.com",
//     customerID: "afhaque89",
//     phoneNumber: "000-000-0000"
//   }
// ];

var tableArray =[
  {
  name: "Justin Bieber",
  photo: "http://junkee.com/wp-content/uploads/2014/06/young_justin_wallpaper_desktop.jpg",
  scores: [
    "1",
    "5",
    "2",
    "1",
    "5",
    "5",
    "3",
    "4",
    "2",
    "5"
  ]
},

{
  name: "Gremlin",
  photo: "https://i.pinimg.com/736x/46/0d/8a/460d8ab0f69e6ef2b29a0f3d0fef1794--creature-design-area-.jpg",
  scores: [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1"
  ]
},

{
  name: "Steve Buscemi",
  photo: "data:image/jpeg;base64,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",
  scores: [
    "2",
    "5",
    "3",
    "4",
    "2",
    "1",
    "2",
    "4",
    "3",
    "2"
  ]
}
]
;



// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;

