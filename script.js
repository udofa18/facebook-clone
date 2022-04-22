let arr = [8, 7, 5, 8, 0, 5, 7, 3, 6, 8];

function mostFreqNum(nums) {
  let count = 0;
  let mostFreqNum;
  let maxCount = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
        if (maxCount < count) {
          maxCount = count;
          mostFreqNum = nums[i];
        }
      }
    }
    count = 0;
  }
  console.log(maxCount);
}
mostFreqNum(arr);
