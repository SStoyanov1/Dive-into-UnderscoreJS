(function () {
    define(['libs/underscore'], function () {

        var underscoreTasks = (function () {
            var getStudentsWithFirstNameBeforeLastName = function (students) {
                var result =
                 _.chain(students)
                  .filter(function (student) {
                      return student._lname > student._fname;
                  })
                  .sortBy('_fullName')
                  .reverse()
                  .value();

                return result;
            };

            var getStudentsBetween18And24YearsOld = function (students) {
                var result =
                    _.map(_.filter(students, function (student) {
                        return student._age > 17 && student._age < 25;
                    }), function (student) {
                        return {
                            fname: student._fname,
                            lname: student._lname
                        }
                    });

                return result;
            }

            var getStudentWithHighestMarks = function (students) {
                var result =
                    _.max(students, function (student) {
                        var sumOfMarks = 0;

                        _.each(student._marks, function (mark) {
                            sumOfMarks += mark;
                        });

                        return sumOfMarks / student._marks.length;
                    });

                return result;
            }

            var getGroupedAndSortedAnimals = function (animals) {
                var result =
                    _.chain(animals)
                     .groupBy('_species')
                     .map(function (group) {
                         return _.sortBy(group, '_legsCount');
                     })
                     .value();

                return result;
            };

            var getTotalNumberOfLegs = function (animals) {
                var result = 0;
                _.each(animals, function (animal) {
                    result += animal._legsCount;
                });

                return result;
            };

            var getMostPopularAuthor = function (books) {
                var result =
                    _.chain(books)
                     .groupBy('_author')
                     .max(function (author) {
                         return author.length;
                     })
                     .value()[0]._author;

                return result;
            };

            var getmostCommonFirstAndLastName = function (students) {
                var fname =
                    _.chain(students)
                     .groupBy('_fname')
                     .max(function (student) {
                         return student.length;
                     })
                     .value()[0]._fname;

                var lname =
                    _.chain(students)
                     .groupBy('_lname')
                     .max(function (student) {
                         return student.length;
                     })
                     .value()[0]._lname;

                return {
                    mostCommonFirstName: fname,
                    mostCommonLastName: lname
                }
            };

            return {
                getStudentsWithFirstNameBeforeLastName: getStudentsWithFirstNameBeforeLastName,
                getStudentsBetween18And24YearsOld: getStudentsBetween18And24YearsOld,
                getStudentWithHighestMarks: getStudentWithHighestMarks,
                getGroupedAndSortedAnimals: getGroupedAndSortedAnimals,
                getTotalNumberOfLegs: getTotalNumberOfLegs,
                getMostPopularAuthor: getMostPopularAuthor,
                getmostCommonFirstAndLastName: getmostCommonFirstAndLastName
            };
        }());

        return underscoreTasks;
    });
}());