import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/shared/Header';
import * as genStyle from "../styles/shared/GeneralStyles";

function withLayout(BaseComponent) {
	const BaseLayout = (props) => {
		return <>
			<Header/>
			<div css={genStyle.flexRow}>
				<div css={genStyle.LayoutContainer}>
					<BaseComponent {...props}/>
				</div>
			</div>
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