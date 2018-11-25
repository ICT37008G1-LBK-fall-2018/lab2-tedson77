for(var i=2; i < 20; i++){
    var answer = 1;
    for(var g=2; g < i; g++){
       if(i%g==0){
           answer=0;
       }
   }
   if(answer == 1){
       alert(i);
   }

}