// Declare a constant object and try to modify its properties.
// const name = "Dhanush";
// console.log(name);
// name = "Hero"; Gives error

// Use let to create a variable inside a block and show that it is not accessible outside the block.
{
  let nickName = "Luckey";
  var mobNum = "7013699022";
  console.log(nickName);
}
console.log(mobNum);
// console.log(nickName); gets error
