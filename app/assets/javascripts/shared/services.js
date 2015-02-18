/* global angular, noty */

var app = angular.module('effects.shared.services', ['ngResource']);


app.factory('Video', function($resource){
  var Video = $resource('/api/video/:id', {id: '@id'});
  var videos = Video.query();

  Video = angular.extend(Video.prototype, {
    resolve: function(){
      return videos.$promise;
    },
    getAll: function(){
      return videos;
    }
  });

  return Video;
});

app.factory('Taxonomy', function($resource){
  var Taxonomy = $resource('/api/taxonomy/:id', {id: '@id'});
  var taxonomies = Taxonomy.query();

  Taxonomy = angular.extend(Taxonomy.prototype, {
    resolve: function(){
      return taxonomies.$promise;
    },
    findAllByType: function(taxonomy_type){
      return taxonomies.filter(function(tax){
        return (tax.taxonomy_type === taxonomy_type);
      });      
    },
    // delete: function(id){
    //   var taxonomies = [];
    //   return taxonomies.then(function(taxs){
    //     taxonomies = taxs;
    //     return Taxonomy.findById_(id);
    //   }).then(function(tax){
    //     console.log(taxonomies);
    //     taxonomies.splice(taxonomies.indexOf(tax), 1);
    //     console.log(taxonomies);
    //   });
    // },
    //protected methods 
    _findById: function(id){
      return taxonomies.filter(function(tax){
        return tax.id === id;
      })[0];
    }
  });

  return Taxonomy;
});

app.factory('Category', function(Taxonomy){  
  var categories = Taxonomy.findAllByType('category');
  var Category = angular.extend({}, Taxonomy, {
    findBySlug: function(slug){
      return categories.filter(function(cat){
        return (cat.slug === slug);
      })[0];    
    },
    getAll: function(){
      return categories;
    }
  });
  return Category;
});


app.factory('Tag', function(Taxonomy){  
  var tags = Taxonomy.findAllByType('tag');
  var Tag = angular.extend({}, Taxonomy, {
    findBySlug: function(slug){
      return tags.filter(function(tag){
        return (tag.slug === slug);
      })[0];    
    },
    getAll: function(){
      return tags;
    }
  });
  return Tag;
});