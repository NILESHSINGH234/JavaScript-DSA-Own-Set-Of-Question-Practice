function getSecondLargest(nums) {
    let first = nums[0]; 
    let second = -1;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > first) {
         second = first;
         first = nums[i];
         
         
      }
  
    
    }
   
    console.log(nums.length);
    
    return second;
  }

  console.log(getSecondLargest([3,4,2,8,9,]));
