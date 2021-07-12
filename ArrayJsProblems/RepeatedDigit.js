let count=0;
let num=0;
let n;
let digitArray=new Array();
for (let i=1; i <= 100; i++)
{
        num=Math.floor(Math.random() * 90 + 10);
        n=num%11;
        if (n == 0 )
        {
                digitArray.push(num);
                count++;
        }
}
        if (count > 2 )
        console.log(digitArray);