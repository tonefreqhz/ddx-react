import React from 'react'
import Link from 'next/link'

import {css} from '@emotion/core'
import {flexRow} from '../../styles/shared/GeneralStyles'
import theme from '../../styles/shared/Theme'

const headerContainer = css`
	${flexRow};
	align-items: center;
	flex: 1 1 auto;
	height: ${theme.headerHeight};
	background-color: white;
	color: black;
	justify-content: space-between;
	@media (max-width: 768px) {
		flex-wrap: wrap;
		justify-content: flex-end;
	};
`
const sectionLeft = css`
	${flexRow};
	align-items: center;
	margin-left: 50px;
	@media (max-width: 768px) {
		display: none;
	};
`

const sectionRight = css`
	${flexRow};
	margin-right: 50px;
	@media (max-width: 768px) {
		flex-wrap: wrap;
			margin: 0 20px;
	};
`

const navtag = css`
	color: black;
	text-decoration: none;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	};
	margin: 0 10px;
	@media (max-width: 768px) {
		margin: 5px;
	};
`

const circleImage = css`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: black;
`
const sectionLeftItem = css`
	margin: 0 10px;
`

const titleText = css`
	font-weight: bold;
`

const Header = () => {
	return <div css={headerContainer}>
		<div css={sectionLeft}>
			<div css={[circleImage, sectionLeftItem]}/>
			<div css={[titleText, sectionLeftItem]}>DDX</div>
		</div>
		<div css={sectionRight}>
			<Link href="/about">
				<a css={navtag}>About</a>
			</Link>
			<Link href="/browse">
				<a css={navtag}>Browse Database</a>
			</Link>
			<Link href="/featured">
				<a css={navtag}>Featured</a>
			</Link>
			<Link href="/challenges">
				<a css={navtag}>Challenges</a>
			</Link>
			<Link href="/contact">
				<a css={navtag}>Contact</a>
			</Link>
		</div>
	</div>
}

export default Header