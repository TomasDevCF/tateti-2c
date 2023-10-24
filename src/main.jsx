import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import WinLayout from './WinLayout.jsx'
import {ContextGameProvider} from './Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ContextGameProvider>

      <App /> 
      <WinLayout/>
  </ContextGameProvider>
)
