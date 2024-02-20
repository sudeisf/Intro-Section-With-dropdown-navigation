const dropButtonOne = document.getElementById("dropdown-b1");
const dropButtonTwo = document.getElementById("dropdown-b2");

const closeIcon = document.getElementById("close");
const closeIcon2 = document.getElementById("close2");

const dropContent = document.getElementById("drop-content");
const dropContent2 = document.getElementById("drop-content2");


dropButtonOne.addEventListener("click", function () {
    if (dropContent.style.display === "none" || dropContent.style.display === "") {
        dropContent.style.display = "flex";
        closeIcon.src = "/images/icon-arrow-up.svg";
    } else {
        dropContent.style.display = "none";
        closeIcon.src = "/images/icon-arrow-down.svg";
    }
});

dropButtonTwo.addEventListener("click", function () {
    if (dropContent2.style.display === "none" || dropContent2.style.display === "") {
        dropContent2.style.display = "flex";
        closeIcon2.src = "/images/icon-arrow-up.svg";
    } else {
        dropContent2.style.display = "none";
        closeIcon2.src = "/images/icon-arrow-down.svg";
    }
});
