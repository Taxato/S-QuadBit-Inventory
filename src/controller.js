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

function handleCancelEdit() {
	clearNewItemInputs();
	changePage("home");
}

function gotoEditPage() {
	const item = model.data.items[model.app.currentItemIndex];
	model.inputs.newItem = {
		name: item.name,
		description: item.description,
		location: item.location,
		tagsRaw: item.tags.join(", "),
		notes: item.notes,
		imageUrl: item.imageUrl,
	};

	changePage("newItem", model.app.currentItemIndex);
}

function handleUploadImage(value) {
	const url = URL.createObjectURL(value);
	model.inputs.newItem.imageUrl = url;
	updateView();
}

function deleteImage() {
	model.inputs.newItem.imageUrl = "";
	updateView();
}

function handleSaveItem() {
	model.data.items[model.app.currentItemIndex] = {
		name: model.inputs.newItem.name,
		description: model.inputs.newItem.description,
		location: model.inputs.newItem.location,
		tags: model.inputs.newItem.tagsRaw.split(/ ?, ?| /),
		notes: model.inputs.newItem.notes,
		imageUrl: model.inputs.newItem.imageUrl,
	};

	clearNewItemInputs();
	changePage("home");
}

function handleSaveNotes() {
	model.data.items[model.app.currentItemIndex].notes =
		model.inputs.viewItem.notes;
	changePage("home");
}

function deleteItem() {
	model.data.items.splice(model.app.currentItemIndex, 1);
	changePage("home");
}

function clearNewItemInputs() {
	model.inputs.newItem = {
		name: "",
		description: "",
		location: "",
		tagsRaw: "",
		tags: [],
		notes: "",
		imageUrl: "",
	};
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

/** @param {string} searchString */
function filterItems(searchString) {
	let filteredItems = [...model.data.items];
	const words = searchString
		.split(" ")
		.filter(w => w.length > 0)
		.map(w => w.toLowerCase());
	const tags = words.filter(w => w.startsWith("#")).map(w => w.slice(1));
	const locations = words.filter(w => w.startsWith("@")).map(w => w.slice(1));
	const remaindingWords = words.filter(
		w => !(w.startsWith("#") || w.startsWith("@")),
	);

	filteredItems = filteredItems.filter(item =>
		words.every(
			w =>
				item.name.toLowerCase().includes(w) ||
				item.location.toLowerCase().includes(w) ||
				item.tags.join(" ").toLowerCase().includes(w),
		),
	);

	/* 	if (tags.length > 0)
		filteredItems = filteredItems.filter(item =>
			tags.every(
				tag =>
					item.tags.find(t => t.toLowerCase().includes(tag)) !==
					undefined,
			),
		);

	if (locations.length > 0)
		filteredItems = filteredItems.filter(item =>
			locations.some(loc => item.location.toLowerCase().includes(loc)),
		);

	if (remaindingWords.length > 0)
		filteredItems = filteredItems.filter(item => {
			const itemNameWords = item.name.split(" ");
			return remaindingWords.every(
				w =>
					itemNameWords.find(inw => inw.toLowerCase().includes(w)) !==
					undefined,
			);
		}); */

	return filteredItems;
}
