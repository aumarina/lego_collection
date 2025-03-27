function copyLink() {
    navigator.clipboard.writeText("https://public--main--lego-collection--aumar.ixdcoder.com/");
    let shareText = document.querySelector('#shareText');
    shareText.style.display = "inline-block";

    setTimeout(() => {
        shareText.style.display = "none";
    }, 1000);

}