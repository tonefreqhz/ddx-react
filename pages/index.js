import React from 'react'
import Head from 'next/head'
import {css, keyframes} from '@emotion/core'
import styled from '@emotion/styled'

const flexRow = css`
	display: flex;
	flex-direction: row;
	flex: 1 1 auto;
`
const flexCol = css`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
`
const justifyAlignCenter = css`
	justify-content: center;
	align-items: center;
`
const LayoutContainer = css`
	${flexCol};
	min-height: 100vh;
	background-color: rgb(255, 255, 255);
`

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0,-4px,0);
  }
`

const pTagExample = styled.p`
	font-size: ${props => props.size}px;
`
const DynamicDOMStyles = styled.div(props => ({
	fontSize: props.size,
	color: props.color,
	backgroundColor: props.backgroundColor,
	lineHeight: props.lineHeight,
	fontWeight: props.fontWeight,
	display: props.display,
	flexDirection: props.flexDirection,
	flex: props.flex,
	justifyContent: props.justifyContent,
	alignItems: props.alignItems,
	margin: props.margin,
	marginTop: props.marginTop,
	marginRight: props.marginRight,
	marginBottom: props.marginBottom,
	marginLeft: props.marginLeft,
	padding: props.padding,
	paddingTop: props.paddingTop,
	paddingRight: props.paddingRight,
	paddingBottom: props.paddingBottom,
	paddingLeft: props.paddingLeft,
	textAlign: props.textAlign,
}))

const _div = DynamicDOMStyles.withComponent('div')
const _h1 = DynamicDOMStyles.withComponent('h1')
const _h2 = DynamicDOMStyles.withComponent('h2')
const _h3 = DynamicDOMStyles.withComponent('h3')
const _h4 = DynamicDOMStyles.withComponent('h4')
const _p = DynamicDOMStyles.withComponent('p')

const Index = () => {
	return (
		<>
			<Head>
				<title>Next.js with Emotion.js</title>
			</Head>
			<div css={flexRow}>
				<div css={[LayoutContainer, justifyAlignCenter]}>
					<_div
						textAlign={'center'}
						size={44}
						marginBottom={125}
						// css={css` animation: ${bounce} 1s ease infinite;`}
					>
						Welcome to EMOTION
					</_div>
				</div>
			</div>
		</>
	)
}

export default Index