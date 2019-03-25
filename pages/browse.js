import React from 'react'
import {css} from '@emotion/core'
import Head from 'next/head'

import withLayout from '../lib/withLayout'
import theme, {breakpoints} from '../styles/shared/Theme'

const maxq = theme.maxq

const Browse = (props) => {
	
	let mockCount = 30
	let mockArr = []
	for (let i = 0; i < mockCount; i++) {
		mockArr.push(i)
	}
	
	return <>
		<Head>
			<title>Browse the DDX Database</title>
		</Head>
		<div css={css`
		display: flex;
		flex-direction: row;
		flex: 1;
		background-color: grey;
		${maxq['sm']} {
			flex-direction: column;
		}
	`}>
			<div id='filter-outer'
				css={css`
				display: flex;
				flex-direction: column;
				flex: 1 0 200px;
				background-color: #fff;
                padding: 20px 10px 20px 60px;
                border-right: 1px solid #ddd;
				${maxq['sm']} {
                    flex: 0 0 200px;
                    border-right: 0px;

				}
			`}
			>
				<div id="filter-inner"
					css={css`
						display: flex;
						flex: 1;
						background-color: #fff;
					`}
				>
				<form>
                    <h3>Search & Filter</h3>
					<input type={'text'} />
				</form>
				</div>
			
			</div>
			<div
				css={css`
				display: flex;
				flex-direction: row;
				flex: 1 1 70%;
				background-color: blue;
				${maxq['sm']} {
					flex: 2 1 70%;

				}
			`}
			>
				<div css={css`
				display: flex;
				flex-direction: row;
				flex: 1 1 auto;
				flex-wrap: wrap;
				background-color: white;
                justify-content: left;
                padding: 25px;
              
			`}>
                    
					{mockArr.map(i => <div key={i}
					                       css={css`
					flex: 0 1 200px;
					min-height: 250px;
					background-color: #3f3f3f;
					border: 1px solid white;
					padding: 5px;
					margin: 20px;
				`}
					>
					
					</div>)}
				</div>
			</div>
		</div>
	</>
}

Browse.getInitialProps = async (ctx) => {
	return {}
}

export default withLayout(Browse, {footer: true})

