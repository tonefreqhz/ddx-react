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
	flex: 0 0 50%;
	${theme.maxq['sm']} {
		display: none;
	}
`

const imageContainer = css`
	background-color: #2b2b2b;
    flex: 0 0 100%;
    background-image: url(https://countrylakesdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg);
    background-position: center center;
    background-size: cover;

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
    max-width: 35vw;
    margin: 50px auto;
    ${theme.maxq['sm']} {
		max-width: 100%;
	}
`

const surtitle = css`
	font-weight: bold;
    display: inline-block;
    padding-bottom: 5px;
    font-size: 18px;
`
const title = css`
	font-size: 5vw;
    line-height: 1.2;
    font-weight: bold;
    margin: 0px;
    ${theme.maxq['sm']} {
		font-size: 60px;
	}
`
const introParagraph = css`
    display: inline-block;
    margin-bottom: 20px;
    text-transform: none;
    font-size: 20px;
    font-weight: normal;
    margin-top: 20px;
    line-height: 1.4;
`
const browseButton = css`
border: 0px;
padding: 8px 20px;
color: #fff;
font-size: 20px;
margin: 20px 0px;
display: inline-block;
cursor: pointer;
background: #000;
opacity: 1;
transition: 0.3s;
-moz-transition: 0.3s;
-webkit-transition: 0.3s;
&:hover {
    opacity: .7;
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
					<Link href={'/browse'} passHref>
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