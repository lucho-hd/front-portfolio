window.addEventListener('DOMContentLoaded', () => {
    // Pone aca todo el codigo javascript
    let ojo   = document.getElementById("ojo");
    let input = document.getElementById("contra"); 
    
    ojo.addEventListener("click", () => {
        if(input.type == "password") {
            input.type = "text";
            ojo.style.opacity = 0.8; 
        }else {
            input.type = "password";
            ojo.style.opacity = 0.3;
        }
    })
})





