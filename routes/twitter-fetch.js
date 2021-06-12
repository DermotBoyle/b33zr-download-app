const fetch = require("node-fetch");
const cors = require("cors");

const { TOKEN } = process.env;

const twitterURL = (app, fs) => {
	// READ
	app.get("/twitter/:id", cors(), (req, res) => {
		const tweetId = req.params["id"];
		console.log(TOKEN);
		try {
			const twitterURL = "https://api.twitter.com/1.1/statuses/show.json?" + tweetId;
			fetch(twitterURL, {
				method: "GET",
				headers: { Authorization: TOKEN }
			})
				.then((res) => res.json())
				.then((body) => {
					const video = processData(body);
					return res.send(video);
				});
		} catch (error) {
			res.send(error);
		}
	});
};

const processData = (body) => {
	console.log(body);
	const VIDEO_URL = body.extended_entities.media[0].video_info.variants[1].url;
	return VIDEO_URL;
};

module.exports = twitterURL;
