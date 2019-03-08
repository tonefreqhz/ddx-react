import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer'
import * as genStyle from "../styles/shared/GeneralStyles";

function withLayout(BaseComponent, {footer = false} = {}) {
	const BaseLayout = (props) => {
		return <>
			<Header/>
			<div css={genStyle.flexRow}>
				<div css={genStyle.LayoutContainer}>
					<BaseComponent {...props}/>
				</div>
			</div>
			{footer ? <Footer/> : null}
		</>
	}
	
	BaseLayout.getInitialProps = (ctx) => {
		if (BaseComponent.getInitialProps) {
			return BaseComponent.getInitialProps(ctx);
		}
		return {};
	};
	
	BaseLayout.propTypes = {
		pageContext: PropTypes.object,
	};
	
	BaseLayout.defaultProps = {
		pageContext: null,
	};
	
	return BaseLayout
}

export default withLayout;