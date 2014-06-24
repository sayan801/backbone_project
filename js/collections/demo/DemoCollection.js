define([
  'underscore',
  'backbone',
  'models/demo/DemoModel'
], function(_, Backbone, DemoModel){

  var DemoCollection = Backbone.Collection.extend({
      
      model: DemoModel,
      
      initialize : function(models, options) {},
      
       url : function() {
           //return 'http://festsocially.com/github/code/index.php?/patient_rest/items';
           return 'http://localhost/git_souman/webservice/code/index.php?/patient_rest/items';
       },
      //url:'http://festsocially.com/github/code/index.php?/patient_rest/items',
      parse:function(data){
          console.log(data);
          return data;
      }
       
  });

  return DemoCollection;

});
//alert('this is collection');