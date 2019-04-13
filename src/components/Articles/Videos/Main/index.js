import React from 'react';
import VideosList from '../../../widgets/VideosList/videos_list';


const VideosMain = () => {
	return (
			<div>
				 <VideosList
        			type="card"
        			title={false}
        			loadmore={true}
        			start={0}
        			amount= {9}
      			/>
			</div>

		);
}

export default VideosMain;