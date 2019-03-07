import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import {css} from '@emotion/core'
import {flexRow} from '../../styles/shared/GeneralStyles'
import theme, {breakpoints} from '../../styles/shared/Theme'

const maxq = theme.maxq //media query using max-width

const headerContainer = css`
	${flexRow};
	align-items: center;
	flex: 1 1 auto;
	height: ${theme.headerHeight};
	background-color: white;
	color: black;
	justify-content: space-between;
	${maxq['sm']} {
		flex-wrap: wrap;
		justify-content: flex-end;
	};
`
const sectionLeft = css`
	${flexRow};
	align-items: center;
	margin-left: 50px;
	cursor: pointer;
	${maxq['sm']} {
		margin-left: 25px;
	};
`

const sectionRight = css`
	${flexRow};
	justify-content: flex-end;
	margin-right: 50px;
	align-content: center;
	position: relative;
	a {
		display: flex;
		align-items: center;
		color: black;
		text-decoration: none;
		cursor: pointer;
		&:hover {
			text-decoration: underline;
		};
		margin: 0 10px;
		${maxq['sm']} {
			margin: 5px;
		};
	}
	${maxq['sm']} {
		flex-wrap: wrap;
			margin: 0 20px;
	};
`

const navMenuContainer = (openMenu) => {
	let menuDisplay = openMenu ? 'flex' : 'none'
	return css`
		display: flex;
		flex-direction: row;
		img {
			display: none;
		}
		${maxq['sm']} {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			position: absolute;
			top: -12px;
			right: 10px;
			z-index: 300;
			width: 125px;
			background-color: white;
			img {
				display: flex;
				margin-bottom: 10px;
				cursor: pointer;
			}
			a {
				display: ${menuDisplay};
				padding: 2px 0;
				width: 125px;
			    justify-content: flex-end;
			}
		};
	`
}

const navtag = css`
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
	const [openMenu, toggleMenu] = useState(false)
	
	useEffect(() => {
		function handleResize() {
			if (window.innerWidth > breakpoints['sm']) {
				toggleMenu(false)
			}
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const responsiveContainer = navMenuContainer(openMenu)
	return <div css={headerContainer}>
		<div css={sectionLeft}>
			<Link href={'/'}>
				<div css={[circleImage, sectionLeftItem]}/>
			</Link>
			<Link href={'/'}>
				<div css={[titleText, sectionLeftItem]}>DDX</div>
			</Link>
		</div>
		<div css={sectionRight}>
			<div css={responsiveContainer}>
				<img
					src={'/static/baseline-menu-24px.svg'} alt={'none'}
					onClick={() => {
						toggleMenu(!openMenu)}
					}
				/>
				<Link href="/about" prefetch>
					<a css={navtag}>About</a>
				</Link>
				<Link href="/browse" prefetch>
					<a css={navtag}>Browse Database</a>
				</Link>
				<Link href="/featured" prefetch>
					<a css={navtag}>Featured</a>
				</Link>
				<Link href="/challenges" prefetch>
					<a css={navtag}>Challenges</a>
				</Link>
				<Link href="/contact" prefetch>
					<a css={navtag}>Contact</a>
				</Link>
			</div>
		
		</div>
	</div>
}

export default Header