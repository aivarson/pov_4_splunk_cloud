require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/simplexml/ready!'
], function(_, $, mvc) {


    var inputCollectionTable = mvc.Components.get('inputCollectionTable');


    inputCollectionTable.on('click', function(e) {


       e.preventDefault();
       console.log('e: ', e);


    });


});