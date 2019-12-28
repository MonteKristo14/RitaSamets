document.querySelector("form").addEventListener("submit",(e)=>{
    let login = document.querySelector('#login').value;

    let password = document.querySelector("#password").value;
    let button = document.querySelector("#dones");
    button.classList.add("ann");
    console.log(login);
    if(typeof login != "string"){
        e.preventDefault();
        
    }
    
    

    if(typeof password != "string"){
        e.preventDefault();
        
    }
})
