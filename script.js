/* Add book button */
const addBook = document.getElementById("showFormBtn");
addBook.addEventListener("click", (formAppear) =>{
    let showForm = document.getElementById("getForm");
    showForm.style.display = "flex";
});

/*View book list button */
const viewList = document.getElementById("viewList");
viewList.addEventListener("click", (formDisappear) =>{
    let hideForm = document.getElementById("getForm");
    hideForm.style.display = "none";
});