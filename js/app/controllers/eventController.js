// Resizing Event Column
function equalHeight() {
    var welcomeColumn = document.getElementById("welcome-column");
    var eventColumn = document.getElementById("event-column");
    eventColumn.style.height = welcomeColumn.offsetHeight + "px";
};

$(document).ready(equalHeight());
var resizeTimer;
$(window).resize(function() {
    if (resizeTimer) {
        clearTimeout(resizeTimer);   // clear any previous pending timer
    }
     // set new timer
    resizeTimer = setTimeout(function() {
        resizeTimer = null;
        equalHeight();
    }, 1);  
});


// Angular Logic
angular.module('eventApp', [])
    .controller('ListCtrl', ['$http', function($http) {
        var self = this;

        self.events = [
            {id:'1', title: "Fresher's Fair 2017", date: '2017-10-03', start: '09:00', end: '15:00',
                location: "Queen's Lawn",
                body: "Opportunity to check out all clubs and societies at Imperial College.",
                category: 'Social'
            }
        ];

        self.getEventClass = function(item) {
            if(item.category === 'Careers') {
                return 'panel-success';
            };
            if(item.category === 'Social') {
                return 'panel-info';
            };
            if(item.category === 'Research') {
                return 'panel-danger';
            };
            if(item.category === 'Lab Tour') {
                return 'panel-warning';
            };
        };
    }]);

