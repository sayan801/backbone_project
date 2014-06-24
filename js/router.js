// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'session',
  'views/login/login',
  'views/register/NativeRegister',
  'views/UserInfoView/UserInfoView',
  'views/getUserEmail/getUserEmailView',
  'views/openid/openid',
  'views/register/openIdRegister',
  'views/providersearch/providersearch',
  'views/providersearch/providerSearchByName',
  'views/providersearch/providerserbyspl',
], function($, _, Backbone,session,LoginView,NativeRegisterView,UserInfoView,GetUseremaillistview,googleOpenId,OpenidRegisterView,providerSearchView,ProviderSearchByName,ProviderSearchBysplView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'ProviderSearch':'Providerfinder',
      'ProviderSearch/:DocName':'SearchDocName',
      'ProviderSearch/:Docspl':'SearchDocspl',
      // Default
      '*actions': 'defaultAction'
    }
  });
 
        //loginView.render();
        
  var initialize = function(){

    var app_router = new AppRouter;
  
    app_router.on('route:Providerfinder', function () {
    
        // Like above, call render but know that this view has nested sub views which 
        // handle loading and displaying data from the GitHub API 
        console.log("providerfinder router");
        var providersearch = new providerSearchView();
        providersearch.render();
    });
    
    app_router.on('route:SearchDocName', function (DocName) {
    
        // Like above, call render but know that this view has nested sub views which 
        // handle loading and displaying data from the GitHub API 
        console.log("Search By Doc name");
        $("#ser_name").show();
        var providersearchbyname = new ProviderSearchByName();
        providersearchbyname.render();
       
    });
    
      app_router.on('route:SearchDocspl', function (Docspl) {
    
        // Like above, call render but know that this view has nested sub views which 
        // handle loading and displaying data from the GitHub API 
        console.log("Search By Doc spl");
        //$("#ser_name").show();
        var providersearchByspl = new ProviderSearchBysplView();
        providersearchByspl.render();
       
    });

    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
        var userinfo = new UserInfoView();
         var loginView = new LoginView();
         var nativeregisterview = new NativeRegisterView ();
         var userinfo = new UserInfoView(); 
         var googleOPenid = new googleOpenId();
         var openidRegisterView = new OpenidRegisterView();
         nativeregisterview.render();
       //var getuseremail = new GetUseremaillistview();
       
    });

 
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
