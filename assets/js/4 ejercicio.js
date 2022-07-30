variable = document.addEventListener("keydown", function (event){
    if(event.key === 'a'){
        color = 'brown'
    } else if (event.key ==='s'){
        color = 'pink'
    }
    else if (event.key === 'd'){
        color = 'green'
    }
})

caja_1 = document.querySelector('#caja-1')
caja_2 = document.querySelector('#caja-2')
caja_3 = document.querySelector('#caja-3')
caja_4 = document.querySelector('#caja-4')

const evento = (event) => event.target.style.backgroundColor = color    

caja_1.addEventListener("click",evento)
caja_2.addEventListener("click",evento)
caja_3.addEventListener("click",evento)
caja_4.addEventListener("click",evento)
