import './App.css'
import { PokemonProvider } from './contexts/PokemonContext.jsx'
import PokemonList from './components/PokemonList'

  function App() {

    return (
      <>
        <PokemonProvider>
          <PokemonList />
        </PokemonProvider>
      </>
    )
  }

export default App
