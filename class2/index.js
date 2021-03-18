class Button {
    constructor({ label, type,}) {
        const button = document.createElement("input")
        button.innerText = label
        this.label = label
        this.type = type
        this.button = button
    }
    insertTo(elOrSctr) {
        const parentElement =
            typeof elOrSctr === "string" ?
            document.querySelector(elOrSctr) /* selector */ :
            elOrSctr; /* element */
        parentElement.append(this.button);
    }
}
let new_button = new Button({
    label: "first",
    type: "nameClass"
})
new_button.insertTo(document.body);
new_button.button.addEventListener("click", function () {
    new_button.button.classList.toggle("a");
  });


  