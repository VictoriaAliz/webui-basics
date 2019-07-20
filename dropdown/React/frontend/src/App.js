import React from 'react';
import './style.css';
import Dropdown from './Dropdown';

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function getData(country = '', group = '') {
    return new Promise((resolve) => {
        delay(2000)
        .then(() => fetch(`/data?country=${country}&group=${group}`))
        .then(response => response.json())
        .then(data => resolve(data));
    })
}


class App extends React.Component {

    render() {
        return (
            <Dropdown getData = {getData} trigger = {true} />
        )
    }
}

export default App;
