function generatePastelColor() {
	return `hsl(${Math.floor(Math.random() * 360)}, 100%, 80%)`;
}

function splitRawTagString(rawString) {
	return rawString
		.trim()
		.split(/\s{0,},\s{0,}|\s+/)
		.filter(t => t.length > 0)
		.map(t => t.toLowerCase());
}
