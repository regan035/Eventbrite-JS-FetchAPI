class UI {
  constructor() {
    this.init();
  }
  init() {
    this.printCategories();
  }
  printCategories() {
    const category = eventBrite.getCategoriesAPI().then((categories) => {
      const categoriesList = categories.cagitories.categories;
      const categoriesOption = document.querySelector("#category");
      categoriesList.forEach((element) => {
        const option = document.createElement("option");
        option.value = element.id;
        option.appendChild(document.createTextNode(element.name));
        categoriesOption.appendChild(option);
      });
    }); //
  }

  printMessage(message, className = "alert alert-danger text-center") {
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    //insert into html
    const searchDiv = document.querySelector("#search-events");
    searchDiv.appendChild(div);
    //remove alert after 3000
    setTimeout(() => this.removeMessage(), 3000);
  }

  removeMessage() {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }
}
