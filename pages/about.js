import React from 'react'
import {css} from '@emotion/core'
import Head from 'next/head'

import withLayout from '../lib/withLayout'
import theme from '../styles/shared/Theme'

const maxq = theme.maxq
const minq = theme.minq


const About = (props) => {
	return <>
		<Head>
			<title>About DDX</title>
		</Head>
		<div css={css`
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 0 100px;
		background-color: #fafafa;
		${minq['xl']} {
			padding: 0 500px;
		}
		${minq['lg']} {
			padding: 0 300px;
		}
		${maxq['md']} {
			padding: 0 50px;
		}
		${maxq['sm']} {
			padding: 0 25px;
		}
	`}>
			
			<div
				css={css`
				display: flex;
				flex-direction: column;
				flex: 1 1 auto;
                background-color: #fafafa;
                padding-bottom: 50px;
                ${maxq['sm']} {
				}
			`}
			>

            <div
				css={css`
				display: flex;
				flex-direction: column;
				flex: 1;
				background-color: #fafafa;
				align-items: center;
				justify-content: center;
			`}
			>
				<h1>Title</h1>
				<h2>Subtitle</h2>
			
			</div>

            <div id="about-text"
            css={css`
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				background-color: #fafafa;
                justify-content: left;
                
                p {line-height: 2;}
               
                img {width: 100%;
                    height: 100%;    
                    object-fit: cover;}

			`}>

                
                
                <div id="about-image"
                css={css`
                height: 500px;
                `}>
                <img src="https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"></img>
                </div>

				<p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
                <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
                <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</p> 
                </div>
			</div>
		</div>
	</>
}


About.getInitialProps = async (ctx) => {
	return {}
}

export default withLayout(About, {footer: true})

