type Status = "loading" | "success" | "error"

function logStatus(status: Status): void {
	if (status === "loading") {
		console.log("Loading...")
	} else if (status === "success") {
		console.log("Success!")
	} else if (status === "error") {
		console.log("Something went wrong")
	}
}

logStatus("loading")

document.body.insertAdjacentHTML("beforeend", `<h2>task - 05</h2>`)
