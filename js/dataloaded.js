console.log("dataload.js loaded");


var candidates = new Array();
var bioArray = new Array();


$(document).ready(function(){
  console.log("doc loaded");

  $.ajax({
               type: "GET",
               url: "data/pres.xml",
               dataType: "xml",
               success: function(xml){
                   console.log("success");
                   loadData(xml);
               },
               error: function(){
                   console.log("error loading");
               }

});

function loadData(xml){
    //parse the xml into variabls
    console.log("Success, loadData() called")


    $(xml).find('candidate').each(function(){
               //console.log("once for every person");
               var $candidate = $(this);
               var name = $candidate.attr("name");
               candidates.push($candidate.attr("name"));
               var bio = $candidate.find('bio').text();
               bioArray.push($candidate.find('bio').text());
               var image = $candidate.find('image').text();





               var candidateHTML ='';
               candidateHTML += '<h1>' + name + '</h1>';
               candidateHTML += '<img class="image" alt="" src="' + image + '" />';
               candidateHTML += '<p>' + bio + '</p>';



               $("#candidate").append($(candidateHTML));

             });








  };


});
