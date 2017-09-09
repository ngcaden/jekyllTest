angular.module('committee',[])
  .controller('MainCtrl', [function() {
      var self = this;
      self.members = [
          {position: 'President', name: 'Thomas Woolley'},
          {position: 'Vice President', name: 'Hunain Nadeem'},
          {position: 'Events Officer', name: 'William Richards'},
          {position: 'Webmaster', name: 'Quang Nguyen', picture: '{{ "/images/committee/webmaster.jpg" }}',
          {position: 'Publicity Officer', name: 'Timothy Marley'},
          {position: 'Social Secretary', name: 'Joseff Davies'},
          {position: 'Department Representative', name: 'Michaela Flegrova', picture: '{{ "/images/committee/dep-rep.jpg" }}',
          {position: 'PG Department Representative', name: 'Lloyd James'},
          {position: 'Careers and Sponsorship Officer', name: 'Nicholas Lee'},
          {position: 'Education and Lecturers Officer', name: 'Jemima Graham'},
      ];
  }]);