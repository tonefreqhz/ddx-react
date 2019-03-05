// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {Global, css} from '@emotion/core'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return {...initialProps}
	}
	
	render() {
		return (
			<html>
			<Global styles={
				css`
					html, body {
						height: 100%;
						margin: 0;
						padding: 0;
					}
				`
			}/>
			<Head>
			</Head>
			<body>
			<Main/>
			<NextScript/>
			</body>
			</html>
		)
	}
}

export default MyDocument