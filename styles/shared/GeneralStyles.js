import {css} from '@emotion/core'
import theme from './Theme'

export const flexRow = css`
	display: flex;
	flex-direction: row;
`
export const flexCol = css`
	display: flex;
	flex-direction: column;
`

export const justifyAlignCenter = css`
	justify-content: center;
	align-items: center;
`
export const LayoutContainer = css`
	${flexCol};
	min-height: calc(100vh - ${theme.headerHeight});
	background-color: rgb(255, 255, 255);
`


