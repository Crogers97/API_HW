import React, { useState, useEffect } from "react";
import VideoDetail from "../components/VideoDetail";
import VideoSelector from "../components/VideoSelector";

const VideosContainer = () => {

    const [allVideos, setAllVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null)

    const fetchAllVideos = () => {
        fetch("https://www.scorebat.com/video-api/v3/")
        .then(res => res.json())
        .then(data => setAllVideos(data.response))
    }

    useEffect(() => {
        fetchAllVideos()
    },[])

    const onVideoSelected = function(video){
        setSelectedVideo(video)
    }

    return(
        <>
        <p>Videos</p>
        <VideoSelector videos={allVideos} onVideoSelected={onVideoSelected}/>
        {selectedVideo ? <VideoDetail video={selectedVideo}/>: null}
        </>
    )
}
export default VideosContainer;