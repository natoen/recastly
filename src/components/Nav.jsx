var Nav = ({search}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3" style={{margin: 'auto', width: '90%', float: 'none'}} >
      <Search search={search} />
    </div>
  </nav>
);

window.Nav = Nav;
