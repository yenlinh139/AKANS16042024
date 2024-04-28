import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// Tìm phần tử gốc có id là "add"
const root = document.getElementById('add')

// Kiểm tra xem phần tử gốc có tồn tại không
if (root) {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    root,
  )
} else {
  console.error('Root element with id "add" not found.')
}
