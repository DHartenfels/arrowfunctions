const iterDouble = function (a, b, c, d) {
	let toReturn = b;
	for (let i = 0; i < a.length; i++) {
		const curr = c(a[i], i, a);
		toReturn = d(toReturn, curr, i, a);
	}
	return (toReturn);
}

const data = [{
		name: "Clara",
		job: "Companion"
	},
	{
		name: "Adele",
		job: "Author"
	}
]
// Ausgabe 1
console.log(iterDouble(data, "Amilia", (v) => v.name, (a, v) => `${a}, ${v}`))

// Ausgabe 2
console.log(iterDouble(data, 2000, (v) => 9, (a, v) => a + v))


// Ausgabe 3
console.log(iterDouble(data,[],(v) => v.job ,(a,v)=> a.concat(v)))

