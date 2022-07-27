const boolean: boolean = false;

const stringabc: string = 'some text';

const int: number = 2;
const float: number = 2.4;
const num: number = 3e24;

const numArray: Array<number> = [1,2,3,4];
const numArray2: number[] = [1,2,3,4,5,6];

const stringArray: string[] = ['text1', 'tex2'];

const contactArray: [string, number] = ['user', 12323];

let varriable: any = 2;

function sayName (name: string): void {
    console.log(`My name is ${name}`)
}

sayName('RANDOM_NAME');

function throwError (error: string): void {
    throw new Error(error);
}
throwError('Error_495');

function infinite (): never {
    while(true) {

    }
}

type SUB_TYPE = 'month' | 'year';

const login: SUB_TYPE = 'year'; 

type ID = string | number | [];
const id1: ID = 1;
const id2: ID = [];
const id3: ID = 'dsd';