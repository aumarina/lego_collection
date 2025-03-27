function copyLink() {
    navigator.clipboard.writeText("https://aumarina.github.io/lego_collection/");
    let shareText = document.querySelector('#shareText');
    shareText.style.display = "inline-block";

    setTimeout(() => {
        shareText.style.display = "none";
    }, 1000);

}
