// These are some examples of promise

let resolvePromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved"), 2000)
})

let rejectPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("rejected")), 2000)
})

// a promise an only execute one resolve or reject statement. After this every statement will be ignored.
// It works like a "return" in a standard function

// then , catch and finally

resolvePromise.then((data) => console.log(data))

rejectPromise.catch((error) => console.log(error))

// finally runs after promise is settled whether it is resolved or rejected.
// This can be used to stop the loading indicators and all


// Promises chaining

resolvePromise.then(() => console.log("chain 1"))
               .then(() => console.log("chain 2"))
               .then(() => console.log("chain 3"))