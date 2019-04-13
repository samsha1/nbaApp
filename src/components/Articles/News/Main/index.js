import React from 'react';
import Slider from '../../../widgets/NewsSlider/slider';
import NewsList from '../../../widgets/NewsList/news_list';

const NewsMain = () => {
	return (

			<div>
				<Slider 
					type = "featured"
      				start = {0}
      				amount = {6}
      				settings = {{ 
      					dots:false
      				}}
				/>
				<NewsList
        			type = "cardMain"
        			start = {0}
        			amount = {6}
      			/>
			</div>
		)
}

export default NewsMain;