import React from 'react'
import {css} from '@emotion/core'
import theme from '../../styles/shared/Theme'

const maxq = theme.maxq //media query using max-width

const footerContainer = css`
            font-family: sans-serif;
			display: flex;
			flex-direction: row;
			flex: 1 1 auto;
			background-color: #fff;
			min-height: 300px;
            padding: 50px;
            border-top: 1px solid #ddd;
            line-height: 1.5;
			${maxq['sm']} {
				flex-direction: column;
			}
		`

const sectionLeft = css`
				display: flex;
				flex-direction: column;
				flex: 1 1 auto;
                background-color: #ffffff;
                width: 30%;
                word-break: break-word;
                padding: 10px;
				${maxq['sm']} {
                    flex-direction: row;
                    width: 100%;

				}
			`


const sectionRight = css`
				display: flex;
				flex-direction: row;
				flex: 1 1 auto;
				background-color: #f2f2f2;
                padding: 10px;
                width: 70%;
				${maxq['sm']} {
                    flex-direction: column;
                    width: 100%;

				}
			`
const rightItem = css`
					display: flex;
					flex-direction: column;
                    flex: 1 1 30%;
                    padding-right: 20px;
				`

const Footer = (props) => {
	return <div css={footerContainer}>
		<div css={sectionLeft}>
		
			<div css={css``}>
				<h3>DDX Vanilla Template</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim nec neque ut viverra. 
				</p>
                <p>
                2019 
				</p>
			</div>
		</div>
		<div css={sectionRight}>
			<div css={rightItem}>
				<h3>Footer item 1</h3>

				<p>
                Aliquam ornare felis urna, et pretium nibh cursus sed. Vestibulum bibendum lobortis urna, in faucibus diam fringilla at. 
				</p>
			</div>
			<div css={rightItem}>
                 <h3>Footer item 2</h3>
				<p>
                Mauris molestie consequat commodo. Quisque bibendum eget quam id dapibus. Mauris feugiat, lacus ac faucibus tincidunt, diam est vehicula lacus, ut lobortis nibh felis id sem.
				</p>
			</div>
			<div css={rightItem}>
                <h3>Footer item 3</h3>
				<p>
                Maecenas a enim mauris. Maecenas pharetra rhoncus tempus. Duis venenatis tempus urna, ut aliquet est tempor finibus. 
				</p>
			</div>
		</div>
	</div>
}

export default Footer