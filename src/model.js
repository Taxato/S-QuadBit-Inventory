const EDIT_MODE = 0;
const CREATE_MODE = 1;

const model = {
	app: {
		element: document.getElementById("app"),
		currentPage: "home",
		pages: ["home", "newItem", "viewItem"],
		currentItemIndex: null,
		itemMode: null,
	},

	inputs: {
		home: {
			// Search
			searchString: "",
		},
		newItem: {
			// Create new / Edit existing item
			name: "",
			description: "",
			location: "",
			tagsRaw: "",
			tags: [],
			notes: "",
			imageUrl: "",
		},
		viewItem: {
			// Edit notes
			notes: "",
		},
	},

	data: {
		tags: [
			"verktøy",
			"batteri",
			"12v",
			"ryobi",
			"snekring",
			"håndverktøy",
			"18v",
			"Meec",
			"sag",
			"forbruksvare",
			"bøtte",
			"badeand",
			"leke",
			"badekar",
			"skru",
		],
		items: [
			{
				name: "Ryobi 12v Batteridrill",
				description:
					"The new RYOBI 12V Lithium-Ion Drill/Driver gives you optimal performance in a compact size. The reduced size and new ergonomic grip make it extremely easy to handle, and it's perfect for tight spaces. With a battery that is 33% lighter weight and 30% more compact, you will always have the power to complete your home improvement needs.",
				location: "Utebod",
				tags: ["verktøy", "batteri", "12v", "ryobi", "snekring"],
				notes: "Lånt ut til kenneth",
				imageUrl:
					"https://cdn.shopify.com/s/files/1/0651/3668/9323/files/e76252c6aabc47f29094f6a3f85d839c_2000x2000.jpg?v=1734043233&width=100&height=100&crop=center",
			},
			{
				name: "Hammer",
				description: "Vanlig hammer med trehåndtak",
				location: "Utebod",
				tags: ["verktøy", "håndverktøy", "snekring"],
				notes: "Krok på til å dra ut spiker",
				imageUrl:
					"https://www.estwing.com/wp-content/uploads/2022/03/prod_surestrike_nail_hammers_MRW16C_01_2000x2000-600x600.png.webp",
			},

			{
				name: "Bajonettsag 18 V",
				description:
					"The Meec Tools Multiseries 18V bayonet saw is a cordless reciprocating saw designed for versatile cutting tasks in home improvement, renovation, and light demolition work. It belongs to the Multiseries platform, meaning it uses the same 18V battery as other tools in the range.",
				location: "Utebod",
				tags: ["verktøy", "batteri", "18v", "Meec", "sag"],
				notes: "",
				imageUrl:
					"https://assets.cdn.jula.com/v2/preset:jpgoptimized/w:640/14335?lastmodified=20250522093028",
			},
			{
				name: "AAA Batterier",
				description: "",
				location: "Under trappa",
				tags: ["forbruksvare", "batteri"],
				notes: "25stk igjen",
				imageUrl:
					"https://cdn.handshake.fi/i/products/AAA_Battery_VARTA_Longlife_POWER_blister_4_pcs/thumbs/varta_longlife_power_aaa_1_normal.jpg",
			},
			{
				name: "AA Batterier",
				description: "",
				location: "Under trappa",
				tags: ["forbruksvare", "batteri"],
				notes: "54stk igjen",
				imageUrl:
					"https://cdn.handshake.fi/i/products/AA_Battery_VARTA_Longlife_POWER_blister_4_pcs/thumbs/varta_longlife_power_aa_1_normal.jpg",
			},

			{
				name: "Bøtte 15 L",
				description: "Bøtte",
				location: "Utebod",
				tags: ["verktøy", "bøtte"],
				notes: "holder 15Liter",
				imageUrl:
					"https://assets.cdn.jula.com/v2/preset:jpgoptimized/w:640/132318?lastmodified=20250516103538",
			},
			{
				name: "Badeand",
				description: "Quack quack!",
				location: "Innerst i skapet på badet",
				tags: ["badeand", "leke", "badekar"],
				notes: "Lånt ut til Ole",
				imageUrl:
					"https://www.klubben.no/thumbnails/li1607_1.1024.webp?v=638629399594800000",
			},

			{
				name: "Trappestige 12 trinn, H2800 mm",
				description:
					"Kraftig stige for profesjonell bruk med sikkerhetssperre, gulvbeskyttelse og støttebøyle med verktøyhylle",
				location: "Utebod",
				tags: ["verktøy"],
				notes: "Lånt ut til Tom",
				imageUrl:
					"https://static.cowab.com/cdn-cgi/image/width=590,format=auto/globalassets/155446.jpg?ref=A15493457A",
			},

			{
				name: "Verktøyvogn 259 deler 76x101x46 cm",
				description:
					"Verktøyvognen fra Meec Tools har sju skuffer, hvorav fire allerede er fylt med 259 håndverktøy av høy kvalitet. Den robuste metallkonstruksjonen tåler opptil 300 kg og er utstyrt med en gummibelagt topplate – en komplett oppbevarings- og avlastningsløsning for garasjer og verksteder!",
				location: "Utebod",
				tags: ["verktøy", "Meec"],
				notes: "DU finner alt her",
				imageUrl:
					"https://assets.cdn.jula.com/v2/preset:jpgoptimized/w:640/215117?lastmodified=20251125141125",
			},
		],
	},
};
