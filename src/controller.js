updateView();

/**
 * Switches to passed page
 * @param {"home" | "newItem" | "viewItem"} pageName
 * @param {number|null} itemIndex
 */
function changePage(pageName, itemIndex = null) {
	model.app.currentPage = pageName;
	model.app.currentItemIndex = itemIndex;
	updateView();
}

function saveItem() {}

function deleteItem() {
	model.data.items.splice(model.app.currentItemIndex, 1);
	changePage("home");
}

function openModal(modalFunction) {
	const modalEl = document.createElement("div");
	modalEl.id = "modal-wrapper";
	modalEl.innerHTML = modalFunction();
	model.app.element.append(modalEl);
}

function closeModal() {
	document.getElementById("modal-wrapper").remove();
}

/* const searchString = "#verktøy #ryobi drill";

const searchTerms = searchString.split(" ");

console.log(searchTerms);

let searchTags = searchTerms
	.filter(term => term.startsWith("#"))
	.map(tag => tag.slice(1));

searchTags = searchTerms
	.filter(function (term) {
		return term.startsWith("#");
	})
	.map(function (tag) {
		return tag.slice(1);
	});
console.log(searchTags);

const numbers = [1, 2, 3, 4];

// for (let i = 0; i < numbers.length; i++) {
// 	squaredNumbers.push(numbers[i] ** 2);
// }

// For each element in an array, call the callbackfunction on the element and create new array with the results
const squaredNumbers = numbers.map(number => number * number);

(Number, String, Boolean);
(Array, Object, Function);
(Set, Map); // Not needed almost at all

console.log(squaredNumbers);
 */
