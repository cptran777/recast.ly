class Nav extends React.Component {
	constructor(props) {
		super();
		this.state = {};
		this.props = props;
	}

	render() {
		return (   
		<nav className="navbar">
		    <div className="col-md-6 col-md-offset-3">
		      <Search searchOp={this.props.searchOp}/>
		    </div>
	    </nav>
	    );
	}
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Nav = Nav;
