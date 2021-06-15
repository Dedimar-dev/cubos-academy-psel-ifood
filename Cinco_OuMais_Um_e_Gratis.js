function solucao(precos) {
    //seu codigo aqui
   
    var resul = 0;
    var resul2 = 0;
    var menor = [];
    var result = precos[0];
    var novoPreco = [];
   
  for (let y = 0; y < precos.length; y++){
      if (precos[y] < result){
          result = precos[y];
     
      }
  }
   
    if (precos.length >= 5){
    precos.splice(precos.indexOf(result), 1)
    for (let i = 0; i < precos.length; i++){ 
        novoPreco = precos[i] 
         resul += novoPreco;
     }
     console.log( resul)
        
     }else if (precos.length < 5){
       for (let x = 0; x < precos.length; x++){
        resul2 += precos[x];
      }
      console.log(resul2)
    }

}