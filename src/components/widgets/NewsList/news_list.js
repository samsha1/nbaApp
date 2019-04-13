import React, { Component } from 'react';
import axios from 'axios';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { Link } from 'react-router-dom';
import {BASE_URL} from '../../../config';
import styles from './newsList.css';
import Button from '../Buttons/buttons';
import CardInfo from '../CardInfo/card_info';

class NewsList extends Component {

	state = {
		teams:[],
		items:[],
		start:this.props.start,
		end:this.props.start + this.props.amount,
		amount:this.props.amount
	}

	componentWillMount(){
		let end = this.state.start + this.state.amount;
		this.request(this.state.start,end);

	}

	request = (start,end) => {

		if(this.state.teams.length < 1){
			axios.get(`${BASE_URL}/teams`)
		.then(response =>{
			this.setState({
				teams:response.data
			})
		})

		}

		axios.get(`${BASE_URL}/articles?_start=${start}&_end=${end}`)
		.then(response =>{
			this.setState({
				items:[...this.state.items,...response.data],
				start,
				end
			})
		})

	}

	loadMore = () => {
		let end = this.state.end + this.state.amount;
		this.request(this.state.end,end);
	}

	renderNews = (type) => {
		let templates = null;

		switch(type){

			case('card'):
				templates = this.state.items.map((item,i) => (
					<CSSTransition
						classNames={{
							enter:styles.newsList_wrapper,
							enterActive:styles.newsList_wrapper_enter
						}}
						timeout={500}
						key={i}

					>
						<div>
						<div className= {styles.newslist_item}>
							<Link to={`/articles/${item.id}`}>
								<CardInfo teams = {this.state.teams} date = {item.date} team = {item.team}/>
								<h2>{item.title}</h2>
							</Link>
						</div>
						</div>
					</CSSTransition>

				))
			break;
			case('cardMain'):
				templates= this.state.items.map((item,i) => (
					<CSSTransition
						classNames={{
							enter:styles.newsList_wrapper,
							enterActive:styles.newsList_wrapper_enter
						}}
						timeout={500}
						key={i}

					>
						<Link to={`/articles/${item.id}`}>
							<div className={styles.flex_wrapper}>
								<div className={styles.left}

									style={{
										background:`url(/images/articles/${item.image})`
									}}

								>
								<div></div>
								</div>
								<div className={styles.right}>
									<CardInfo teams = {this.state.teams} date = {item.date} team = {item.team}/>
								<h2>{item.title}</h2>
								</div>
							</div>
						</Link>
					</CSSTransition>

					))
			break;
			default:
				templates = null;

		}

		return templates;

	}

	render() {
		return (
			<div>
				<TransitionGroup
					component="div"
					className="list"
				>

					{this.renderNews( this.props.type )}
				</TransitionGroup>
				<Button
					type="loadmore"
					loadMore={ () => this.loadMore()}
					cta="Load More News"
				/>  	
			</div>
		);
	}
}

export default NewsList;
