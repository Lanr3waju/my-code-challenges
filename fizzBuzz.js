function fizzBuzz(n) {
    // Write your code here
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 3 === 0 && n[i] % 5 === 0) {
            console.log('FizzBuzz')
        } else if (n[i] % 3 === 0) {
            console.log('Fizz')
        } else if (n[i] % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(n[i])
        }
    }
}

fizzBuzz([1,2,3,4,5,6,15])