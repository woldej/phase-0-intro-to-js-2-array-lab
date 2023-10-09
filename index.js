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
const cats1=cats.slice()
cats1.push("Broom")
    return cats1
   
}
function prependCat(){
  const cats2=cats.slice()
  cats2.unshift("Arnold")
return cats2
}

function removeLastCat(){
   const cats3=cats.slice()
    cats3.pop()
    return cats3
}
function removeFirstCat(){
    const cats4=cats.slice()
    cats4.shift()
    return cats4
}