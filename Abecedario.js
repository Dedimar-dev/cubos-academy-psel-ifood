function solucao(letra, palavras) {
    //seu codigo aqui
    var resul = "";
    var certas= 0;
    var erradas = 0;
    
   for (let i of palavras){
       novaLetra = i[0];
       
       if (novaLetra !== letra){
            certas++;
       }else{
          erradas++;
       }
   }
   console.log(certas);
};