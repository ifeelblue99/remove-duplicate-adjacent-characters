/*
Given a string, s, the task is to remove all the duplicate adjacent characters 
from the given string.

Input:
“abbace”

Output:
“ce”

(With a Hard Way of Solution)
*/

let exStr = "1aadv3dv"

// returns a string without duplicated chars
function removeAdjcent(str){

  // string --> array  
  let arr = str.split("")
  // hash map
  const hashmap = new Map()
  
  // hash map --> set, iterate
  new Set(arr).forEach(el=>{
    hashmap[`${el}`]= arr.getCount(el)
  })
  
  // result
  const res = []
  for (const [key, value] of Object.entries(hashmap)) {
    if (value == 1) {
      res.push(key)
    }
  }
  
  return res.join("")
}

//a method that returns count of an element with the same value
Array.prototype.getCount = function(val){
  let count = 0
  this.forEach(el=>{
    if (el == val) count++
  })
  
  return count
}
//

// driver code
console.log(exStr,"--func-->",removeAdjcent(exStr))
