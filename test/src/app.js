import {getTotal} from "./utils";
import {rate} from "./test";
import "./style.css";


console.log("test")
if(testVar){
    console.log("looking?")
}

@annotation

class Example {
    name = 'Test Name'
}

function annotation(target) {
    target.annotated = true;
}

const test = new Example();
console.log(JSON.stringify(test));

const product = [{
    price: 100,
    count: 2
}];

console.log(getTotal(product))