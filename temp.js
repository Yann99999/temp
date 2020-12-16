function converter(event) {
   let temp = parseFloat(document.getElementById("temp").value)
   let operacao = event.target.textContent;
   let resultado

   switch (operacao) {
      case "Celsius para Fahrenheit":
           console.log("C");
           resultado = 1.8* temp + 32
         break;
      case "Fahrenheit para Celsius":
            console.log("F");
            resultado = (temp - 32)/ 1.8
   
      default:
         console.log("Não é poss-ivel reslizar a conversão");
   }
document.getElementById("resultado").textContent = resultado
}