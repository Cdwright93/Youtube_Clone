import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div className='ui_relaxed_divided_list'>{renderedVideos}</div>;
};
export default VideoList;