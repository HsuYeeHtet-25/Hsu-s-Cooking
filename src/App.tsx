import { BrowserRouter, Routes, Route, useParams } from 'react-router'

import Landing from './pages/Landing.tsx'

import NotFound from './pages/NotFound.tsx'
import MenuLayout from './layout/MenuLayout.tsx'
import Menu from './pages/Menu.tsx'
import SubMenu from './pages/SubMenu.tsx'
import Detail from './pages/Detail.tsx'




const App = () => {
  const param=useParams();
  console.log(param);
  
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route index element={<Landing/>}/>
      <Route path='/menu' element={<MenuLayout/>}>
        <Route index element={<Menu/>}/>
        <Route path=':name' element={<SubMenu/>}/>
        <Route path=':name/:id' element={<Detail/>}/>
      </Route>

      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App