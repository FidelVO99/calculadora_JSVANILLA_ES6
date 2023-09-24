const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumero = document.querySelectorAll('.numero')
const botonesOperadores = document.querySelectorAll('.operador')
const borrar = document.getElementById('borrar')
const borrarTodo = document.getElementById('borrarTodo')
const display = new Display(displayValorAnterior,displayValorActual);


botonesNumero. forEach ((boton)=>{
    boton.addEventListener('click',()=>{
        display.agregarNumero(boton.innerHTML)
    });
});
botonesOperadores.forEach((boton)=>{
    boton.addEventListener('click',()=>{
        display.computar(boton.value)
    })
})
borrar.addEventListener('click',()=>{
        display.borrar()
})
borrarTodo.addEventListener('click',()=>{
    display.borrarTodo();
})