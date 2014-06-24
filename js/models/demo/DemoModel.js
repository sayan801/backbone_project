define([
  'underscore',
  'backbone'
  //'collections/demo/DemoCollection'
], function(_, Backbone) {

  var DemoModel = Backbone.Model.extend({
    
    //urlRoot:'http://localhost:8383/project/json/sample.json',
    //urlRoot:'http://festsocially.com/github/code/index.php?/patient_rest/items"',
    defaults:{
            content:""
    },
    initialize:function(){
        //var contributorsCollection = new ContributorsCollection;
        //console.log("initilize this model");
    }
  });

  return DemoModel;
  
});
//alert('this model');