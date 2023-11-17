import React, { Suspense } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProviders'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {
  const { theme } = useTheme()
  const bool = true

  return (
      <div className={classNames('app', {}, [theme])}>
          <Suspense fallback={''}>
              <NavBar/>
              <div className={'content-page'}>
                  <Sidebar/>
                  <AppRouter/>
              </div>
          </Suspense>
      </div>
  )
}

export default App