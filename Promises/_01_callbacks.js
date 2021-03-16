// Callbacks are nothing but function works as the name suggest
// Suppose we want to perform one action after some is finished so we pass that function as callback which can be executed later


// Here I created one function which I want to execute after some delay
function callAfterDelay(delay, callback) {
    setTimeout(()=> {
        callback()
    }, delay)
}

// Throw error after delay
function throwErrorAfterDelay(delay, callback) {
    setTimeout(()=> {
        callback(new Error(`Error after ${delay} ms`))
    }, delay)
}

// Now I do not need to create a function specifically. I can just pass the function directly as a parameter
callAfterDelay(1000, () => console.log("Callback works"))

// This concept is highly useful while working with promises

// Nested-callbacks: we can have a callback inside a callback
callAfterDelay(2000, () => {
    console.log("Callback 1 works")
    callAfterDelay(4000, () => console.log("Callback 2 works"))
})

// Handlling callback error
throwErrorAfterDelay(8000, (error) => {
    if(error) {
        console.log(error)
    }
})

// multiple nested ansync alls are not recommended which is called "Pyramid of doom"

