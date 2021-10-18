import React from "react";

const VideoListItem = ({video, onVideoClick}) => {
    const handleClick = function(){
        onVideoClick(video);
    }

    return <li onClick={handleClick}>{video.title}</li>
}

export default VideoListItem;