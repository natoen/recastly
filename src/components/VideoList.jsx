var VideoList = ({videos, videoClick}) =>
  <div className="video-list media">
    {videos.map((video) => 
      <VideoListEntry
        key={video.etag}
        video={video}
        videoClick={videoClick}
      />
    )}
  </div>;

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

window.VideoList = VideoList;
