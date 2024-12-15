// homework Part 1

let animals = {
  kind: "",
  name: "",
  speak: function (message) {
    console.log(this.kind + " says: '" + message + "'");
  },
};

animals.kind = prompt("What kind of animal is it?");
let message = prompt("What do you want the animal to say?");

animals.speak(message);

//homework Part 2

let books = {
  title: "",
  author: "",
  readingStatus: "",
  check: function () {
    if (this.readingStatus === "Yes") {
      console.log(`Already read ${this.title} by ${this.author}`);
    } else {
      console.log(`You still need to read ${this.title} by ${this.author}`);
    }
  },
};
books.title = prompt("What is the title of the book?");
books.author = prompt("Who is the author of the book?");
books.readingStatus = prompt(
  "Have you read the book? Enter 'Yes' for yes or 'No' for no."
);
books.check();
