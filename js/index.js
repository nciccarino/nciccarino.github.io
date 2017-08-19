$(document).ready(function() {

	$(".bio-button").on("click", handleBio);
	$(".skills-button").on("click", handleSkills);
	$(".work-button").on("click", handleWork);

	function handleBio() {
		$(".bio").css("display", "block");
		$(".skills").css("display", "none");
		$(".work").css("display", "none");
	}

	function handleSkills() {
		$(".bio").css("display", "none");
		$(".skills").css("display", "block");
		$(".work").css("display", "none");
	}

	function handleWork() {
		$(".bio").css("display", "none");
		$(".skills").css("display", "none");
		$(".work").css("display", "block");
	}

})