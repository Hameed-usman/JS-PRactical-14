// console.log("ObjectS Stgart..?");

// ASSIGNMENT 01

// let book = {
//     title: "The Sword Of Allah",
//     author: "Agha Ali Ibrahim Akram",
//     pages: 504,
//     read: true
//   };
  
//   console.log(book);


// ASSIGNMENT 02 

// console.log("Title:", book.title);
// console.log("Author:", book.author);

// ASSIGNMENT 03 

// book.summary = function() {
//     console.log(this.title + " by " + this.author + ", " + this.pages + " pages.");
//   };

//   book.summary();


// ASSIGNMENT 04 

// let book2 = {
//     title: "Alpha",
//     author: "Lorem Khan",
//     pages: 328,
//     read: false,
//     summary: function() {
//       console.log(this.title + " by " + this.author + ", " + this.pages + " pages.");
//     }
//   };
  
//   let book3 = {
//     title: "Beta",
//     author: "Anonymous",
//     pages: 279,
//     read: true,
//     summary: function() {
//       console.log(this.title + " by " + this.author + ", " + this.pages + " pages.");
//     }
//   };
// book1.summary(); //Also call the above function
// book2.summary();
// book3.summary();

// ASSIGNMENT 05

// function Vehicle(type) {
//     this.type = type;
//   }
  
//   Vehicle.prototype.start = function() {  // Method we are creating
//     console.log(this.type);
//   };
  
//   let car = new Vehicle("car");
//   let truck = new Vehicle("truck");
  
//   car.start = function() {
//     console.log("CAR .....");
//   };
  
//   car.start();  
//   truck.start();

// ASSIGNMEMNT 06 

// let book = {
//     title: "The Sword Of Allah",
//     author: "Agha Ali Ibrahim Akram",
//     pages: 504,
//     read: true
//   };
  
//   for (let property in book) {
//     console.log(property + ": " + book[property]);
//   }
