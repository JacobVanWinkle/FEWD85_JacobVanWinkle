document.getElementsByTagName("li")[0].addEventListener("click",function(){
  if(!this.parentNode.getAttribute("class")){
    this.parentNode.setAttribute("class","slideDown");
  }
  else{
    this.parentNode.removeAttribute("class");
  }
});





$('button').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle();
});