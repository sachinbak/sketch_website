var count =1;
while (count < 11) {
    console.log(" count is : " + count);
    count++;
}
 console.log("Multiple of 2");
 var two =2;
 while (two < 21){
     console.log("Multiple of two " + two);
     count +=2;
 }
 console.log("Multiple of 2");
 var t =2, i=1;
 while (t < 21){
     while (i<10){
     console.log("two multiply by  "+ i +"  is equal to " + t);
     
     i++;
     t +=2;
     }
     
 }

 console.log("print string individually ");
 var str = "SACHIN KUMAR MISHRA";
 var count = 0;
 while(count < str.length) {
     console.log(str[count]);
     count++;
 }

 console.log("print string with there position no.");
 var str =" SACHIN KUMAR MISHRA";
 var position = 0;
 var i =1;
 while( position< str.length){
     while(i< str.length+1){
     console.log("the string at  "+ i +" position is "+ str[position]);
    i++;
    position++; 
    }
 }

