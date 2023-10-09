// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph")

}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(){
const catsA=cats.slice()
catsA.push("Broom")
    return catsA
   
}
function prependCat(){
  const catsB=cats.slice()
  catsB.unshift("Arnold")
return catsB
}

function removeLastCat(){
   const catsC=cats.slice()
    catsC.pop()
    return catsC
}
function removeFirstCat(){
    const catsD=cats.slice()
    catsD.shift()
    return catsD
}