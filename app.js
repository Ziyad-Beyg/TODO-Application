var userInput = document.getElementById("text-field")
var ol = document.getElementById("list")
var textNode
var condition = true
// console.log(ol)  

function capitalizedText(){
    var firstChar = userInput.value.slice(0, 1);
    var otherChars = userInput.value.slice(1);
    firstChar = firstChar.toUpperCase();
    otherChars = otherChars.toLowerCase();
    var capitalizedChar = firstChar + otherChars;
    return capitalizedChar
}

function addTodo(){
    if(userInput.value === "" || userInput.value === " " || userInput.value === "   "){
        alert("INPUT FEILD FOUND EMPTY!!! ")
    }
    else{
    var list = document.createElement("LI")
    var textInput = document.createElement("INPUT")
    var capitalizedChar = capitalizedText()
    console.log(capitalizedChar)
    textInput.setAttribute("value", capitalizedChar + " ")
    textInput.setAttribute("type", "text")
    textInput.setAttribute("id", "input-list")
    textInput.setAttribute("disabled", "true")
    textInput.setAttribute("onfocus", "let value = this.value; this.value = null; this.value=value")
    // console.log(textInput)
    
    var editBtn = document.createElement("BUTTON")
    editBtn.setAttribute("class", "edit-btn")
    editBtn.setAttribute("onclick", "editSingleList(this)")
    var editIcon = document.createElement("I")
    editIcon.setAttribute("class", "far fa-edit")
    editBtn.appendChild(editIcon)

    var deleteBtn = document.createElement("BUTTON")
    deleteBtn.setAttribute("class", "delete-btn")
    deleteBtn.setAttribute("onclick", "deleteSingleList(this)")
    // console.log(deleteBtn)
    var deleteIcon = document.createElement("I")
    deleteIcon.setAttribute("class", "far fa-trash-alt")
    deleteBtn.appendChild(deleteIcon)
    // console.log(deleteBtn)

    var span = document.createElement("SPAN")
    span.setAttribute("class", "list-span")
    span.appendChild(editBtn)
    span.appendChild(deleteBtn)
    // console.log(span)

    list.appendChild(textInput)
    list.appendChild(span)
    ol.appendChild(list)
    ol.insertBefore(list, ol.firstChild);
    // console.log(list)
    userInput.value = ""
    }   
}

function deleteAll(){
    ol.innerHTML = ""
}

function deleteSingleList(currentList){
    ol.removeChild(currentList.parentNode.parentNode)
    // console.log(currentList.parentNode.parentNode)
}

function editSingleList(currentList){
    // console.log(currentList.parentNode.previousSibling.value)
    var textInput = currentList.parentNode.previousSibling
    var deleteBtn = currentList.nextSibling
    var span = currentList.parentNode

    textInput.disabled = false;
    textInput.focus(); 
    textInput.setAttribute("class", "focus-text focus-input-list")
    // console.log(deleteBtn)

    var saveBtn = document.createElement("BUTTON")
    saveBtn.setAttribute("class", " save-btn")
    saveBtn.setAttribute("onclick", "saveEditedList(this)")
    var saveIcon = document.createElement("I")
    saveIcon.setAttribute("class", "far fa-save")
    saveBtn.appendChild(saveIcon)

    span.removeChild(span.firstChild)
    span.appendChild(saveBtn)
    span.insertBefore(saveBtn, deleteBtn)
}

function saveEditedList(currentList){
    // console.log(currentList.parentNode.previousSibling)
    var textInput = currentList.parentNode.previousSibling
    var deleteBtn = currentList.nextSibling
    var span = currentList.parentNode

    textInput.disabled = true;
    textInput.setAttribute("class", "unfocus-text")

    var editBtn = document.createElement("BUTTON")
    editBtn.setAttribute("class", "edit-btn")
    editBtn.setAttribute("onclick", "editSingleList(this)")
    var editIcon = document.createElement("I")
    editIcon.setAttribute("class", "far fa-edit")
    editBtn.appendChild(editIcon)

    span.removeChild(span.firstChild)
    span.appendChild(editBtn)
    span.insertBefore(editBtn, deleteBtn)
}