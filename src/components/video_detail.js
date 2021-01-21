import React from 'react';

const VideoDetail = ({video}) => {
  const VIDEO_TITLE = video.snippet.title;
  const VIDEO_DESCRIPTION = video.snippet.description;
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
              src={url}
              className="embed-responsive-item"
          />
        </div>
        <div className="details">
          <div>{VIDEO_TITLE}</div>
          <div>{VIDEO_DESCRIPTION}</div>
        </div>
      </div>
  );
};

export default VideoDetail;