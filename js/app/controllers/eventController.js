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
            },
            {id:'2', title: "Trasition Session 1 (Freshers)", date: '2017-10-04', start: '11:00', end: '12:00',
                location: "TBD",
                body: "Come and ask the PhySoc committee questions about living in London and being at Imperial.",
                category: 'Social'},
            {id:'3', title: "Trasition Session 2 / Meet PhySoc!!! (Freshers)", date: '2017-10-05', start: '14:00', end: '16:00',
                location: "TBD",
                body: "Get advice on how to balance studying and life. Get to know other members of PhySoc. Ask us a question, get free pizza!",
                category: 'Social'},
            {id:'4', title: "RCSU Mum's and Dad's Pub Crawl", date: '2017-10-05', start: '19:00', end: '24:00',
                location: "Meet at the Union",
                body: "Meet up with your family, socialise with students from other courses and have a beer! (Or whatever else you drink!)",
                category: 'Social'},
            {id:'5', title: "RCSU Quad Union Carnival", date: '2017-10-10', start: '17:00', end: '24:00',
                location: "Union",
                body: "All the constituent unions go to the Student Union for a really fun night!",
                category: 'Social'},
            {id:'6', title: "Research Frontiers: Dr John Hassard from HEP", date: '2017-10-12', start: '17:00', end: '18:00',
                location: "Blackett LT1",
                body: "More information to follow",
                category: 'Research'},
            {id:'7', title: "RCSU Autumn Ball", date: '2017-10-10', start: '21:00', end: '24:00',
                location: "Ruby Blue",
                body: "Dressing up and socialising with your friends. Is there anything more fun? (Online Ticket required)",
                category: 'Social'},
            {id:'8', title: "Welcome Curry", date: '2017-10-18', start: '17:00', end: '24:00',
                location: "Aladin Brick Lane",
                body: "Did somebody say Brick Lane? Yes, that's right. PhySoc are having a curry night on the road made famous for having curry houses! (Online Ticket required. £10 per person.)",
                category: 'Social'}
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

