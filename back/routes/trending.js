const express = require("express")
const router = express.Router()

const options = {
    method: 'GET',
    headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDViZmU5YjcxMzk0YmFkOGFkOTFmZjM4OTllN2Y4NiIsInN1YiI6IjY1MjY3MTIzZmQ2MzAwNWQ3OGQ3NmNkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3bpviTYp1jQVYh6Vtf9VpusXZ6-frWR4VE-ELRBnkn4'
    }
}

router.get("/:type", async (req, res) => {
    try {
        const url = `https://api.themoviedb.org/3/trending/${req.params.type}/day?language=en-US`
        const response = await fetch(url, options)

        if (!response.ok) {
            throw new Error("Network Response was not ok")
        }
        const data = await response.json()
        res.status(200).json({data:data.results})
    } catch (error) {
        res.status(404).json({ error: error.message })
        console.log(error)
    }
})

module.exports = router