function shiftPage(page){
  document.getElementById(page).display = "block";
  document.getElementById(page + "b").classList.add("select");
  if(page != "home"){
    document.getElementById("home").display = "none";
    document.getElementById("home").classList.remove("select");
  }
}