import React from 'react'
import ReactDOM from 'react-dom'
import { useMediaQuery } from './Helpers/useMediaQuery'

import { Home } from './Home/Home'

const App = () => {
    
    const [width] = useMediaQuery();

    return (
        <Home width={width}/>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));