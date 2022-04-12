import React from 'react'
// Con esto le digo al punto más alto de mi aplicación que tengo un Store
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'
import { store } from './store/store'

const MyApp = () => {
    return (
        <div>
            {/* uso el provider y le paso el store como parámetro */}
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        </div>
    )
}

export default MyApp