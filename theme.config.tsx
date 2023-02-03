import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'

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
    logo: <span>ROQ Documentation</span>,
    project: {
        link: 'https://github.com/roqtech',
    },
    chat: {
        link: 'https://join.slack.com/t/roq-community/shared_invite/zt-1ly20yqpg-K03kNGxN1C7G1C0rr3TlSQ',
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
    docsRepositoryBase: 'https://github.com/roqtech/documentation',
    footer: {
        text: 'Platform 360 GmbH',
    },
    sidebar: {
        defaultMenuCollapseLevel: 0
    }
}

export default {...config, search: false }
