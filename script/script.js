function suma(){
    var num1 = document.getElementById('num1').value; 
    var num2 = document.getElementById('num2').value;    
    const resultado = parseInt(num1) + parseInt(num2);   
    document.getElementById('resultado').innerHTML = resultado;
}

function resta(){
    var num1 = document.getElementById('num1').value; 
    var num2 = document.getElementById('num2').value;    
    const resultado = parseInt(num1) - parseInt(num2);   
    document.getElementById('resultado').innerHTML = resultado;
}

function multiplicacion(){
    var num1 = document.getElementById('num1').value; 
    var num2 = document.getElementById('num2').value;    
    const resultado = parseInt(num1) * parseInt(num2);   
    document.getElementById('resultado').innerHTML = resultado;
}

function division(){
    var num1 = document.getElementById('num1').value; 
    var num2 = document.getElementById('num2').value;     
    const resultado = parseInt(num1) / parseInt(num2);
    document.getElementById('resultado').innerHTML = resultado;
}

function potencia(){
    var num1 = document.getElementById('num1').value; 
    var num2 = document.getElementById('num2').value;     
    const resultado = Math.pow(parseInt(num1),  parseInt(num2));
    document.getElementById('resultado').innerHTML = resultado;
}

function raiz(){
    var num2 = document.getElementById('num2');
    num2.disabled = true;
    var num1 = document.getElementById('num1').value;         
    const resultado = Math.sqrt(parseInt(num1));
    document.getElementById('resultado').innerHTML = resultado;
}

function vaciar(){
    document.getElementById('num2').disabled = false;
    document.getElementById('num2').value = '';
    document.getElementById('num1').value = '';
    document.getElementById('resultado').innerHTML = '';
}



