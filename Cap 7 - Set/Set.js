class Set {
    constructor() {
        this.items = {}
    }
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element
            return true
        }
        return false
    }
    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }
    clear() {
        this.items = {};
    }
    size() {
        return Object.keys(this.items).length;
    }
    sizeLegacy() {
        let count = 0;
        for (let key in this.items) {
            //devolve um array com todas as propriedades de um dado objeto. '.length devolve a quantidade de propriedades de um objeto existente em items.'
            if (this.items.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    };
    values() {
        return Object.values(this.items);
    }
    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }
    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    difference(otherSet) {
        const differenceSet = new Set();
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value)
            }
        });
        return differenceSet
    }
    isSubsetOf(otherSet) {
        if(this.size()>otherSet.size()){
            return false;
        }
        let isSubset = true;
        this.values().every(value => {
            if(!otherSet.has(value)){
                isSubset = false;
                return false;
            }
            return true;
        });
        return isSubset;
    }

}

const set = new Set();

set.add('Guilherme');
set.add('RemoverTeste');

console.log(set)

set.delete('Guilherme');
set.delete('Nao_Remover')

console.log(set)

console.log(set.delete('RemoverTeste'))

set.add('MoreContent_1')
set.add('MoreContent_2')
set.add('MoreContent_3')
set.add('MoreContent_4')
set.add('MoreContent_5')
set.add('MoreContent_6')

console.log(set)

console.log(set.sizeLegacy())

console.log(set.values())


const setA = new Set();
setA.add('Conteudo_EM_A_1')
setA.add('Conteudo_EM_A_2')
setA.add('Conteudo_EM_A_3')

const setB = new Set();
setB.add('Conteudo_EM_A_3')
setB.add('Conteudo_EM_B_1')
setB.add('Conteudo_EM_B_2')
setB.add('Conteudo_EM_B_3')

const unionAB = setA.union(setB);
const intersectionAB = setA.intersection(setB);
console.log('União->' + unionAB.values());
console.log('Interseção->' + intersectionAB.values());


const differenceAB = setA.difference(setB);
console.log(differenceAB.values());

console.log(setA.isSubsetOf(setB))