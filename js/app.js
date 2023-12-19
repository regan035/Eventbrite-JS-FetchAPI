const eventBrite = new EventBrite();
const ui = new UI();

const searchEvent = (e) => {
  e.preventDefault();
  const eventName = document.getElementById("event-name").value;
  const category = document.getElementById("category").value;
  console.log(eventName, category);
  if (eventName !== "") {
  } else {
    ui.printMessage("Add an Event or City");
  }
};

//listeners
document.getElementById("submitBtn").addEventListener("click", searchEvent);
