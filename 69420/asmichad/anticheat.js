document.addEventListener('keydown', function (event) {
    if (event.keyCode == 123) {
        alert('Oh you cheater, don\'t you dare bitch.');
        window.location.replace("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Stylized_uwu_emoticon.svg/1200px-Stylized_uwu_emoticon.svg.png");
        return false;
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 'I'.charCodeAt(0)) {
        alert("Nice try.");
        window.location.replace("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Stylized_uwu_emoticon.svg/1200px-Stylized_uwu_emoticon.svg.png");
        return false;
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 'C'.charCodeAt(0)) {
        alert("NAaaaaaaaahhhhhhhh jit goin crazy");
        window.location.replace("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Stylized_uwu_emoticon.svg/1200px-Stylized_uwu_emoticon.svg.png");
        return false;
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 'J'.charCodeAt(0)) {
        alert("nah bro, not today.");
        window.location.replace("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Stylized_uwu_emoticon.svg/1200px-Stylized_uwu_emoticon.svg.png");
        return false;
    }
    else if (event.ctrlKey && event.keyCode == 'U'.charCodeAt(0)) {
        alert("nah-ah-ah, say the magic word~");
        window.location.replace("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Stylized_uwu_emoticon.svg/1200px-Stylized_uwu_emoticon.svg.png");
        return false;
    }
});

document.addEventListener('contextmenu', event => event.preventDefault());
