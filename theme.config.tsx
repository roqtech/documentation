import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: <span>ROQ Documentation</span>,
    project: {
        link: 'https://github.com/roqtech',
    },
    chat: {
        link: 'https://join.slack.com/t/roq-community/shared_invite/zt-1ly20yqpg-K03kNGxN1C7G1C0rr3TlSQ',
    },
    docsRepositoryBase: 'https://github.com/roqtech/documentation',
    footer: {
        text: 'Platform 360 GmbH',
    },
    sidebar: {
        defaultMenuCollapseLevel: 0
    }
}

export default config
