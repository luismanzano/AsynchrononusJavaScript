const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true) ? setTimeout(() => resolve("Doing something"), 3000) : reject("Cannot do something cuz there was an error")
  })
}


const doSomething = async () => {
  let something = await doSomethingAsync();
  console.log(something)
}

console.log("starting execution...");
doSomething();
console.log("Execution finished");