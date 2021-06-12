import fetch from "node-fetch";
import cors from "cors";
import processData from "../helpers";

const { TOKEN } = process.env;

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
				.then((body) => {
					const video = processData(body);
					return res.send(video);
				});
		} catch (error) {
			res.send(error);
		}
	});
};

export default twitterURL;
