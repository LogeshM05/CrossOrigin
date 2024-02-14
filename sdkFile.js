

console.log("SDK File loaded");

// '_ga_GFFGBBR7C4=GS1.1.1707826027.1.1.1707826192.0.0.0; path=/; expires=Thu, 12 Feb 2026 12:10:24 GMT; domain=resulak.github.io; '



document.addEventListener("click", () => {
    document.cookie = 'TestKey=TestValue; path=/; expires=Thu, 12 Feb 2026 12:10:24 GMT; domain=github.io; SameSite=None; Secure'
    console.log("Cookie Set");
})
