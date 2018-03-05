var o = {}
var s = "String";
var u;

obj = {
    "key1": "value1",
    key2: "value2",
    func1:function(){return 0},
    func2,
    o,
    s,
    u :undefined
}

//str = JSON.stringify(obj);
//console.log(str)

console.log(obj.func1())//0

function func2(){return "abc"} // definition hoisted

func3 = function(){return "xyz"}//only declaration hoisted