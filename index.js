let prompt_num = 0;

function nextPrompt() { // continually counts and checks how many "layers deep" the user is in the number of prompts presented to them by the mobile app (currently unfinished)
    if (prompt_num == 0) {
        prompt_num += 1;
        document.getElementById("message_prompt").innerHTML = "Do you require navigation assistance?";
    }
    else if (prompt_num == 1) {
        prompt_num += 1;
        document.getElementById("message_prompt").innerHTML = "Do you require navigation assistance?";
    }
    return;
}

function exitPrompt() {
    document.getElementById("message_prompt").innerHTML = "Alright, goodbye!";
    document.getElementById("yes_btn").innerHTML = "";
    document.getElementById("no_btn").innerHTML = "";
    setInterval(3);
    // Auto-close the app
}

