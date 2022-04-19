let terminalClick = document.querySelector("#terminal")

terminalClick.addEventListener('dblclick', evt =>{
    openTerminal()
   
})
document.body.addEventListener('keypress',event=>{
    const key = event.key;
    const code = event.keyCode;
 console.log(code)
    if(code == '13'){
        openTerminal()
      
        
    } else if (code == '127' ){
     closeTerminal()
    
    }else if (code == '49'){
        BeginRain()
    }
})

function openTerminal(){
    let terminal = document.querySelector("#main")
    terminal.classList.remove("main")
    terminal.classList.add("main-content")
    
}

function closeTerminal(){
    let terminal = document.querySelector("#main")
    terminal.classList.remove("main-content")
    terminal.classList.add("main")


}


