import React from "react"
export const Video = ()=>{
    return(
        <div className="container video-container">
            <iframe style={{width:'1200px',height:'587px',paddingTop:'50px',paddingBottom:'50px'}} className="video"
            src="https://youtu.be/anUz77ElBK4?si=XqRPlR_p8n6Na1mW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            ></iframe>
        </div>
    )
}