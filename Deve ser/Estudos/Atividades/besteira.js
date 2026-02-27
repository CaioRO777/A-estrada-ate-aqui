function tabuada(n1) {
  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (let i = 0; i < nums.length; i++) {
    console.log(n1 + " x " + nums[i] + " = " + n1 * nums[i]);
  }
}
console.log(tabuada(7));