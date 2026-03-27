function updateView() {
	let html = "INVALID PAGE";
	if (model.app.currentPage === "home") html = homePage();
	else if (model.app.currentPage === "newItem") html = newItemPage();
	else if (model.app.currentPage === "viewItem") html = viewItemPage();
	else console.error("Invalid page name");
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
		<div class="search-bar-container">
			<input class="search-bar" placeholder="Søk etter navn eller #tags">
			<img src="./public/search-icon.svg" />
		</div>
	`;
}

function itemGrid() {
	let html = /* html */ `<ul class="item-grid">`;

	for (let i = 0; i < model.data.items.length; i++) {
		html += itemEl(i, model.data.items[i]);
	}

	html += /* html */ `</ul>`;
	return html;
}

function itemEl(i, item) {
	return /* html */ `
		<div 
			class="item" 
			onclick="changePage('viewItem',${i})">
			<img src="${item.imageUrl}" alt="${item.name}" />
			<h4>${item.name}</h4>
		</div>
	`;
}

function addItemBtn() {
	return /* html */ `
		<button 
			class="add-item-btn" 
			onclick="changePage('newItem')">
			<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					stroke-linecap="round"
					stroke-width="1.5"
					viewBox="0 0 24 24">
					<line
						x1="12"
						y1="4"
						x2="12"
						y2="20" />
					<line
						x1="4"
						y1="12"
						x2="20"
						y2="12" />
				</svg>
		</button>
	`;
}
//#endregion

//#region NEWITEM PAGE
function newItemPage() {
	if (model.app.currentItemIndex !== null) {
		const item = model.data.items[model.app.currentItemIndex];
		return /* html */ `
			<div class="new-item-page">
				${showInput("Navn", "newItem", "name", item.name)}
				${showInput("Beskrivelse", "newItem", "description", item.description)}
				${showInput("Tags", "newItem", "tags", item.tags)}
				${showInput("Sted", "newItem", "location", item.location)}
				${showInput("Notater", "newItem", "notes", item.notes)}
				${imageUpload()}
				${actionButtons()}
			</div>
		`;
	}

	return /* html */ `
		<div class="new-item-page">
			${showInput("Navn", "newItem", "name")}
			${showInput("Beskrivelse", "newItem", "description")}
			${showInput("Tags", "newItem", "tags")}
			${showInput("Sted", "newItem", "location")}
			${showInput("Notater", "newItem", "notes")}
			${imageUpload()}
			${actionButtons()}
		</div>
	`;
}

function showInput(label, page, inputName, value = null) {
	return /* html */ `
		<input 
			class="input-field"
			type="text" 
			placeholder="${label}" 
			oninput="model.inputs[${page}][${inputName}] = this.value"
			value="${value ? value : ""}"/>
	`;
}

function imageUpload() {
	return /*HTML*/ `
	<div class="image-upload" onclick="console.log('test')">
		<img src="./public/upload-icon.svg"/> 
		<span>Last opp bilde</span>
	</div>
	`;
}

function actionButtons() {
	return /*HTML*/ `
		<div class="action-buttons">
			<button
				class="cancel"
				onclick="changePage('home')">
				Avbryt
			</button>
			<button
				class="save"
				onclick="saveItem()">
				Lagre
			</button>
		</div>`;
}

//#endregion

//#region VIEWITEM PAGE
function viewItemPage() {
	const item = model.data.items[model.app.currentItemIndex];
	return /* html */ `
	<div class="view-Item-Page">
		<h1>${item.name}</h1>
		<p>${item.location}</p>
		<img src="${item.imageUrl}">
		<p>${item.description}</p>
		<p>#</p>
		<div class="notes-container">
    	<input type="text" value="${item.notes}" id="notesInput">
   	 	<button onclick="saveNotes()">Lagre</button>
	</div>
	${viewItemPageBtns()}`;
}

function viewItemPageBtns() {
	return /*HTML*/ `
	<div class="view-item-page-btns">
		<button onclick="changePage('home')">Tilbake</button>
		<button onclick="changePage('newItem',${model.app.currentItemIndex})">Rediger</button>
		<button onclick="openModal(confirmDeleteModal)">Slett</button>
	</div>`;
}

function confirmDeleteModal() {
	return /* html */ `
		<div class="delete-window">
			<h4>Er du sikker på at du vil slette? Dette kan ikke gjøres om</h4>
			<div>
				<button onclick="closeModal()">Avbryt</button>
				<button onclick="deleteItem()">Slett</button>
			</div>
		</div>
	`;
}
//#endregion
