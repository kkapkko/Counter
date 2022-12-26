let count = 0;
let addBtn = document.getElementById("add");
let deleteBtn = document.getElementById("delete");
let resetBtn = document.getElementById("reset");
let counter = document.querySelector(".counter");

addBtn.addEventListener("click", function () {
    counter.innerHTML = count += 1;
});

deleteBtn.addEventListener("click", function () {
    if (count == 0) {
        counter.innerHTML = count;
    } else {
        counter.innerHTML = count -= 1;
    }
});

resetBtn.addEventListener("click", function () {
    count = 0;
    counter.innerHTML = count;
});
