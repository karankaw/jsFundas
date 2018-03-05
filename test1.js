/*
Hoisting of variables declarations only
Function definitions are also hosted after declarations
definitions of variables are done at corresponding place

Each Js function returns something, if not explicitly defined, it returns undefined
suppose you return something in if statement and there it exists - whole function
Js does not pose restriction of having return in outside if statement
*/

function bar(i) {
    if (i > 0) {
        console.log('Inside if')
        return 1;
    }
    console.log('Outside If')
    return undefined;
}

console.log(bar(2));//3consoles infact i, o, 2
console.log('----------------------')
console.log(bar(-2))//2 consoles i, 2
console.log('----------------------')



console.log(`foo`);
func1();


function func1() {
    console.log("Aisa hai kya ??? " + foo)
}



var foo = 30;

func1();


function func1() {
    console.log("Chup kar? " + foo)
}
