import React from 'react';

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