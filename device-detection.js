const userAgent = navigator.userAgent.toLowerCase();

if (/iphone|ipad|ipod/.test(userAgent)) {
    document.documentElement.classList.add('iphone');
} else {
    document.documentElement.classList.add('computer');
}
