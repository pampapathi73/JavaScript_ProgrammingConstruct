function SumofThree (arr, target)  {
    
     for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
               for(let k = j + 1; k < arr.length; k++) {
               if (arr[i] + arr[j] + arr[k] == target) {
               result.push(i);
               result.push(j);
                       result.push(k);
                    }
                }
           }
     }
     return result;
    }
    let result =new Array ();
    let finalArr=SumofThree([2, 0, -2, 0, 0], 0);
    console.log(finalArr);