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
		background-color: aqua;
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
				flex: 1;
				background-color: red;
	
			`}
			>
			</div>
			<div
				css={css`
				display: flex;
				flex-direction: column;
				flex: 1 1 auto;
				background-color: blue;
                padding: 50px 50px;
                ${maxq['sm']} {
					padding: 25px;
				}
			`}
			>
			<div css={css`
				display: flex;
				flex-direction: row;
				flex: 1 1 auto;
				flex-wrap: wrap;
				background-color: yellow;
				justify-content: space-evenly;

			`}>
				</div>
			</div>
		</div>
	</>
}

About.getInitialProps = async (ctx) => {
	return {}
}

export default withLayout(About, {footer: true})

