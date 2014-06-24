define([
  'jquery',
  'underscore',
  'backbone',
  'views/demo/DemoListView',
  'collections/demo/DemoCollection',
  'models/demo/DemoModel',
  'text!templates/demo/DemoTemplate.html'
  //'views/contributors/ContributorsListView',
  //'text!templates/contributors/contributorsTemplate.html'
], function($,_,Backbone,DemoListView,DemoModel,DemoCollection){

  var DemoView = Backbone.View.extend({
    
    el:$("#page"),
    
     initialize:function(){
         //console.log("View initilized");
         this.todos = new DemoCollection();
         this.todos = new DemoModel();
         //console.log(this.todos);
         this.todos.bind('all',this.render,this);
         this.todos.fetch();
         //this.render();
     },
     
     render:function(){
         //console.log("View rendering");
         //var contributorModel = new ContributorModel({content:"new model"});
         //var todoview = new TodoView({model:contributorModel});
         //this.$el.html("Data has fetched");
         //$("#placeholder").html("View has loaded")
          //var elem = this.$el;
        // console.log("Data has fetched");
        $('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
         this.todos.each(function(model){
            //console.log(model.get("firstName"));
            var demoListView = new DemoListView({model:model});
            //alert(todoView);
            //alert(demoListView);
            //console.log(demoListView);
           // elem.append(demoListView.$el);
         });
     }

  });
  

  return DemoView;
});
//alert('this model');
