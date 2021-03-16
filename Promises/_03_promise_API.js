// Promise API has many helper functions

// Promise.all

Promise.all([
    new Promise(resolve => {
        setTimeout(() => resolve(1), 2000)
    }),
    new Promise(resolve => {
        setTimeout(() => resolve(1), 2000)
    }),
    new Promise(resolve => {
        setTimeout(() => resolve(1), 2000)
    })
]).then((res) => console.log(res))

