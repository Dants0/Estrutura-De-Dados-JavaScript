const friends = [
    {
        name:'Dantas',
        age: 36
    },
    {
        name:'Oliver',
        age: 26
    },
    {
        name:'Potter',
        age: 30
    },
];

function comparePerson (a,b,c){
    if(a.age < b.age){
        return -1
    }
    if(a.age>b.age || a.age>c.age){
        return 1
    }
    return 0
}

console.log(friends.sort(comparePerson))