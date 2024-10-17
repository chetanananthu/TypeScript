import { Book } from "../entity/Book";
import {Author} from "../entity/Author";
import { Member}  from "../entity/Member";

export class LibraryService{
    private authors:Author[]=[];
    private books:Book[]=[];
    private members:Member[]=[];

    addBook(book:Book):void{
        this.books.push(book);
    }  

    addAuthor(author:Author):void{
        this.authors.push(author);
    }   

    addMember(member:Member):void{
        this.members.push(member);
    }

    diplay(){
        console.log(this.authors);
        console.log(this.books);
        console.log(this.members);
    }
}

