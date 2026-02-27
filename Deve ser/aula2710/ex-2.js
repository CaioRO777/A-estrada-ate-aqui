

let nums1 = [26, 17, 48, 32, 11]
let nums2 = [4, 18, 10, 8, 19]
let result = []
let soma = 0
for(let i = 0; i < nums1.length;i++){
    result[i] = nums1[i] + nums2[i]
    soma += result[i]
}   
console.log(result)
console.log(soma)