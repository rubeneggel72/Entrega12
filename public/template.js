$(function () {
  var arrayProducts=[]
  var socket = io.connect('http://localhost:8080', { 'forceNew': true });
    
  socket.on('arrayProducts', function(arrayProducts) {
   console.log(arrayProducts);
   var theTemplateScript = $("#products-template").html();
    var theTemplate = Handlebars.compile(theTemplateScript);
 
    // Grab the template script
    var theTemplateScript = $("#products-template").html();
  
    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);



    products={"products":arrayProducts}
    // Pass our data to the template
    var theCompiledHtml = theTemplate(products)
  
    // Add the compiled html to the page
    $('.content-placeholder').html(theCompiledHtml);
  });
});