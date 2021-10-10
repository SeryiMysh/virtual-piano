document.addEventListener("keydown", (e) => {
    if (e.code == "KeyA" ||
        e.code == "KeyS" ||
        e.code == "KeyD" ||
        e.code == "KeyF" ||
        e.code == "KeyG" ||
        e.code == "KeyH" ||
        e.code == "KeyJ" ||
        e.code == "KeyW" ||
        e.code == "KeyE" ||
        e.code == "KeyT" ||
        e.code == "KeyY" ||
        e.code == "KeyU"
    ) {
        let audio = document.createElement("audio");
        audio.src = "audio/" + e.key.toUpperCase() + ".mp3";
        audio.play();
    } else {
        console.log("Wrong key pressed.")
    }
}, false)