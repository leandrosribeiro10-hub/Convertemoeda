function Verificar(){
let n1,n2;
n1=document.getElementById("txt").value;
n2=document.getElementById("txt2").value;
switch (n2){
    case "A":
        alert(n1 +  " Excelente");
        break;
    case "B":

        alert(n1 +  " Bom");
        break;
    case "C":

        alert(n1 +  " Regular");
        break;
    case "D":

        alert(n1 + " Insuficiente");
        break;
    default:
        alert("Erro perolo")
}

    
}