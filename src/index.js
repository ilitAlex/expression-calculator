function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
let arr=expr.match(/[-*()+/]|\d+/g);
let result;
for (let i=0;i<arr.length;i++)
{
    if (arr[i]==='+')
    {result=(+arr[i-1])+(+arr[i+1])}
    else if (arr[i]==='*')
    {result=(+arr[i-1])*(+arr[i+1])}
    else if (arr[i]==='/')
    { if (arr[i+1]==='0') {throw new Error('TypeError: Division by zero.')}
        else result=(+arr[i-1])/(+arr[i+1])}
    else if (arr[i]==='-')
    {result=(+arr[i-1])-(+arr[i+1])}

}

    return result;


}

module.exports = {
    expressionCalculator
}