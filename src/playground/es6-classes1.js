class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGretting() {
        return `Hi i am ${this.name}, and i have ${this.age} year(s) old!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()
        if (this.hasMajor) {
            description += ` Theis major is ${this.major}`
        }
        return description
    }
}

class Traver extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    hasHomeLocation() {
        return !!this.homeLocation
    }
    getGretting() {
        let gretting = super.getGretting()
        if (this.hasHomeLocation) {
            gretting += `. I am visiting from Philadelphia.`
        }
        return gretting
    }
}

const me = new Student('Erisvaldo', 24, 'Computer Science')
console.log(me.getDescription())

const other = new Traver('Italo', 23, 'Philadelphia')
console.log(other.getGretting())