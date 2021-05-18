import React from 'react';

// previously used when incorrect async conponent was active with the country search. not overly important but it does keep the country data end point working on the home and factors pages
function WithListLoading(Component) {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
            <p className="lead" style={{ textAlign: 'center', fontSize: '30px' }}>
                Hold on, fetching data may take some time.....
            </p>
        );
    };
}
export default WithListLoading;