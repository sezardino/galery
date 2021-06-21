class Gallery {
    constructor({ wrapperSelector, itemSelector, itemActiveClass }) {
        this.wrapper = document.querySelector(wrapperSelector);
        this.items = this.wrapper.querySelectorAll(itemSelector);
        this.itemActiveClass = itemActiveClass;

        this.init();
    }

    deleteActiveClass() {
        this.items.forEach((item) =>
            item.classList.remove(this.itemActiveClass)
        );
    }

    addListener() {
        this.items.forEach((item) => {
            item.addEventListener("click", (evt) => {
                console.log(item);
                evt.preventDefault();
                this.deleteActiveClass();
                item.classList.add(this.itemActiveClass);
            });
        });
    }

    init() {
        this.addListener();
    }
}

new Gallery({
    wrapperSelector: ".list",
    itemSelector: ".list__item",
    itemActiveClass: "list__item--active",
});
