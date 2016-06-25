class App extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			currentVid: this.props.videos[0],
			videoList: [],
			playAtIdx: 0,
			autoplay: false
		};
		searchYouTube({query: 'legend of zelda ost', max: 25}, (data) => {
			this.setState({videoList: data.items.slice(1)});
			this.setState({currentVid: data.items[0]});
		});
	}

	populateVideos(searchText) {
		var options = {query: searchText, max: 25};
		searchYouTube(options, (data) => {
			this.setState({videoList: data.items});
		});
	}

	changeCurrent(val) {
		this.setState({currentVid: val});
	}

	autoPlaySelect() {
		this.setState({autoplay: !this.state.autoplay});
		setTimeout(() => {
			console.log(this.state.autoplay);
		}, 1000);
	}

	render() {
	  return <div>
	    <Nav searchOp={{mySearch: this.populateVideos.bind(this)}} />
	    <div className="col-md-7">
	      <VideoPlayer video={this.state.currentVid}/>
	    </div>
	    <div className="col-md-5">
	      <form action="demo_form.asp" method="get">
  			<input onChange={this.autoPlaySelect.bind(this)} type="checkbox" name="autoplay-button" value="autoplay"/> AutoPlay </form>
	      <VideoList videos={this.state.videoList} state={{changeCurrent: this.changeCurrent.bind(this)}}/>
	    </div>
	  </div>
	};
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
