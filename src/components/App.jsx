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
    this.props.searchYouTube({key: this.props.YOUTUBE_API_KEY, query}, (result) => {
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
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.videoPlayer} />
        </div>
        <div className="col-md-5">
          <VideoList
            videos={this.state.videoList}
            videoClick={(video) => this.videoClick(video)}
          />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
