const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(cat){
  kittens.push(cat)
  return kittens;
};

function destructivelyPrependKitten(cat){
  kittens.unshift(cat)
  return kittens;
};

function destructivelyRemoveLastKitten(cat){
  kittens.pop()
  return kittens;
};

function destructivelyRemoveFirstKitten(cat){
  kittens.shift()
  return kittens;
};

function appendKitten(cat){
  return [...kittens, cat]
};

function prependKitten(cat){
  return [cat, ...kittens]
};

function removeLastKitten(cat){
  fewer_kittens = kittens.slice(0, kittens.length - 1) 
  return fewer_kittens
};

function removeFirstKitten(cat){
  fewer_kittens = kittens.slice(1, kittens.length)
  return fewer_kittens
};