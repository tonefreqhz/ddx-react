import React from 'react'
import {css} from '@emotion/core'
import Head from 'next/head'

import withLayout from '../lib/withLayout'
import theme from '../styles/shared/Theme'

const maxq = theme.maxq
const minq = theme.minq


const Contact = (props) => {
	return <>
		<Head>
			<title>Contact DDX</title>
		</Head>
		<div css={css`
		
	`}>
			<div
				css={css`
				display: flex;
				flex-direction: column;
				flex: 1;
				background-color: #fafafa;
				align-items: center;
				justify-content: center;
			`}
			>
				<h1>Get in touch</h1>
				<h2>Contact us</h2>
			
			</div>
			<div
				css={css`
				display: flex;
				flex-direction: row;
				flex: 2 1 auto;
				background-color: #fafafa;
                padding: 50px 50px;
                ${maxq['sm']} {
					padding: 25px;
					flex-direction: column;
				}
			`}
			>
                <div id="contact-main"
                css={css`
				    width: 50%;					
				`}>
			
					<div css={css`
					display: flex;
					flex-direction: column;
					flex: 1 1 auto;
                    background-color: #fafafa;
				`}>
                <b>Name</b>
                <p>Position</p>
                <p><b>p.</b> 123 456 7890</p>
                <p><b>e.</b> person@email.com</p>


					
					</div>
				</div>
				<div css={css`
					
				`}>

                    <form css={css`
                        input {
                            width: 100%;
                            font-size: 16px;
                            margin-bottom: 30px;
                            padding: 10px;
                        }
                        textarea {
                            width: 100%;
                            padding: 10px;
                            min-height: 250px;
                            font-size: 16px;
                        }    

                        button#contact-submit {
                            background: #000;
                            border: 0px;
                            color: #fff;
                            padding: 10px;
                            font-size: 16px;
                            width: 200px;
                            margin: 30px 0px;
                        }                
				`}>

                        <input type={'text'} placeholder={'Your name'} tabindex={'1'} />
                        <input type={'email'} placeholder={'Your email address'} tabindex={'2'} />
                        <textarea  placeholder={'Type your message here'} tabindex={'3'} />
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </form>

				</div>
			</div>
		</div>
	</>
}

Contact.getInitialProps = async (ctx) => {
	return {}
}

export default withLayout(Contact, {footer: true})

