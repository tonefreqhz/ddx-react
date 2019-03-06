import React from 'react'
import Head from 'next/head'

import withLayout from '../lib/withLayout'
import HomeContainer from '../components/containers/HomeContainer'

const Index = () => {
	return <>
		<Head>
			<title>Caltech DDX</title>
		</Head>
		<HomeContainer/>
	</>
}

export default withLayout(Index)

