function updateView() {
	let html = "INVALID PAGE";
	if (model.app.currentPage === "home") html = homePage();
	else if (model.app.currentPage === "newItem") html = newItemPage();
	else if (model.app.currentPage === "viewItem") html = viewItemPage();
	model.app.element.innerHTML = html;
}

//#region HOMEPAGE
function homePage() {
	return /* html */ `
		<div class="home-page">
			<div class="top-bar">
				${searchBar()}
				${addItemBtn()}
			</div>
			${itemGrid()}
		</div>
	`;
}

function searchBar() {
	return /* html */ `
		<input class="search-bar" placeholder="Søk etter navn eller #tags">
	`;
}

function itemGrid() {
	let html = /* html */ `<ul class="item-grid">`;

	for (let i = 0; i < model.data.items.length; i++) {
		html += itemEl(model.data.items[i]);
	}

	html += /* html */ `</ul>`;
	return html;
}

function itemEl(item) {
	return /* html */ `
		<div class="item">
			<img src="${item.imageUrl}" alt="${item.name}" />
			<h4>${item.name}</h4>
		</div>
	`;
}

function addItemBtn() {
	return /* html */ `
		<button class="add-item-btn">+</button>
	`;
}
//#endregion

//#region NEWITEM PAGE
function newItemPage() {
	return /* html */ `
		
	`;
}
//#endregion

//#region VIEWITEM PAGE
function viewItemPage() {
	return /* html */ `
		
	`;
}
//#endregion
