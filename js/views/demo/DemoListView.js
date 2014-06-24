define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/demo/DemoTemplate.html'

], function($, _, Backbone,DemoTemplate){
   
var DemoListView = Backbone.View.extend({
    
    template:_.template(DemoTemplate),
    
    initialize:function(){
        
        //console.log("Todoview Initilize");
        this.render();
    },
    
    render:function(){
         
        //console.log("Todoview is rendering");
        //console.log("The view got a model with content "+this.options.model.get("content"));
        $("#page").append(this.template({model:this.options.model}));
        //console.log(this.options.model.get("firstName"));
        $("#loding").hide();
        
    }
    
});
    return DemoListView; 
});