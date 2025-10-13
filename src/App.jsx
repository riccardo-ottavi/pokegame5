import './App.css'
import { PokemonProvider } from './contexts/PokemonContext.jsx'
import PokemonList from './components/PokeDex.jsx'
import Display from './components/Display.jsx'
import Menu from './components/Menu.jsx'

function App() {

  return (
    <>
      <main>
        <PokemonProvider>
          <Display />
          <Menu />
        </PokemonProvider>
      </main>
    </>
  )
}

export default App
