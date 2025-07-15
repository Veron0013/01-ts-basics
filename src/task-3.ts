interface Product {
	readonly id: number
	title: string
}

type stringArray = string[]
type numArray = number[]
type prodArray = Product[]

const usernames: stringArray = ["alice", "bob", "charlie"]

const ratings: numArray = [4.5, 3.8, 5]

const products: prodArray = [
	{ id: 1, title: "Phone" },
	{ id: 2, title: "Laptop" },
]

console.log(`Usernames: ${JSON.stringify(usernames)}`)
console.log(`Ratings: ${JSON.stringify(ratings)}`)
console.log(`Products: ${JSON.stringify(products)}`)

document.body.insertAdjacentHTML("beforeend", `<h2>task - 03</h2>`)
