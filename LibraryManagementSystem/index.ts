import { LibraryService } from "./Service/LibraryService";
import { Book } from "./entity/Book";
import {Author} from "./entity/Author";
import { Member}  from "./entity/Member";


const service=new LibraryService();
const book=new Book(1,"The Great Gatsby", "F. Scott Fitzgerald");
    
const author=new Author(1, "F. Scott Fitzgerald",["The Great Gatsby"]);
const member=new Member(1, "John Doe","jhon@gmail.com",new Date('2023-01-01'));

service.addBook(book);   
service.addAuthor(author);
service.addMember(member);

service.diplay();