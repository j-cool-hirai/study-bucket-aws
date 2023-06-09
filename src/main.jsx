import React from 'react'
import ReactDOM from 'react-dom/client'
import Top from './Top.jsx'
import Header from './components/header.jsx'
import './assets/scss/index.scss'
import './assets/scss/common/_ress.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Top />
  </React.StrictMode>,
)
