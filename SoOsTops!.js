function solucao(produtos) {
	//seu codigo aqui
 var soma = 0;
 var items = 0;
 var vezes = 0;
 var resul = 0;
 var resulT = {};   
 var novoItems = [];
 var precos = 10000;
 var novoValorTotal = 0;
    
  for (let i of produtos) {
      soma += i.preco;
      items = i.preco;
      
      novoItems.push(items);
      
    }   
    
   for (let y = 0; y < novoItems.length; y++) {
       
       if (novoItems[y] > precos) {
            
           novoValorTotal = novoItems[y];
           
           resul += novoValorTotal;
        }
    
   }
    
    resulT = { totalTop: resul, percentual: resul / soma }
    
    console.log(resulT)
};
