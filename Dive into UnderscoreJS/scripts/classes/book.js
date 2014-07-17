(function () {
    define([], function () {

        var Book = (function () {
            function Book(title, genre, author) {
                this._title = title;
                this._genre = genre;
                this._author = author;
            }

            return Book;
        }());

        return Book;
    });
}());