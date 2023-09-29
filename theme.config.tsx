import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'
import { Search } from './components/search/Search'
import { AskAiButton } from './components/ask-ai-btn/AskAiButton'
import { Pre} from './components/pre'


const config: DocsThemeConfig = {

    useNextSeoProps() {
        return {
            titleTemplate: '%s – ROQ'
        }
    },
    head: (
        <> 
            <link rel="shortcut icon" href="/favicon.ico"/>
        </>
    ),
    logo: (
    <>
    <svg width="84" viewBox="0 0 635.6 468.5">
        <path fill="currentColor" d="m263.6 311.6-54.4-79.1h20c9.2 0 16.7-7.5 16.7-16.7s-7.5-16.7-16.7-16.7h-30v84.7h-14.3v-99h44.3c17.1 0 31 13.9 31 31 0 14.8-10.4 27.2-24.3 30.2l39.5 57.4-11.8 8.2zM406.588 252.651l9.568-10.626 34.48 31.046-9.568 10.627z" />
        <path fill="currentColor" d="M401.2 184.8c-27.3 0-49.4 22.2-49.4 49.4 0 19.4-15.8 35.1-35.1 35.1-19.4 0-35.1-15.8-35.1-35.1 0-19.4 15.8-35.1 35.1-35.1 10.9 0 21.1 5.1 27.8 13.6L354 202c-9.3-10.8-23-17.2-37.5-17.2-27.3 0-49.4 22.2-49.4 49.4 0 27.3 22.2 49.4 49.4 49.4 27.3 0 49.4-22.2 49.4-49.4 0-19.4 15.8-35.1 35.1-35.1s35.1 15.8 35.1 35.1c0 19.4-15.8 35.1-35.1 35.1-10.9 0-21.2-5.1-27.8-13.7l-9.7 10.7c9.3 10.9 23 17.3 37.5 17.3 27.3 0 49.4-22.2 49.4-49.4.2-27.2-22-49.4-49.2-49.4z" />
        <path fill="currentColor" d="M479.4 156.2H156.2v156.2h90.6l-9.9-14.3h-66.4V170.5h294.6v127.6H254.3l9.8 14.3h215.3z" />
      </svg>
      <span>Documentation</span>
    </>
    ),
    project: {
        link: 'https://github.com/roqtech',
    },
    chat: {
        link: 'http://roqstars.com/',
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="currentcolor"
        >
            <g>
                <path
                    d="M23.563 35.84a3.066 3.066 0 01-3.06 3.058 3.066 3.066 0 01-3.058-3.058 3.066 3.066 0 013.059-3.059h3.058zm0 0M25.102 35.84a3.066 3.066 0 013.058-3.059 3.066 3.066 0 013.059 3.059v7.656a3.066 3.066 0 01-3.059 3.059 3.066 3.066 0 01-3.058-3.059V35.84zm0 0M28.16 23.563a3.066 3.066 0 01-3.058-3.06 3.066 3.066 0 013.058-3.058 3.066 3.066 0 013.059 3.059v3.058zm0 0M28.16 25.102a3.066 3.066 0 013.059 3.058 3.066 3.066 0 01-3.059 3.059h-7.656a3.066 3.066 0 01-3.059-3.059 3.066 3.066 0 013.059-3.058h7.656zm0 0M40.438 28.16a3.066 3.066 0 013.058-3.058 3.066 3.066 0 013.059 3.058 3.066 3.066 0 01-3.059 3.059h-3.059zm0 0M38.898 28.16a3.066 3.066 0 01-3.058 3.059 3.066 3.066 0 01-3.059-3.059v-7.656a3.066 3.066 0 013.059-3.059 3.066 3.066 0 013.058 3.059zm0 0M35.84 40.438a3.066 3.066 0 013.058 3.058 3.066 3.066 0 01-3.058 3.059 3.066 3.066 0 01-3.059-3.059v-3.059zm0 0M35.84 38.898a3.066 3.066 0 01-3.059-3.058 3.066 3.066 0 013.059-3.059h7.656a3.066 3.066 0 013.059 3.059 3.066 3.066 0 01-3.059 3.058zm0 0"></path>
            </g>
        </svg>
    },
    docsRepositoryBase: 'https://github.com/roqtech/documentation/blob/main/',
    footer: {
        text: 'Platform 360 GmbH',
    },
    sidebar: {
        defaultMenuCollapseLevel: 0
    },

    components: {
        pre: Pre
    },
    
    search: {
        component:<><AskAiButton/><Search/></> 
    }
}



export default config
