class Search extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {
			searchVal: ''
		}
	}

	handleChange(e) {
		this.setState({searchVal: e.target.value});
	}

	initSearch() {
		this.props.searchOp.mySearch(this.state.searchVal);
	}

	render() {
		return (
			<div className="search-bar form-inline">
			    <input onChange={this.handleChange.bind(this)} className="form-control" type="text" />
			    <button onClick={this.initSearch.bind(this)} className="btn hidden-sm-down">
			      <span className="glyphicon glyphicon-search"></span>
			    </button>
			</div> 
		);
	}
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
