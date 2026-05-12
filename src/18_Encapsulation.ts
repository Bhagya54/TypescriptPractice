class Student {
    private id1: number = 12

    set idValue(num: number) {
        if (num > 0) {
            console.log("setting value for id")
            this.id1 = num
        }
        else {
            console.log("invalid input")
        }


    }

    get idValue(): number {
        return this.id1;
    }

}

const c2 = new Student();
c2.idValue = 124
console.log(c2.idValue)

