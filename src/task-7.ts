function getMessage(): Promise<string> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Hello from TS")
		}, 1000)
	})
}

getMessage().then((result) => console.log(result))

document.body.insertAdjacentHTML("beforeend", `<h2>task - 07</h2>`)
