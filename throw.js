function isPositive(a) {
    try {
        if (a === 0) {
            throw new Error('Zero Error');
        } else if (a < 0) {
            throw new Error('Negative Error');
        }
        else if (a > 0) {
            return 'YES'
        }
        else {
            throw new Error('Enter positive or negative integer!')
        }
    }

    catch (e) {
        return e.message;
    }
}

isPositive(0)
isPositive(-3)
isPositive(null)