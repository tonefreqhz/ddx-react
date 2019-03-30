import React from 'react'
import Head from 'next/head'

import {ThemeProvider, useTheme} from '../styles/jss/theme'
import withLayout from '../lib/withLayout'
import HomeContainer from '../components/containers/HomeContainer'

const Index = () => {
	const {theme} = useTheme()
	return <>
		<Head>
			<title>Caltech DDX</title>
		</Head>
		<ThemeProvider theme={theme}>
			<HomeContainer/>
		</ThemeProvider>
	</>
}

export default withLayout(Index)

