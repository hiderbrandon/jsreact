import {useState} from 'react' 


const useShuffle = (fruits , names) => {
    max = fruits.length;
    myFruitsObject = {}
    const [fruitNames, setFruitNames] = useState({});
    theFruits = names.map( ()=> { return fruits[Math.floor(Math.random()*max)] })

    for (let index = 0; index < names.length; index++) {
       myFruitsObject = { ...myFruitsObject ,  [theFruits[index]]:names[index] }
       
   }

   setFruitNames(myFruitsObject)
   
   console.log(myFruitsObject[0])
   return myFruitsObject
}

/**useShuffle(["papas" , "pollo", "carne" , "cebollas" , "camino"] , ["comida" , "almuerzo" , "desayunno"]) */

export {useShuffle}

