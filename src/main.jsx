import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './components/counter.jsx'
import StudentForm from './components/StudentForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentForm />
    {/*<Counter/>*/}
    {/*<App />*/}
  </StrictMode>,
)
