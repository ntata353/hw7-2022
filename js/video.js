var vid = document.getElementById("player1")
vid.autoplay = false;
vid.loop = false;
const volumeSlider = document.getElementById("slider");
const volumeDisplay = document.getElementById("volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	vid.play();
	vid.volume = volumeSlider.value / 100;
	volumeDisplay.textContent = `${volumeSlider.value}%`;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	vid.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	vid.playbackRate -= 0.1;
	console.log(`New Speed is ${vid.playbackRate}`)
});

document.querySelector("#faster").addEventListener("click", function() {
	vid.playbackRate += 0.1;
	console.log(`New Speed is ${vid.playbackRate}`)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log(`Original Location ${vid.currentTime}`)
	vid.currentTime += 10;
	console.log(`New Location ${vid.currentTime}`);
})

vid.addEventListener('ended', function(){
	vid.currentTime = 0;
	vid.play();
	console.log(`Going back to beginning`);
	console.log(`New Location ${vid.currentTime}`);
})

const muteButton = document.getElementById("mute");

muteButton.addEventListener("click", function() {
	if (vid.muted) {
	  vid.muted = false;
	  muteButton.textContent = "Mute";
	} else {
	  vid.muted = true;
	  muteButton.textContent = "Unmute";
	}
})

volumeSlider.addEventListener("change", function() {
  vid.volume = volumeSlider.value / 100;
  volumeDisplay.textContent = `${volumeSlider.value}%`;
  console.log(vid.volume)
})

document.querySelector("#vintage").addEventListener("click", function() {
	vid.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() {
	vid.classList.remove("oldSchool");
})