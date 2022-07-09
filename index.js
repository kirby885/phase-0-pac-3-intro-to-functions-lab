function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

let response

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return response = "I can\'t hear you!";
    } else if (string === string.toUpperCase()) {
       return response = "YES INDEED!";
    }
        else if (string = "Let's have dinner together!") {
        return response =  "I would love to!";
    }
}


console.log(response);

