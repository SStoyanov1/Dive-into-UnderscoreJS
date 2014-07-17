(function () {
    define([], function () {

        var Student = (function () {
            function Student(fname, lname, age, grade, marks) {
                this._fname = fname;
                this._lname = lname;
                this._age = age;
                this._grade = grade;
                this._marks = marks;
                this._fullName = this._fname + ' ' + this._lname;
            }

            return Student;
        }());

        return Student;
    });
}());