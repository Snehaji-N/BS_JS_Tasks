function reverse(num)
{
    let rev_num = 0;
    while (num != 0) 
    {
        rev_num = rev_num*10 + (num%10);
        num = Math.floor(num/10);
    }
    return rev_num;
}

let num = 32243;
let reversed_num = reverse(num);
console.log("x = "+num);
console.log("Reversed x = "+reversed_num);
