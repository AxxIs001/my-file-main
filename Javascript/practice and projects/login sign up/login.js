document.querySelectorAll('[data-togglebutton="password"]').forEach((item) => {
    item.addEventListener("click", (event) => {
        let inp = item.closest("[data-toggleblock]").querySelector("input");
        if (inp.type === "password") {
            inp.type = "text";
            item.closest("[data-toggleblock]").classList.add("active");
        } else {
            inp.type = "password";
            item.closest("[data-toggleblock]").classList.remove("active");
        }
    });
});