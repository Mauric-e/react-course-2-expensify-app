// Higher Order Component (HOC) --> A component (HOC) that renders another component 
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrapperComponent) => {
    return (props) => (
        <div>
        { props.isAdmin && <p>This is private info. Please don't share!</p>
    }
        <WrapperComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => { 
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please log in to see this!</p>}
            
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info = 'There are the details'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated = {false} info = 'There are the details'/>, document.getElementById('app'));







