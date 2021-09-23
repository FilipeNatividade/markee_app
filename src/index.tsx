import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import App from 'app'
import Providers from './Providers'

ReactDOM.render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
