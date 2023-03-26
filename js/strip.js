function stripProperty(obj, prop) {
    // write your code here
    const strippedObj = {...obj};
    if (prop in obj) {
        delete strippedObj[prop]
    }
    return strippedObj;
  }

  stripProperty({one: 1, two: 2, three: 3}, 'two')