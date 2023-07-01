import './App.css'
import { Button, Container } from '@mui/material'
import { Navbar } from './common/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Container sx={{ mt: 9 }} maxWidth="xl">
        <Button variant='contained'>Hola Mundo</Button>
      </Container>
    </div>
  )
}

export default App
