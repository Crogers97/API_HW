import React from "react";

const VideoDetail = ({ video }) => {


    const link = function () {

        
        var str = video.videos[0].embed

var output = str.substr(90, 95);
return output


        // const match = video.videos[0].embed.slice(0,89);
        
        // // const firstSlice = match.slice(0, 89);
        // const secondSlice = match.slice(96, 283)
        // return secondSlice


    }

    return (
        <div>
            <h3>{video.title}</h3>
            <p>{video.competiton}</p>
            <div className= "video">
            <iframe src={link()} frameborder="0" width="100%" height="100%" allowfullscreen allow='autoplay; fullscreen'></iframe>
            </div>
            
    

            <p><img class="picture" src={video.thumbnail} alt="" /></p>
        </div>
    )
}
export default VideoDetail;