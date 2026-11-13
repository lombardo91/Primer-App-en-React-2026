import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyNombreCompletoApp, PrimerComponenteApp } from './PrimerComponente'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
<PrimerComponenteApp/>
{/*<MyNombreCompletoApp/>*/}
    </StrictMode>,
)



// Termine la seccion num 4, la 5 es testing.. la safo.. paso a la v6 =)