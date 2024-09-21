function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.boxShadow = "0px 0px 16px 0px rgba(64, 83, 252, 0.24)"; // Adjusted for clarity
    } else {
        document.getElementById("navbar").style.boxShadow = "0px 0px 16px 0px #ffffff";
    }
}

// Add scroll event listener
window.onscroll = function () {
    scrollFunction();
};
