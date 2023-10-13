const express = require("express")
const router = express.Router()
const fetch = require("node-fetch")

const options = {
    method: 'GET',
    headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDViZmU5YjcxMzk0YmFkOGFkOTFmZjM4OTllN2Y4NiIsInN1YiI6IjY1MjY3MTIzZmQ2MzAwNWQ3OGQ3NmNkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3bpviTYp1jQVYh6Vtf9VpusXZ6-frWR4VE-ELRBnkn4'
    }
}

router.get("/:type/:genre", async (req, res) => {
    try {
        const url = `https://api.themoviedb.org/3/discover/${req.params.type}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${req.params.genre}`
        const response = await fetch(url, options)

        if (!response.ok) {
            throw new Error("Network Response was not ok")
        }

        const data = await response.json()
        res.status(200).json({data: data.results})

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.error(error)
    }
})

module.exports = router