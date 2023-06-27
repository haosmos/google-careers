const arr = [1, 209, 32, 14, 55];

function bubbleSort(arr: number[]): number[] {
    // get length of array
    const len = arr.length;
    // loop through array
    for (let i = 0; i < len; i++) {
        // loop through array again
        for (let j = 0; j < len - 1; j++) {
            // if current element is greater than next element, swap them
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    // return sorted array
    return arr;
}

console.log(bubbleSort(arr));
