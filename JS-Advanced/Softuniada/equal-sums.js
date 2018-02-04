function sums(arr) {
    let nums = arr.map(Number);
    let sum1 = 0;
    let sum2 = 0;
    if (nums[0] + nums[1] === nums[2] + nums[3]) {
        console.log('Yes');
        console.log(nums[0] + nums[1]);
    } else if (nums[0] + nums[2] === nums[1] + nums[3]) {
        console.log('Yes');
        console.log(nums[0] + nums[2]);
    } else if(nums[0] + nums[3] === nums[2] + nums[1]) {
        console.log('Yes');
        console.log(nums[0] + nums[3]);
    }
    else {
        console.log('No');
    }
}

sums([ '3', '2', '4', '5' ]);