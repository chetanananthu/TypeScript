class Employee{
    static count:number=0;
    id:number;
    name:string;
    email:string;
    password:string;
    regular:boolean;

    constructor(name:string,email:string,password:string,regular:boolean){
        this.id=++Employee.count;
        this.name=name;
        this.email=email;
        this.password=password;
        this.regular=regular;
    }

    print():void{
        console.log(`id=${this.id}, name=${this.name}, email=${this.email}, password=${this.password}, regular=${this.regular}`);
    }
}


const employee1=new Employee('John', 'john@gmail.com', '123456', true);
const employee2=new Employee('chetan', 'chetan@gmail.com', '123456', true);
employee1.print();
employee2.print();


