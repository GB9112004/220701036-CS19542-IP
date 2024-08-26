// Function to validate the book form
function validateBookForm() {
  var bookName = document.getElementById("bookName").value;
  var author = document.getElementById("author").value;
  var publisher = document.getElementById("publisher").value;
  var edition = document.getElementById("edition").value;
  var price = document.getElementById("price").value;
  var category = document.getElementById("category").value;

  if (bookName == "" || author == "" || publisher == "") {
    alert("Please fill in all required fields.");
    return false;
  }

  if (isNaN(edition) || edition <= 0) {
    alert("Invalid edition. Please enter a positive integer.");
    return false;
  }

  if (isNaN(price) || price <= 0) {
    alert("Invalid price. Please enter a positive number.");
    return false;
  }

  if (category == "") {
    alert("Please select a category.");
    return false;
  }

  return true;
}

// Function to validate the update book form
function validateUpdateBookForm() {
  var bookName = document.getElementById("bookName").value;
  var author = document.getElementById("author").value;
  var publisher = document.getElementById("publisher").value;
  var edition = document.getElementById("edition").value;
  var price = document.getElementById("price").value;
  var category = document.getElementById("category").value;

  if (bookName == "" || author == "" || publisher == "") {
    alert("Please fill in all required fields.");
    return false;
  }

  if (isNaN(edition) || edition <= 0) {
    alert("Invalid edition. Please enter a positive integer.");
    return false;
  }

  if (isNaN(price) || price <= 0) {
    alert("Invalid price. Please enter a positive number.");
    return false;
  }

  if (category == "") {
    alert("Please select a category.");
    return false;
  }

  return true;
}

// Function to validate the delete book form
function validateDeleteBookForm() {
  var bookName = document.getElementById("bookName").value;

  if (bookName == "") {
    alert("Please enter the book name to delete.");
    return false;
  }

  return true;
}