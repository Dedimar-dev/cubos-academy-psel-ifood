function solucao(tempo, distancia) {
	//seu codigo aqui
    
    if (tempo < 05){
       
    console.log(600);
    
    }else if (tempo >= 05 && tempo <= 60){
     
    console.log((tempo * 100) + (distancia * 50))   
              
    }else if ( tempo > 60 && distancia < 100){
        
    console.log(distancia * 200)
              
    }else if (tempo > 60 && distancia >= 100){
        
    console.log(distancia * 150)
               
    }
   
};
