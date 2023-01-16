import { useEffect } from 'react';
import { useRouter } from 'next/router';

let mixpanel;
if (process.env.NEXT_PUBLIC_MIXPANEL_ENABLED === 'true') {
    mixpanel = require('mixpanel-browser');
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, {
        host: 'api-eu.mixpanel.com'
    });
} else {
    mixpanel = { track: (name, value) => {},  };
}



function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url, { shallow }) => {
            if (!shallow) {
                mixpanel.track('Documentation: Page view', {
                    system: 'documentation',
                    url
                });
            }
        };
        router.events.on('routeChangeStart', handleRouteChange);
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, []);

    return (<Component {...pageProps} />);
}

export default MyApp
