function selectionSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n; i++) {
      let minIndex = i;
  
      // Find the index of the minimum element in the unsorted portion
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the minimum element with the first element of the unsorted portion
      
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    
  
    return arr;
  }
  
  // Example usage:
  const unsortedArray = [64, 25, 12, 22, 11];
  const sortedArray = selectionSort(unsortedArray);
  
  console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
  
