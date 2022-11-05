function getLetter(s) {
    let letter;
    // Write your code here
    const sets = [
        ['a', 'e', 'i', 'o', 'u'],
        ['b', 'c', 'd', 'f', 'g'],
        ['h', 'j', 'k', 'l', 'm'],
        ['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'],
    ];

    const l1 = s[0].toLowerCase();
    for (let i = 0; i < sets[3].length; i++) {
        switch (l1) {
            case sets[0][i]:
                letter = 'A'
                break;
            case sets[1][i]:
                letter = 'B'
                break;
            case sets[2][i]:
                letter = 'C'
                break;
            case sets[3][i]:
                letter = 'D'
                break;
            default:
            // none;
        }
    }
    return letter;
}

getLetter('Believe');

 // if (l1 === sets[0][i]) {
        //     console.log('A')
        //     return 1
        // } else if (l1 === sets[1][i]) {
        //     console.log('B')
        //     return 1
        // } else if (l1 === sets[2][i]) {
        //     console.log('C')
        //     return 1;
        // } else if (l1 === sets[3][i]) {
        //     console.log('D')
        //     return 1
        // }