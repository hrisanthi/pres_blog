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
               candidateHTML += '<li class="dems"><div class="mug"><img class="image" alt="" src="' + image + '" /></div>';
               candidateHTML += '<h3 class="dems">' + name + '</h3>';
               candidateHTML += '<p>' + bio + '</p></li>';

               $(".democrat").append($(candidateHTML));

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
                candidateHTML += '<li class="expectdems"><div class="mug"><img class="image" alt="" src="' + image + '" /></div>';
                candidateHTML += '<h3 class="dems">' + name + '</h3>';
                candidateHTML += '<p class="bio">' + bio + '</p></li>';

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
                        candidateHTML += '<li class="reps"><div class="mug"><img class="image" alt="" src="' + image + '" /></div>';
                        candidateHTML += '<h3 class="reps">' + name + '</h3>';
                        candidateHTML += '<p class="bio">' + bio + '</p></li>';

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
                                candidateHTML += '<li class="expectreps"><div class="mug"><img class="image" alt="" src="' + image + '" /></div>';
                                candidateHTML += '<h3 class="reps">' + name + '</h3>';
                                candidateHTML += '<p class="bio">' + bio + '</p></li>';

                                $(".expectedReps").append($(candidateHTML));

                            });










  };


});
