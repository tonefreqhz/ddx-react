import React from 'react'
import Head from 'next/head'
import * as genStyle from '../styles/shared/GeneralStyles'

import Header from '../components/shared/Header'

const Index = () => {
	return (
		<>
			<Head>
				<title>Next.js with Emotion.js</title>
			</Head>
			<Header/>
			<div css={genStyle.flexRow}>
				<div css={[genStyle.LayoutContainer, genStyle.justifyAlignCenter]}>
				
				</div>
			</div>
		</>
	)
}

export default Index