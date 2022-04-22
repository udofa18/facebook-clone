let nums = [1, 1, 0, 1, 0, 0, 0, 0, 1];
let newArr = Object(nums[0]);
let consVal = [];
nums.forEach((i) => {
  if (newArr == i) {
    consVal.push(i);
  }
});
console.log(consVal);
