

function converterMoedaParaCripto(valorEntrada, tipoMoeda)
{
   var valorParaConverter;
   if(tipoMoeda == 'B')
   {
    valorParaConverter = 116.799,27;
   }
   else
   if(tipoMoeda == 'D')
   {
    valorParaConverter = 0.46;
   }
   else
   {
    valorParaConverter = 0;
   }

   return  valorEntrada * valorParaConverter;
}

function  atribuiValorInput() {

   var nome = document.getElementById("nome").value;
    
   
   var valorEntrada    = document.getElementById("valorEntrada").value;
   
   var elementoSelect  = document.getElementById("elementoMoeda");
   var tipoMoeda       = elementoSelect.options[elementoSelect.selectedIndex].value;
   
   var valorConvertido = converterMoedaParaCripto(valorEntrada, tipoMoeda);
   console.log(valorConvertido);
   
   
   document.getElementById("valorConvertido").value =  nome + ' o valor da conversão é: R$' + valorConvertido;
   } 


