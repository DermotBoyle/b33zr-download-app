const processData = (body) => {
	const VIDEO_URL = body.extended_entities.media[0].video_info.variants[1].url;
	return VIDEO_URL;
};

export default processData;
