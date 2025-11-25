console.log("🍋", "🫑", "🍞", "🥩", "🥛", "🥣", "🦞", "🥪");

const addBtn = document.querySelector("#add-btn");

const updateList = (event) => {
   const icon = event.target;
   icon.classList.toggle("bi-bag");
   icon.classList.toggle("bi-bag-check");
   icon.classList.toggle("in-cart");
}

const removeItem = (event) => {
const icon = event.target;
icon.parentElement.remove();
};

addBtn.addEventListener("click", () => {
    const itemInput = document.querySelector("#item");
    const emojiSelect = document.querySelector("#department");

    const item = itemInput.value.trim();
    const emoji = emojiSelect.value;
if(item){


    const itemDiv = buildItem(emoji, item);
   

    document.querySelector(".right").append(itemDiv);
}else {
    alert("please enter a name for the item.");
}

    itemInput.value = "";
    itemInput.focus();
    emojiSelect.value = "🥣";
});


function buildItem(emoji, item){
    const itemDiv = document.createElement("div");
    const emojiSpan = document.createElement("span");
    const itemSpan = document.createElement("span");
    const bagIcon = document.createElement("i");
    const trashIcon = document.createElement("i");

    itemDiv.className = "item";
    emojiSpan.className = "emoji";
    emojiSpan.innerText = emoji;
    itemSpan.className = "item-description";
    itemSpan.innerText = item;
    bagIcon.className = "bi bi-bag add-icon";
    trashIcon.className = "bi bi-trash delete-icon";

    itemDiv.append(emojiSpan, itemSpan, bagIcon, trashIcon);

    return itemDiv;
}