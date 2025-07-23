let container = document.querySelector(".container");
let toastBox = document.getElementById("toastBox")


showToast =  (()=>{
    let toast  =  document.createElement("div");
    toast.classList.add('toast');
    toast.innerHTML= "success";

})