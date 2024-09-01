import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Feed from '../pages/Feed'
import Create from '../pages/Create'

const AppRoutes: React.FC = () => {
    return(
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="create" element={<Create />} />
        </Routes>
    )
}

export default AppRoutes;
