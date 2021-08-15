const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey! This is correct")
    } else {
      reject("Hey! This is wrong");
    }
  })
}


const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => resolve("Hey! This is correct 2"), 10000)
    } else {
      const err = new Error("Hey! This is wrong 2");
      reject(err);
    }
  })
}



somethingWillHappen()
.then(response => {
  console.log(response)
}).catch(err => {
  console.log(err)
})

somethingWillHappen2().then(response => {
  console.log(response)
}).catch(err => {
  console.log(err)
})