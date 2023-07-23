//Esta funcion agrega a la pantalla el valor del boton que toquemos

function agregar(valor){
document.getElementById('pantalla').value += valor

}
//borra los datos llamando a un value vacio
function borrar(){
    document.getElementById('pantalla').value = ''
}

//toma los valores de la pantalla y calcula con la funcion de js eval 
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado 
}