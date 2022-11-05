function getSecondLargest(nums) {
    // Complete the function

    // Sort array in descending order 
    const sortedArr = nums.sort((a, b) => b-a);

    // Loop through sorted array and check for first integer that is lesser than largest array
    for (let i = 0; i < sortedArr.length; i ++) {
        if (sortedArr[i] < sortedArr[0]) {
            return sortedArr[i]  
        }
    }
}