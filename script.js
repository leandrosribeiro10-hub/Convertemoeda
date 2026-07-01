function converter(){
    let opcao,valor, total;

    opcao=parseInt(document.getElementById("txtopçao").value);
    valor=parseFloat(document.getElementById("txtvalor").value);
 
   
    switch (opcao) {
        
        case 1:
            total=valor / 5,19;
            resultado.innerHTML="o valor convertido para Dólar é de US$ " +total.toFixed(2) ;
            break;
        case 2:
            total=valor / 5,90;
            resultado.innerHTML="o valor convertido para Euro é de €" +total.toFixed(2);
            break;
        default:
            alert("Opção Invalida");

    }
}