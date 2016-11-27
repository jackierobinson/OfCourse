var app = angular.module('ofCourse');

app.factory('scheduleCourse', function() {
    var schedule = [];

    return {
        getSchedule: function () {
            return schedule;
        },
        updateSchedule: function(updatedSchedule) {
            schedule = updatedSchedule;
        },

        addToSchedule: function (course) {
            schedule.push(course);
        }
    };
});