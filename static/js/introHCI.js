'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Ask you own heart");
		$('.jumbotron p').toggleClass("active");
		//$('.jumbotron p').addClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);
}

function projectClick(e){
	// prevent the page from reloading
	console.log("Project clicked");
	e.preventDefault();
	
	// In an event handler, $(this) refers to 
	// the object that triggered the event
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);
	
	var containingProject = $(this).closest(".project");
	//appending content
	//containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
	
	var description = $(containingProject).find(".project-description");
	if (description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		$(containingProject).fadeOut();
		
		//$(containingProject).find('img').fadeOut("<div class='project-description'><p>Description of the project.</p></div>");
		description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	}
	
	//$(this).css("background-color", "#7fff00");
}


function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   console.log(projectID);
   console.log(newText);
   $(projectID + " .project-description").text(newText);
	console.log($(projectID + " .project-description"));
}