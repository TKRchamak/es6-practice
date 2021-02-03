class Parents{
    constructor(){
        this.parentsName = "Kanak Kumar Roy";
        this.title = 'Kumar Roy';
    }
}

class Child extends Parents{
    constructor(name){
        super();
        this.childName = name;
    }
    fullName() {
        return this.childName + " " +this.title;
    }
}
const parent = new Parents();
const childs = new Child('Chamak');
const childs1 = new Child('Puskar');

console.log(childs.fullName(), childs1.fullName(), parent.parentsName);
