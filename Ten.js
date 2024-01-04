function sort012(arr) {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
  
    // Count the occurrences of 0, 1, and 2 in the array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        count0++;
      } else if (arr[i] === 1) {
        count1++;
      } else if (arr[i] === 2) {
        count2++;
      }
    }
  
    // Overwrite the original array with the sorted values
    for (let i = 0; i < arr.length; i++) {
      if (count0 > 0) {
        arr[i] = 0;
        count0--;
      } else if (count1 > 0) {
        arr[i] = 1;
        count1--;
      } else if (count2 > 0) {
        arr[i] = 2;
        count2--;
      }
    }
  }
  
  const array = [0, 1, 2, 1, 0, 2, 2, 1, 0];
  console.log("Original Array:", array);
  sort012(array);
  console.log("Sorted Array:", array);
  
