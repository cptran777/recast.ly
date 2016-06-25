var searchYouTube = (options, callback) => {
	
	// var results = YouTube.Search.list('id, snippet', {q: 'legend of zelda ost', maxResults: 5, key: 'AIzaSyAEiV_0IqBkUisjRUKJlk8hrPJoA8i8Yo4', videoEmbeddable: true});

	// console.log(results);

	$.ajax({
			url: 'https://www.googleapis.com/youtube/v3/search',
			type: 'GET',
			data: {part: 'id, snippet', q: options.query, maxResults: options.max || 5, key: options.key || 'AIzaSyAEiV_0IqBkUisjRUKJlk8hrPJoA8i8Yo4', type: 'video', videoEmbeddable: 'true'},
			success: (data) => {
				callback(data);
			},
			error: (e) => {
				console.log('No');
			}
	});
};

window.searchYouTube = searchYouTube;
