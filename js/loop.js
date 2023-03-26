function vowelsAndConsonants(s) {
    const str = s.split('')
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            console.log(str[i])
        };
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'b' || str[i] === 'c' || str[i] === 'd' || str[i] === 'f' || str[i] === 'g' ||
            str[i] === 'h' || str[i] === 'j' || str[i] === 'k' || str[i] === 'l' || str[i] === 'm' ||
            str[i] === 'n' || str[i] === 'p' || str[i] === 'q' || str[i] === 'r' || str[i] === 's' ||
            str[i] === 't' || str[i] === 'v' || str[i] === 'w' || str[i] === 'x' || str[i] === 'y' || str[i] === 'z') {
            console.log(str[i])
        }
    }
}

vowelsAndConsonants('believe')