var siteNameInput = document.getElementById("site-name")
var siteUrlInput = document.getElementById("url-name")

var siteContainer = []
if (localStorage.getItem("saits") !== null) {
    siteContainer = JSON.parse(localStorage.getItem("saits"))
    display()
}

function add() {
   if(validationName()==true && validationUrl()==true){
    var bookMark = {
        siteName: siteNameInput.value,
        siteUrl: siteUrlInput.value,
    }
    console.log(bookMark);
    siteContainer.push(bookMark)
    clear();
    display();
    localStorage.setItem("saits", JSON.stringify(siteContainer));
   }
   
}

function clear() {
    siteNameInput.value = null
    siteUrlInput.value = null
}

function display() {
    cartona = ``
    for (let i = 0; i < siteContainer.length; i++) {
        cartona += `
        <tr>
        <td class="text-center"> ${i + 1}</td>
        <td class="text-center">${siteContainer[i].siteUrl}</td>


        <td class="text-center"> <a href="${siteContainer[i].siteUrl}"  target="_blank">
        <button class="btn btn-visit">
                <i class="fa-solid fa-eye"></i>
                <a href="https://www.facebook.com/"></a>
                Visit
            </button>
        </a></td>



        <td onclick="deleteSaite(${i});" class="text-center"><button class="btn btn-outline-danger">Delete</button></td>
        </tr>


        `
    }
    document.getElementById("demo").innerHTML = cartona
}

function deleteSaite(index) {
    siteContainer.splice(index, 1)
    console.log("deleted");
    localStorage.setItem("saits", JSON.stringify(siteContainer))
    display()

}






function validationName() {
    var nameRegex = /^\w{3,}(\s+\w+)*$/;
    if (nameRegex.test(siteNameInput.value) == true) {
        console.log("hi");
    document.getElementById("alertName").classList.replace("d-block","d-none")
    document.getElementById("site-name").classList.remove("is-invalid")

        return true
    }
    document.getElementById("alertName").classList.replace("d-none","d-block")
    document.getElementById("site-name").classList.add("is-invalid")

    return false

}

function validationUrl() {
    var urlRegex = /^(https?:\/\/)?(www\.)?[a-z]{3,}\.(com|net|dev)$/;
    if (urlRegex.test(siteUrlInput.value) == true) {
        console.log("hi");
    document.getElementById("alerturl").classList.replace("d-block","d-none")
    document.getElementById("url-name").classList.remove("is-invalid")


        return true
    }
    document.getElementById("alerturl").classList.replace("d-none","d-block")
    document.getElementById("url-name").classList.add("is-invalid")

    return false

}