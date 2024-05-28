const dialog = document.querySelector('dialog');

document.addEventListener('click', (event) => {
  if (event.target !== dialog && !dialog.contains(event.target)) {
    dialog.close();
  }
});

function contentAll(){
    document.getElementById("contentPage").innerHTML = "Something Happened here....."
    displayCookies()

}

function contentImportant(){
    document.getElementById("contentPage").innerHTML = "Important page"
}

function contentNotes(){
    document.getElementById("contentPage").innerHTML = "Notes page"
}

function contentLinks(){
    document.getElementById("contentPage").innerHTML = "Links"
}

function newTask(){
    document.getElementById("contentPage").innerHTML = "Add Task"
    document.querySelector("dialog").showModal()
}

function fnClose(){
    document.querySelector("dialog").close()
}

function createCookie() {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 100);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${taskname.value}=['important']; ${expires}; path=/`;
    document.querySelector("dialog").close()
}


function displayCookies() {
    var cookieList = document.getElementById("contentPage");
    cookieList.innerHTML = ""; // clear the element before adding new content
    document.cookie.split(';').forEach(function(cookie) {
      var cookieName = cookie.split('=')[0];
      var cookieValue = cookie.split('=')[1];
      var newLine = document.createElement("p");
      newLine.textContent = 'Cookie name: ' + cookieName + ' Cookie value: ' + cookieValue;
      cookieList.appendChild(newLine);
    });
  }
  


  


