import React from 'react';
import {Link} from 'react-router-dom';
import styles from './videosList.css';
import CardInfo from '../CardInfo/card_info';

const VideoListTemplate = (props) => {
	return props.videos.map( (item,i) => {
		return	<Link to= {`/videos/${item.id}`} key={i}>
						<div className={styles.videoListItem_wrapper}>
							<div className={styles.left}

							style = {{
								background:`url(/images/videos/${item.image})`

							}}
							>
							<div></div>	
							</div>
							<div className={styles.right}>
								<CardInfo teams = {props.teams} date = {item.date} team = {item.team}/>
								<h2> {item.title}</h2>
							</div>
						</div>
					</Link>
		})
			
}
export default VideoListTemplate;