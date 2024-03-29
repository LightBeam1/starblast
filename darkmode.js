let darkmode = window.localStorage.getItem("darkmode");

if (darkmode && darkmode === "true") {
    document.getElementById("darkmodeOption").checked = true;
    window.darkmode = true;
    let divs = document.querySelectorAll("div, body");
    for (let div of divs) {
        div.classList.add("bg-dark");
        div.classList.add("text-light");
    }
    document.getElementById("customThemeModal").classList.remove("bg-dark");
    document.getElementById("customGameModal").classList.remove("bg-dark");
    let texts = document.querySelectorAll("b, i, a, button");
    for (let text of texts) {
        text.classList.add("text-light");
    }
    document.querySelectorAll(".rounded-pill").forEach((element) => {
        element.classList.add("bg-light");
        element.classList.remove("bg-dark");
        element.classList.add("text-dark");
        element.classList.remove("text-light");
    });
    document.querySelectorAll(".region-count").forEach((element) => {
        element.classList.add("bg-light");
        element.classList.remove("bg-dark");
        element.classList.add("text-dark");
        element.classList.remove("text-light");
    });
    document.getElementById("modalCloseButton").style.filter = "invert(1)";
    document.getElementById("themeModalCloseButton").style.filter = "invert(1)";
    document.querySelectorAll(".modal-content").forEach((el) => {el.style.borderColor = "white";});
    /*document.getElementById("criminalityPopover").classList.add("bg-light");
    document.getElementById("criminalityPopover").classList.remove("bg-dark");
    document.getElementById("criminalityPopover").classList.add("text-dark");
    document.getElementById("criminalityPopover").classList.remove("text-light");*/
    document.documentElement.style.setProperty('color-scheme', 'dark');
    document.documentElement.style.setProperty('-webkit-color-scheme', 'dark');
}

document.getElementById("darkmodeOption").addEventListener("change", () => {
    if (document.getElementById("darkmodeOption").checked) {
        window.localStorage.setItem("darkmode", "true");
        window.location.reload();
        return;
    }
    window.localStorage.setItem("darkmode", "false");
    window.location.reload();
})

}