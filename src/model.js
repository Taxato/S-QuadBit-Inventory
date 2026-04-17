const model = {
	app: {
		element: document.getElementById("app"),
		currentPage: "home",
		pages: ["home", "newItem", "viewItem"],
		currentItemIndex: null,
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
			{ name: "verktøy", color: "hsl(354, 100%, 85%)" },
			{ name: "batteri", color: "hsl(32, 100%, 87%)" },
			{ name: "12v", color: "hsl(51, 100%, 85%)" },
			{ name: "ryobi", color: "hsl(133, 100%, 87%)" },
			{ name: "snekring", color: "hsl(158, 56%, 81%)" },
			{ name: "håndverktøy", color: "hsl(228, 46%, 85%)" },
			{ name: "18v", color: "hsl(270, 100%, 83%)" },
			{ name: "Meec", color: "hsl(178, 60%, 77%)" },
			{ name: "sag", color: "hsl(338, 100%, 83%)" },
			{ name: "forbruksvare", color: "hsl(33, 100%, 82%)" },
			{ name: "bøtte", color: "hsl(62, 100%, 86%)" },
			{ name: "badeand", color: "hsl(110, 100%, 88%)" },
			{ name: "leke", color: "hsl(185, 100%, 80%)" },
			{ name: "badekar", color: "hsl(219, 100%, 84%)" },
			{ name: "skru", color: "hsl(300, 100%, 89%)" },
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
				imageUrl: "",
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
