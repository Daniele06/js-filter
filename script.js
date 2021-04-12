// Event listeners

document.getElementById("showAll").addEventListener("click", showAll);
document.getElementById("showTrees").addEventListener("click", showTrees);
document.getElementById("showSoil").addEventListener("click", showSoil);
document.getElementById("showFertiliser").addEventListener("click", showFertiliser);
document.getElementById("showTools").addEventListener("click", showTools);
document.getElementById("search-field").addEventListener("input", search);
document.getElementById("search-button").addEventListener("click", search);

// Functions (Show/hide)

function showAll() {
    document.querySelectorAll(".trees, .soil, .fertiliser, .tools").forEach(el => {
        el.style.display = "inline-block";
    });
}

function showTrees() {
    document.querySelectorAll(".soil, .fertiliser, .tools").forEach(el => {
        el.style.display = "none";
    });
    document.querySelectorAll(".trees").forEach(el => {
        el.style.display = "inline-block";
    });
};

function showSoil() {
    document.querySelectorAll(".trees, .fertiliser, .tools").forEach(el => {
        el.style.display = "none";
    });
    document.querySelectorAll(".soil").forEach(el => {
        el.style.display = "inline-block";
    });
};

function showFertiliser() {
    document.querySelectorAll(".trees, .soil, .tools").forEach(el => {
        el.style.display = "none";
    });
    document.querySelectorAll(".fertiliser").forEach(el => {
        el.style.display = "inline-block";
    });
};

function showTools() {
    document.querySelectorAll(".trees, .soil, .fertiliser").forEach(el => {
        el.style.display = "none";
    });
    document.querySelectorAll(".tools").forEach(el => {
        el.style.display = "inline-block";
    });
};

// Search

function search() {
    let input = document.getElementById("search-field").value
    input = input.toLowerCase();
    let x = document.querySelectorAll(".trees, .soil, .fertiliser, .tools");

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "inline-block";
        }
    }
}