const factoryFunction = (name,age)=>{
    return{
        name:name,
        age:age,
        greet : function(){
            console.log(`Hello, my name is ${this.name} and I am ${this.age } years old.`);         
    }
}
};

const person1 = factoryFunction('Alice',30);
const person2 = factoryFunction('Bob',25);
const person3 = factoryFunction('Charlie',35);

// person1.greet();
person2.greet();
setTimeout(()=>{
    person3.greet();
},2000)
setTimeout(()=>{
    person1.greet();
},5000)