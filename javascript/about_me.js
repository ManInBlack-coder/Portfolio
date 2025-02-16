/* function toggleText() {
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

 */




// About me lehtede järjehoidja 


function toggleText() {
    const mainText = document.getElementById("mainText");
    const altText = document.getElementById("altText");
    const dots = document.querySelectorAll(".dot");

    if (mainText.style.display !== "none") {
        mainText.style.display = "none";
        altText.style.display = "block";
        dots[0].classList.remove("active");
        dots[1].classList.add("active");
    } else {
        mainText.style.display = "block";
        altText.style.display = "none";
        dots[1].classList.remove("active");
        dots[0].classList.add("active");
    }
}

// Funktsioon täpi klikkimiseks
function showText(index) {
    const mainText = document.getElementById("mainText");
    const altText = document.getElementById("altText");
    const dots = document.querySelectorAll(".dot");

    if (index === 0) {
        mainText.style.display = "block";
        altText.style.display = "none";
        dots[0].classList.add("active");
        dots[1].classList.remove("active");
    } else {
        mainText.style.display = "none";
        altText.style.display = "block";
        dots[1].classList.add("active");
        dots[0].classList.remove("active");
    }
}
