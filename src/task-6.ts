function getFirstElement<T>(arr: T[]): T {
	return arr[0]
}

const a = getFirstElement<number>([1, 2, 3]) // 1
const b = getFirstElement<string>(["a", "b", "c"]) // "a"
const c = getFirstElement<boolean>([true, false, true]) // true

document.body.insertAdjacentHTML("beforeend", `<h2>task - 06</h2>`)
