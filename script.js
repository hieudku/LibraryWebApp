/* Add book button */
const viewForm = document.getElementById("showFormBtn");
viewForm.addEventListener("click", (formAppear) =>{
    let showForm = document.getElementById("getForm");
    showForm.style.display = "flex";
});

/*View book list button */
const viewList = document.getElementById("viewList");
viewList.addEventListener("click", (formDisappear) =>{
    let hideForm = document.getElementById("getForm");
    hideForm.style.display = "none";

    let showList = document.getElementById("bookList");
    showList.style.display = "flex";
});


/* Program starts */
    /* Global variables */
let bookNumber = [];
let bookList = [];
let authorList = [];
let yearList = [];

    /*Constructor */
function Book() {

}


    /* Main */
function addBookToList() {

}

/* Add to list button */
const addToList = document.getElementById("addTo");
addToList.addEventListener("click", (event) => {
    event.preventDefault();
    
        // Get input values from the form
        const bookName = document.getElementById("bkName").value;
        const bookAuthor = document.getElementById("bkAuthor").value;
        const bookYear = document.getElementById("bkYear").value;

                // Validate if the input fields are not empty
            if (bookName && bookAuthor && bookYear) {

                // Create a new row in the table
                let listTable = document.getElementById("listTable");
                let addRow = document.createElement("tr");
                addRow.setAttribute("class", "rows");
        
                // Add data to the new row
                let bookNumberCell = document.createElement("td");
                bookNumberCell.textContent = listTable.getElementsByTagName("tr").length; // Book number is the number of rows
                addRow.appendChild(bookNumberCell);
                bookNumber.push(bookNumberCell.textContent);
                console.log(bookNumber);
        
                let bookTitleCell = document.createElement("td");
                bookTitleCell.textContent = bookName;
                addRow.appendChild(bookTitleCell);
                bookList.push(bookName);
                console.log(bookList);

                let authorCell = document.createElement("td");
                authorCell.textContent = bookAuthor;
                addRow.appendChild(authorCell);
                authorList.push(bookAuthor);
                console.log(authorList);
        
                let yearCell = document.createElement("td");
                yearCell.textContent = bookYear;
                addRow.appendChild(yearCell);
                yearList.push(bookYear);
                console.log(bookYear);
                
                let readCell = document.createElement("td");
                
                let checkBox = document.createElement("input");
                checkBox.setAttribute("type", "checkbox");
                readCell.appendChild(checkBox);
                addRow.appendChild(readCell);

                // Add the new row to the table
                listTable.appendChild(addRow);
                
                // Clear the form fields
                document.getElementById("getForm").reset();

                // Hide the form after adding the book
                let hideForm = document.getElementById("getForm");
                hideForm.style.display = "none";
            } 
            else {
                alert("Please fill in all the fields.");
            }
        
})