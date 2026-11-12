import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyNombreCompletoApp, PrimerComponenteApp } from './PrimerComponente'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
<PrimerComponenteApp/>
{/*<MyNombreCompletoApp/>*/}
    </StrictMode>,
)
// quede en 44 hacer!