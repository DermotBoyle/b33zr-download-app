const twitterURL = require("./twitter-fetch").default;

const appRouter = (app, fs) => {
	app.get("/", (req, res) => {
		res.send("home route");
	});

	twitterURL(app, fs);
};

module.exports = appRouter;
