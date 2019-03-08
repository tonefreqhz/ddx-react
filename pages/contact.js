import React from 'react'
import {css} from '@emotion/core'
import Head from 'next/head'

import withLayout from '../lib/withLayout'
import theme from '../styles/shared/Theme'

const maxq = theme.maxq
const minq = theme.minq


const Contact = (props) => {
	return <>
		<Head>
			<title>Contact DDX</title>
		</Head>
		<div css={css`
		display: flex;
		flex-direction: column;
		flex: 1;
		background-color: aqua;
	`}>
			<div
				css={css`
				display: flex;
				flex-direction: column;
				flex: 1;
				background-color: red;
				align-items: center;
				justify-content: center;
			`}
			>
				<h1>Title</h1>
				<h2>Subtitle</h2>
			
			</div>
			<div
				css={css`
				display: flex;
				flex-direction: row;
				flex: 2 1 auto;
				background-color: blue;
                padding: 50px 50px;
                ${maxq['sm']} {
					padding: 25px;
					flex-direction: column;
				}
			`}
			>
				<div css={css`
					display: flex;
					flex-direction: column;
					flex: 1 1 auto;
					flex-wrap: wrap;
					background-color: yellow;
					justify-content: space-evenly;
				`}>
					<div css={css`
					display: flex;
					flex-direction: column;
					flex: 1 1 auto;
					background-color: black;
				`}>
					
					>
					
					</div>
					<div css={css`
					display: flex;
					flex-direction: column;
					flex: 2 1 auto;
					background-color: papayawhip;
				`}>
					</div>
					<div css={css`
					display: flex;
					flex-direction: column;
					flex: 1 1 auto;
					background-color: grey;
				`}>
					
					</div>
				</div>
				<div css={css`
					display: flex;
					flex-direction: column;
					flex: 1 1 auto;
					background-color: green;
				`}>
				</div>
			</div>
		</div>
	</>
}

Contact.getInitialProps = async (ctx) => {
	return {}
}

export default withLayout(Contact, {footer: true})

