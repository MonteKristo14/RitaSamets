let name = prompt("Введите имя пользователя");

if(name.match(/\d+/)){
    let newName = name.split("");
    
    for (let i = 0; i<newName.length;i+=2){
        newName[i] = newName[i].toUpperCase();
    }
    alert(newName.join(""));
}
else{
    alert(name.split("").reverse().join(""));
}