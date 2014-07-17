(function () {
    'use strict';

    require(['classes/student', 'classes/book', 'classes/animal', 'tasks/underscore-tasks'], function (Student, Book, Animal, underscoreTasks) {

        var students = [];

        students.push(new Student('Georgi', 'Martinov', 19, 12, [5, 6, 4, 3]));
        students.push(new Student('Peter', 'Drumov', 18, 11, [6, 6, 6, 2, 3]));
        students.push(new Student('Mariika', 'Dineva', 21, 13, [6, 2, 3, 4, 4]));
        students.push(new Student('Ivan', 'Minkov', 16, 9, [5, 6, 4, 2]));
        students.push(new Student('Paraskeva', 'Djukelova', 13, 6, [6, 6, 5, 6]));
        students.push(new Student('Ivan', 'Drumov', 19, 12, [2, 3, 2, 4]));
        students.push(new Student('Gancho', 'Drumov', 16, 9, [5, 6, 4, 4, 5]));
        students.push(new Student('Borislava', 'Jivkova', 17, 10, [4, 3, 5, 6]));

        var animals = [];

        animals.push(new Animal("Dog", "mammal", 4));
        animals.push(new Animal("Centipede George", "insect", 100));
        animals.push(new Animal("Centipede WW2 survivor", "insect", 78));
        animals.push(new Animal("Human", "mammal", 2));
        animals.push(new Animal("Dolphin", "mammal", 0));
        animals.push(new Animal("Birdie", "bird", 2));
        animals.push(new Animal("Prairie dog", "mammal", 4));
        animals.push(new Animal("Angry Bird", "bird", 0));
        animals.push(new Animal("Butterfly", "insect", 6));
        animals.push(new Animal("Teenage Mutant Ninja Bird", "bird", 4));

        var books = [];

        books.push(new Book("The Godfather", "Criminal", "Mario Puzo"));
        books.push(new Book("Lord Of The Rings", "Fantasy", "J. R. R. Tolkien"));
        books.push(new Book("Unfinished Tales and The History of Middle-earth", "Fantasy", "J. R. R. Tolkien"));
        books.push(new Book("Hobbit", "Fantasy", "J. R. R. Tolkien"));
        books.push(new Book("The Last Don", "Criminal", "Mario Puzo"));
        books.push(new Book("All Quiet on the Western Front", "Novel", "Erich Maria Remarque"));

        //01. Write a method that from a given array of students finds all students
        //whose first name is before its last name alphabetically. Print the students
        //in descending order by full name. Use Underscore.js

        var studentsWithFirstNameBeforeLastName = underscoreTasks.getStudentsWithFirstNameBeforeLastName(students);
        console.log('--Students whose first name is before their last name sorted in descending order--');
        console.log(studentsWithFirstNameBeforeLastName);

        //02. Write function that finds the first name and last name of all students
        //with age between 18 and 24. Use Underscore.js

        var studentsBetween18And24YearsOld = underscoreTasks.getStudentsBetween18And24YearsOld(students);
        console.log('--First and last name of students with age between 18 and 24--');
        console.log(studentsBetween18And24YearsOld);

        //03. Write a function that by a given array of students finds the student with highest marks

        var studentWithHighestMarks = underscoreTasks.getStudentWithHighestMarks(students);
        console.log('--Student with highest mark--');
        console.log(studentWithHighestMarks);

        //04. Write a function that by a given array of animals, groups them by species and sorts them by number of legs

        var animalsGroupedBySpeciesAndSortedByLegs = underscoreTasks.getGroupedAndSortedAnimals(animals);
        console.log('--Animals grouped by species and sorted by number of legs--');
        console.log(animalsGroupedBySpeciesAndSortedByLegs);

        //05. By a given array of animals, find the total number of legs

        var totalNumberOfLegs = underscoreTasks.getTotalNumberOfLegs(animals);
        console.log('--Total number of animals legs--');
        console.log(totalNumberOfLegs);

        //06. By a given collection of books, find the most popular author (the author with the highest number of books)

        var mostPopularAuthor = underscoreTasks.getMostPopularAuthor(books);
        console.log('--Most popular author (the author with the highest number of books)--');
        console.log(mostPopularAuthor);

        //07. By an array of people find the most common first and last name. Use underscore.

        var mostCommonNames = underscoreTasks.getmostCommonFirstAndLastName(students);
        console.log('--Most common first name of all the students--');
        console.log(mostCommonNames.mostCommonFirstName);
        console.log('--Most common last name of all the students--');
        console.log(mostCommonNames.mostCommonLastName);
    });
}());