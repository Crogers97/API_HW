import React from "react";

const VideoSelector = ({ videos, onVideoSelected}) => {

    const handleChange = function(event){
        onVideoSelected(videos[event.target.value]);
    }

    const videoOptions = videos.map((video, index) => {
        return <option value={index} key={index}>{video.title}</option>
    })

    return(
        <select defaultValue = "" onChange={handleChange}>
            <option value="">Choose a Match</option>
            {videoOptions}
        </select>
    )
}

export default VideoSelector;