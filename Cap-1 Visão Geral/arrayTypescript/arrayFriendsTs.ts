interface Person {
    name: string,
    age: number
};

const amigos = [
    {
        name: 'John',
        age: 23
    },
    {
        name: 'Mary',
        age: 21
    },
    {
        name: 'Bob',
        age: 20
    },
    {
        name:'Faker',
        age: 32
    }
];

function compare (a: Person,b: Person){
    if(a.age < b.age){
        return -1
    }
    if(a.age>b.age){
        return 1
    }
    return 0
}

console.log(friends.sort(compare))