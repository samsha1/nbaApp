import React from 'react';
import styles from '../videosList.css';
import VideoListTemplate from '../videoListTemplate';

const VideosRelated = (props) => {

	return (

			<div className={styles.relatedWrapper}>
				<VideoListTemplate
					videos = {props.data}
					teams = {props.teams}
				/>
			</div>
		)

}
export default VideosRelated;