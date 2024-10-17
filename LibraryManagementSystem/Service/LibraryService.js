"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryService = void 0;
var LibraryService = /** @class */ (function () {
    function LibraryService() {
        this.authors = [];
        this.books = [];
        this.members = [];
    }
    LibraryService.prototype.addBook = function (book) {
        this.books.push(book);
    };
    LibraryService.prototype.addAuthor = function (author) {
        this.authors.push(author);
    };
    LibraryService.prototype.addMember = function (member) {
        this.members.push(member);
    };
    LibraryService.prototype.diplay = function () {
        console.log(this.authors);
        console.log(this.books);
        console.log(this.members);
    };
    return LibraryService;
}());
exports.LibraryService = LibraryService;
