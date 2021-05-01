const fetch = require("node-fetch");
const cors = require("cors");
const localENV = require("dotenv").config();

const { TOKEN } = localENV.parsed;

const twitterURL = (app, fs) => {
	// READ
	app.get("/twitter/:id", cors(), (req, res) => {
		const tweetId = req.params["id"];
		try {
			const twitterURL = "https://api.twitter.com/1.1/statuses/show.json?" + tweetId;
			fetch(twitterURL, {
				method: "GET",
				headers: { Authorization: TOKEN }
			})
				.then((res) => res.json())
				.then((body) => res.send(body));
		} catch (error) {
			res.send(error);
		}
	});
};

module.exports = twitterURL;
