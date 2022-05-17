const a: number = 1
const b: string = 'hello'
const c: boolean = true

let d: number | string = 1
d = 'hey'
let d1: number
d1 = 1

type TStringOrNumber = string | number
let e: TStringOrNumber = 1
e = '123'

const arr: number[] = [1, 2, 3]
const arr1: (string | number)[] = [1, 2, 'hey']
// arr1.push(true)

const arr2: Array<string | number> = [1, 2.5, 'hey']
const arr3: number[] = []

arr2.forEach((item, index, array) => {
    if (typeof item === 'number') {
        array[index] = Math.floor(item)
        arr3.push(Math.floor(item))
    } else {
        array[index] = parseInt(item)
        // arr3.push(item)
        arr3.push(parseInt(item))
    }
})

type RGBColor = [number, number, number?]
const tuple: RGBColor = [255, 255, 255]


let f: unknown;
// f += 5

let g: any = 1
g += 1


interface IUser {
    readonly id: number
    first: string
    last?: string
    address?: string
}

const user: IUser = {
    id: 1,
    first: 'wes',
    last: undefined,
    // address: null,
}


interface IMyUser extends IUser {
    tel: string
}

const myuser: IMyUser = {
    id: 1,
    first: 'name',
    tel: '+7123',
}


enum ResponseTypes {
    SUCCESS = 'ok',
    ERROR = 'error',
}

const res = { status: 'ok', data: 1 }
const res1 = { status: 'error' }

if (res.status === ResponseTypes.SUCCESS) {
    console.log('data', res.data)
}



function add(a: number, b: number, c: number = 1, d?: number): number {
    // return a + b + c + (d || 1) // 5 7 7
    return a + b + c + (d === undefined ? 1 : d) // 5 7 6
}
const i = 1, j = 2
const sum = add(i, j)
const sum1 = add(1, 2, 3)
const sum2 = add(1, 2, 3, 0)

console.log(sum, sum1, sum2)

function print(text: string): void {
    console.log(text)
}

function rest(...params: Array<number | string>): void { }
function rest1(...params: [number, number, string]): void { }
function rest2(...params: [a: number, b: number, c: string]): void { }
rest('hey', 2, 1)
// rest2('hey', 2, 1)
rest2(1, 2, 'hey')


class Animal {
    // private name: string = 'Friend'
    // protected name: string = 'Friend'
    name: string = 'Friend' // public

    constructor(name?: string) {
        if (name) {
            this.name = name
        }
    }
}

class Dog extends Animal {
    bark() {
        console.log(`My name is ${this.name}`)
    }
}

const dog = new Dog('Rex')
dog.bark() // My name is Rex
const dog1 = new Dog()
dog1.bark() // My name is Friend
dog1.name = 'New name'
dog1.bark() // My name is New name


class AnimalWithAge {
    constructor(public name?: string, protected age: number = 5) { }
}

class DogWithAge extends AnimalWithAge {
    bark(text?: string) {
        console.log(`${text} - My name is ${this.name} and age is ${this.age}`)
    }
}

const dog2 = new DogWithAge()
dog2.bark() // undefined - My name is undefined and age is 5


function makeState<T extends string | number>(defaultState: T) {
    let state: T = defaultState

    const getState = () => state
    const setState = (newState: T) => {
        state = newState
    }

    return {
        getState,
        setState
    }
}

// const myState = makeState(['hey']) // Type 'string[]' is not assignable to type 'string'
const aa: number = 1
const myState = makeState(aa)
// myState.setState('hey') // Argument of type 'string' is not assignable to parameter of type 'number'
myState.setState(2)

console.log(myState.getState())

// Array<>
// Promise<>


interface IPerson {
    id: number
    name: string
    surname: string
    age: number
}

type TMyPerson = Partial<IPerson>

const person: TMyPerson = {
    name: 'name',
}


type TPersonForEmail1 = Pick<IPerson, 'name' | 'surname'>

const person1: TPersonForEmail1 = {
    name: 'name',
    surname: 'surname',
}


type TPersonForEmail2 = Omit<IPerson, 'id' | 'age'>

const person2: TPersonForEmail2 = {
    name: 'name',
    surname: 'surname',
}


export default [arr2, arr3, user]
