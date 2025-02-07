function toggleText() {
    const mainText = document.getElementById("mainText");
    const altText = document.getElementById("altText")

    if (mainText.style.display === "none") {
        mainText.style.display = "block";
        altText.style.display = "none";
    } else {
        mainText.style.display = "none";
        altText.style.display = "block";
    }
}

