import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = ({videos, onVideoClick}) => {

    const VideoItems = videos.map((video, index) => {
        return <VideoListItem video={video} key={index} onVideoClick={onVideoClick}/>
     })

     return(
         <>
         <p>{VideoItems}</p>
         </>
     )
}

export default VideoList;