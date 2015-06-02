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


    $(xml).find('democrate').each(function(){
               //console.log("once for every person");
               var $democrate = $(this);
               var name = $democrate.attr("name");
               candidates.push($democrate.attr("name"));
               var bio = $democrate.find('bio').text();
               bioArray.push($democrate.find('bio').text());
               var image = $democrate.find('image').text();
               console.log(name);

               var candidateHTML ='';
               candidateHTML += '<img class="image" alt="" src="' + image + '" />';
               candidateHTML += '<h1 class="name">' + name + '</h1>';
               candidateHTML += '<p class="bio">' + bio + '</p>';

               $(".democrate").append($(candidateHTML));

             });

    $(xml).find('expectedDems').each(function(){
                var $expectedDems = $(this);
                var name = $expectedDems.attr("name");
                candidates.push($expectedDems.attr("name"));
                var bio = $expectedDems.find('bio').text();
                bioArray.push($expectedDems.find('bio').text());
                var image = $expectedDems.find('image').text();
                console.log(name);

                var candidateHTML ='';
                candidateHTML += '<img class="image" alt="" src="' + image + '" />';
                candidateHTML += '<h1 class="name">' + name + '</h1>';
                candidateHTML += '<p class="bio">' + bio + '</p>';

                $(".expectedDems").append($(candidateHTML));

            });

            $(xml).find('republican').each(function(){
                        var $republican = $(this);
                        var name = $republican.attr("name");
                        candidates.push($republican.attr("name"));
                        var bio = $republican.find('bio').text();
                        bioArray.push($republican.find('bio').text());
                        var image = $republican.find('image').text();
                        console.log(name);

                        var candidateHTML ='';
                        candidateHTML += '<img class="image" alt="" src="' + image + '" />';
                        candidateHTML += '<h1 class="name">' + name + '</h1>';
                        candidateHTML += '<p class="bio">' + bio + '</p>';

                        $(".republican").append($(candidateHTML));

                    });

                    $(xml).find('expectedReps').each(function(){
                                var $expectedReps = $(this);
                                var name = $expectedReps.attr("name");
                                candidates.push($expectedReps.attr("name"));
                                var bio = $expectedReps.find('bio').text();
                                bioArray.push($expectedReps.find('bio').text());
                                var image = $expectedReps.find('image').text();
                                console.log(name);

                                var candidateHTML ='';
                                candidateHTML += '<img class="image" alt="" src="' + image + '" />';
                                candidateHTML += '<h1 class="name">' + name + '</h1>';
                                candidateHTML += '<p class="bio">' + bio + '</p>';

                                $(".expectedReps").append($(candidateHTML));

                            });










  };


});
