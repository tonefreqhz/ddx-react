import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {css} from '@emotion/core'
import theme from '../../styles/shared/Theme'

const homeContainer = css`
	display: flex;
	flex-direction: row;
	flex: 1 1 auto;
`

const leftSection = css`
	display: flex;
	flex-direction: column;
	padding: 20px;
	flex: 0 0 50%;
	${theme.maxq['sm']} {
		display: none;
	}
`

const imageContainer = css`
	background-color: darkred;
	border-radius: 22px;
	flex: 0 0 100%;
`

const rightSection = css`
	display: flex;
	flex-direction: column;
	padding: 15px;
	flex: 1;
	${theme.maxq['sm']} {
		padding: 22px;
	}
`
const introContentContainer = css`
	display: block;
`

const surtitle = css`
	font-weight: bold;
    border-bottom: 2px solid #e5342a;
    display: inline-block;
    padding-bottom: 5px;
    font-size: 18px;
    letter-spacing: 1px;
`
const title = css`
	font-size: 60px;
    line-height: 1.2;
    font-weight: bold;
`
const introParagraph = css`
    display: inline-block;
    margin-bottom: 20px;
    text-transform: none;
    letter-spacing: 1px;
    font-size: 20px;
    margin-top: 20px;
    line-height: 1.4;
`
const browseButton = css`
	border-top: 1px solid #000;
    border-bottom: 4px solid #000;
    border-left: 4px solid #000;
    border-right: 1px solid #000;
    padding: 5px 10px;
    color: #000;
    font-size: 20px;
    margin-top: 20px;
    display: inline-block;
    cursor: pointer;
`

const termsAndConditions = css`
    display: block;
    color: #bbb;
    font-weight: 100;
    margin-top: 6px;
    font-size: 12px;
    cursor: pointer;
`

const caltechLogoBottomRight = css`
	position: fixed;
    bottom: 17px;
    right: 20px;
    padding-left: 20px;
    max-width: 200px;
    max-height: 70px;
    cursor: pointer;
`

const Home = () => {
	return <>
		<div css={homeContainer}>
			<div css={leftSection}>
				<div css={imageContainer}/>
			</div>
			<div css={rightSection}>
				<div css={introContentContainer}>
					<h4 css={surtitle}>Welcome to</h4>
					<h3 css={title}>Caltech DDX</h3>
					<h6 css={introParagraph}>A public repository featuring xxxx electron tomography datasets of intact
						bacterial and archaeal cells, representing xx species.</h6>
					<Link href={'/browse'} passhref>
						<button css={browseButton}>
							Browse datatabase ->
						</button>
					</Link>
					<Link href={'/terms'}>
						<a css={termsAndConditions}>
							View our terms and conditions
						</a>
					</Link>
				</div>
			</div>
			{/*//switch for img*/}
			<Link href={'/'} passHref>
				<p css={caltechLogoBottomRight}>CALTECH</p>
			</Link>
		</div>
	</>
}

Home.propTypes = {}
export default Home