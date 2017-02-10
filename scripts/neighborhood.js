var neighborhoods = [];

function Neighborhood (opts) {
  for (key in opts) {
    this[key] = opts[key];
  }
};

Neighborhood.prototype.toHtml = function() {
 // TODO: Complete this using Handlebars!!!

 //Get the source for template from script tag in head of index.html
 var source = $('#neighborhoods-template').html();
 //Compile the source into template creation
 var template = Handlebars.compile(source);
//Pass data to template, in this case, 'this'
return template(this);

};

neighborhoodDataSet.forEach(function(neighborhoodObject) {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach(function(ourNewNeighborhoodObject){
  $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
});
