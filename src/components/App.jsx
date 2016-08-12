class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoPlayer: null,
      videoList: []
    };
  }

  componentDidMount() {
    this.fetchYoutubeVideos('あーだこーだそーだ！');
  }

  fetchYoutubeVideos(query) {
    this.props.searchYouTube({key: this.props.API_KEY, query}, result => {
      this.setState({
        videoPlayer: result[0],
        videoList: result
      });
    });
  }

  videoClick(video) {
    this.setState({
      videoPlayer: video
    });
  }

  render() {
    return (
      <div>
        <Nav search={query => setTimeout(() => this.fetchYoutubeVideos(query), 500)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.videoPlayer} />
        </div>
        <div className="col-md-5">
          <VideoList
            videos={this.state.videoList}
            videoClick={video => this.videoClick(video)}
          />
        </div>
      </div>
    );
  }
}

window.App = App;
