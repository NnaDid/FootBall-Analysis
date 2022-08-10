        let r1 = ["R1","R2","R3","R4","R5","R6","R7","R8","R9","R10"];
        let r2 = ["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10"];
        
        var a1=["A","B","C","D","E","F","G","H","I","J"];  
        var a2=["a","b","c","d","e","f","g","h","i","j"];
        
        let resultArr = [];
        for (let i = 0; i < 1023; ++i) {
            let k = i;
            const arr = [];
            for (let j = 0; j < 10; ++j) {
                if (k % 2) {
                arr.push(r2[j]);
                } else {
                arr.push(r1[j]);
                }
                k = Math.floor(k / 2);
            }
            //console.log(arr);
            resultArr.push(arr);
        }

        console.log(resultArr);

    // WORKING with 3 ARRAYS:
    const Ar1 = ["H1","H2","H3"];
    const Ar2 = ["D1","D2","D3"];
    const Ar3 = ["A1","A2","A3"];
    const len = 3**Ar1.length;

    function secondMarket(){
        let resultArr =[];
        for (let i = 0; i < len; ++i) {
        let k = i;
        const arr = [];
        for (let j = 0; j < Ar3.length; ++j) {
        let y = k % 3;
        switch(y){
            case 0: arr.push(Ar3[j]); break;
            case 1: arr.push(Ar2[j]); break;
            case 2: arr.push(Ar1[j]); break;
        }
         k = Math.floor(k / 3);
         }
            //console.log(arr);
            resultArr.push(arr);
         }
            return resultArr;
        }





        
// var cars = [{ make: 'audi', model: 'r8', year: '2012' }, { make: 'audi', model: 'rs5', year: '2013' }, { make: 'ford', model: 'mustang', year: '2012' }, { make: 'ford', model: 'fusion', year: '2015' }, { make: 'kia', model: 'optima', year: '2012' }],
// result = cars.reduce(function (r, a) {
//         r[a.make] = r[a.make] || [];
//         r[a.make].push(a);
//         return r;
//        }, Object.create(null));

// console.log(result);






// Factorial 
  function factorial(number){
      if(number<=0){
	    return 1
	  }else{
	    return number*factorial(number-1);
	  }
  }
  
  // permutation 
  function permutation(num,r){
     if(r>num){
	  return 0;
	 }else{
	    return factorial(num)/factorial(num - r);
	 }
       
  }
  
  // function combination
  function combination(n,r){
      if(n<r){
	    return 0;
	  }else{
	   return permutation(n,r)/factorial(r);
	  }
  }
  
  let num =59049, r= 38;
  
  // console.log(`Factorial: ${factorial(num)}`);
  console.log(`permutation: ${permutation(num,r)}`);
  // console.log(`combination: ${combination(num,r)**3}`);






  let jar = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y"];
 
const size = 7;

let result11 = [];

for(let i = 0; i <= (jar.length - size); i++){
     result11.push(jar.slice(i, size+i));
}
console.log(result11)

const result = jar.reduce((acc, _, i) => {
  if (i <= jar.length - size) acc.push(jar.slice(i, i + size))
  return acc
}, [])

console.log(result)
console.log(result11)

 


function secondMarketThree(){
  const arrays = [["H1","H2","H3","H4","H5","H6","H7","H8","H9","H10"], 
                  ["D1","D2","D3","D4","D5","D6","D7","D8","D9","D10"], 
                  ["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10"]
                 ];
  let resultArr=[];

for (let i = 0, combinations = arrays.length ** arrays[0].length; i < combinations; ++i) {
  const arr = [];
  
  for (let j = 0, k = i, elements = arrays[0].length; j < elements; ++j, k = Math.floor(k / arrays.length)) {
       arr.push(arrays[k % arrays.length][j]);
  }
       resultArr.push(arr);
}
return resultArr;
}
	