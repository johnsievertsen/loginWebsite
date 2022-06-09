function newPage() {
    setInterval(function () { window.open("https://johnsievertsen.github.io/loginWebsite/website", '_blank') }, 1500);
}
newPage();
function manualNewPage() {
    window.open("https://johnsievertsen.github.io/loginWebsite/website", '_blank')
}

window.addEventListener('click', 'keydown', manualNewPage);