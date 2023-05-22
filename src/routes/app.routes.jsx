import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Details } from '../pages/Details'
import { CreateNote } from '../pages/CreateNote'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home  />}  />
            <Route path='/profile' element={<Profile  />}  />
            <Route path='/notes/:id' element={<Details  />}  />
            <Route path='/createnote' element={<CreateNote  />}  />
        </Routes>
    )
}