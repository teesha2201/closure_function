/*que 1 */
function counter()
    {
        var counter = 0;

        function IncreaseCounter() {
            return counter += 1;
    };

        return IncreaseCounter;
    }

    var counter = counter();
    alert(counter());
    alert(counter());
    alert(counter());
    alert(counter());
    
/* que 2 */
let count = 0;
(function () {
    if (count === 0) 
    {
        let count = 1;
        console.log(count); // What is logged?
    }
console.log(count); // What is logged?
})();

/* que 3 */
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

/* que 4 */
const area = function (length)
{
    return function (breadth)
    {
        console.log(length*breadth);
    }
}
const rec = area(2);
rec(4);

/* que 5 */
function counter(){
    var count=0;
function increase(){
return  count+=1 ;
}
return increase;
}
var counts=counter()
counts()
counts()
counts()

/* que 6 */
(function () {
    alert(a);
    var a = 12;
})();

/* que 7 */
var a = 10;
var x = (function () 
{
    var a = 12;
    return function ()
        {
            alert(a);
        };
})();
x();

/* que 8 */
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';

(function innerFunc(innerArg) {
    var innerVar = 'b';

console.log(
"outerArg = " + outerArg + "\n" +
"innerArg = " + innerArg + "\n" +
"outerVar = " + outerVar + "\n" +
"innerVar = " + innerVar + "\n" +
"globalVar = " + globalVar);

    })(456);
})(123);
