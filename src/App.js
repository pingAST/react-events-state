import React from 'react';
import './App.css';
import Portfolio from './filter/js/Portfolio';
import Store from './layouts/js/Store'

function App() {
    return (
        <>
            <div className="App">
                <Portfolio/>
            </div>

            <div className="App2">
                <Store/>
            </div>
        </>
    );
}

export default App;
