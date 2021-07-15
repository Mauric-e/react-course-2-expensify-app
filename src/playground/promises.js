const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Maurice',
        //     age: 23
        // });

        resolve('Something went wrong')

    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve({
            //     name: 'Maurice',
            //     age: 23
            // });
    
            resolve('This is a new Promise')
    
        }, 5000);
    });
}).then((str) => {
  console.log('does this run', str)
}).catch((error) => {
    console.log('error: ', error)
})
console.log('after');