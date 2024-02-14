function setCookie(name, value, expiration) {
    var date = new Date();
    date.setTime(date.getTime() + (expiration * 1000));
    var expires = "; expires=" + date.toGMTString();
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Call the function to set the cookie
setCookie("MyCookie", "cookieValue", 3600);
