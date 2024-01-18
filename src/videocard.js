function VideoCard(props) {
  return (

    <div className="video-card">
      <h3 className='channel-name'><span className='channel-logo'><img className='logo-img' src={props.videoData.channelLogoUrl} /></span>{props.videoData.channelName}</h3>
      <img className="thumbnail" src={props.videoData.thumbnail} />
      <p className="title">Title :{props.videoData.title} </p>
      <div className='description'>
        <p className='likes'>Likes : {props.videoData.likes}</p>
        <p className='views'>views : {props.videoData.views}</p>
      </div>
    </div>

  )
}

export default VideoCard