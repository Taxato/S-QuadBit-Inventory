function updateView() {
	const filteredItems = filterItems(model.inputs.home.searchString);

	// Keep search bar active
	const searchInput = document.getElementById("search-input");
	const cursor = searchInput?.selectionStart;
	const hadFocus = document.activeElement === searchInput;

	let html = "INVALID PAGE";
	if (model.app.currentPage === "home") html = homePage(filteredItems);
	else if (model.app.currentPage === "newItem") html = newItemPage();
	else if (model.app.currentPage === "viewItem") html = viewItemPage();
	else console.error("Invalid page name");
	model.app.element.innerHTML = html;

	// Re-Set focus
	if (hadFocus) {
		const newInput = document.getElementById("search-input");
		newInput.focus();
		newInput.setSelectionRange(cursor, cursor);
	}
}

//#region HOMEPAGE
function homePage(items) {
	return /* html */ `
		<div class="home-page">
			<div class="top-bar">
				${searchBar()}
				${addItemBtn()}
			</div>
			${itemGrid(items)}
		</div>
	`;
}

function searchBar() {
	return /* html */ `
		<div class="search-bar-container">
			<input 
				id="search-input" 
				class="search-bar" 
				placeholder="Søk etter navn, #tags og @steder"
				value="${model.inputs.home.searchString}"
				oninput="model.inputs.home.searchString=this.value; updateView();">
			<img src="./public/search-icon.svg" />
		</div>
	`;
}

function itemGrid(items) {
	return /* html */ `
		<ul class="item-grid">
			${items.map(item => itemEl(model.data.items.indexOf(item), item)).join("")}
		</ul>
	`;
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
			onclick="changePage('newItem', model.data.items.length)">
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
	return /* html */ `
		<div class="new-item-page">
			${showInput("Navn", "newItem", "name", model.inputs.newItem.name)}
			${showInput("Beskrivelse", "newItem", "description", model.inputs.newItem.description)}
			${showInput("Tags", "newItem", "tagsRaw", model.inputs.newItem.tagsRaw)}
			${showInput("Sted", "newItem", "location", model.inputs.newItem.location)}
			${showInput("Notater", "newItem", "notes", model.inputs.newItem.notes)}
			${imageUpload()}
			${showDeleteImage()}
			${actionButtons()}
		</div>
	`;
}

function showInput(placeholder, page, inputName, value = null) {
	return /* html */ `
		<input 
			class="input-field"
			type="text" 
			placeholder="${placeholder}" 
			oninput="model.inputs['${page}']['${inputName}'] = this.value"
			value="${value ? value : ""}"/>
	`;
}

function imageUpload() {
	return /* html */ `
		<div class="image-upload-container">
			<input type="file" id="actual-btn" hidden onchange="handleUploadImage(this.files[0])"/>
			<label for="actual-btn" class="image-upload" >
				<img src="./public/upload-icon.svg"/> 
				<span>Last opp bilde</span>
			</label>
			<img src="${model.inputs.newItem.imageUrl}" style="display: block">
		</div>
	`;
}

function showDeleteImage() {
	return /* html */ `
		<button onclick="deleteImage()">Slett bilde</button>
	`;
}

function actionButtons() {
	return /* html */ `
		<div class="action-buttons">
			<button
				class="cancel"
				onclick="handleCancelEdit()">
				Avbryt
			</button>
			<button
				class="save"
				onclick="handleSaveItem()">
				Lagre
			</button>
		</div>
	`;
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
			<p>${item.tags.join(" | ")}</p>
			<div class="notes-container">
			${showInput("Notater", "viewItem", "notes", item.notes)}
			<button onclick="handleSaveNotes()">Lagre</button>
		</div>
		${viewItemPageBtns()}
	`;
}

function viewItemPageBtns() {
	return /* html */ `
		<div class="view-item-page-btns">
			<button onclick="changePage('home')">Tilbake</button>
			<button onclick="gotoEditPage()">Rediger</button>
			<button onclick="openModal(confirmDeleteModal)">Slett</button>
		</div>
	`;
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
