import React from 'react'
import {css} from '@emotion/core'
import theme from '../../styles/shared/Theme'

const maxq = theme.maxq //media query using max-width

const footerContainer = css`
			display: flex;
			flex-direction: row;
			flex: 1 1 auto;
			background-color: grey;
			min-height: 300px;
			padding: 25px;
			${maxq['sm']} {
				flex-direction: column;
			}
		`

const sectionLeft = css`
				display: flex;
				flex-direction: column;
				flex: 1 1 auto;
				background-color: blueviolet;
				${maxq['sm']} {
					flex-direction: row;
				}
			`
const leftTop = css`
				display: flex;
				flex-direction: row;
				flex: 1 1 auto;
				background-color: blue;
			`

const sectionRight = css`
				display: flex;
				flex-direction: row;
				flex: 1 1 auto;
				background-color: orange;
				padding: 10px;
				${maxq['sm']} {
					flex-direction: column;
				}
			`
const rightItem = css`
					display: flex;
					flex-direction: column;
					flex: 1 1 30%;
				`

const Footer = (props) => {
	return <div css={footerContainer}>
		<div css={sectionLeft}>
			<div css={leftTop}>
				<p>Circle Image</p>
				<p>Titlesomethingorsomethingsomethingsomethingsomething </p>
			</div>
			<div css={css``}>
				<p>
					texttexttexttexttexttexttexttexttexttexttexttext\
					texttexttexttexttexttexttexttexttexttexttexttext\
					texttexttexttexttexttexttexttexttexttexttexttext\
					texttexttexttexttexttexttexttexttexttexttexttext\
					texttexttexttexttexttexttexttexttexttexttexttext\
					texttexttexttexttexttexttexttexttexttexttexttext\
					texttexttexttexttexttexttexttexttexttexttexttext\
					texttexttexttexttexttexttexttexttexttexttexttext\
				</p>
			</div>
		</div>
		<div css={sectionRight}>
			<div css={rightItem}>
				<span>Circle Image</span>
				<p>
					texttexttexttexttexttexttexttexttexttexttexttext\
					texttexttexttexttexttexttexttexttexttexttexttext\
					texttexttexttexttexttexttexttexttexttexttexttext\
					texttexttexttexttexttexttexttexttexttexttexttext\
				</p>
			</div>
			<div css={rightItem}>
				<span>Circle Image</span>
				<p>
					texttexttexttexttexttexttexttexttexttexttexttext\
					texttexttexttexttexttexttexttexttexttexttexttext\
					texttexttexttexttexttexttexttexttexttexttexttext\
					texttexttexttexttexttexttexttexttexttexttexttext\
				</p>
			</div>
			<div css={rightItem}>
				<span>Circle Image</span>
				<p>
					texttexttexttexttexttexttexttexttexttexttexttext\
					texttexttexttexttexttexttexttexttexttexttexttext\
					texttexttexttexttexttexttexttexttexttexttexttext\
					texttexttexttexttexttexttexttexttexttexttexttext\
				</p>
			</div>
		</div>
	</div>
}

export default Footer