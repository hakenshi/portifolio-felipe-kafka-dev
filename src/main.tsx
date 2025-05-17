import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import App from './App.tsx'
import './index.css'
import ProjectsHomePage from './projects/home-page.tsx'
import ProjectsProjectPage from './projects/project-page.tsx'
import MainLayout from './components/layouts/main-layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<App />} />
          <Route path='projects' element={<ProjectsHomePage />}>
            <Route path=':id' element={<ProjectsProjectPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
