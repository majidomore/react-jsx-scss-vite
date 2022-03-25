import { Counter } from './components/Counter'
import { Footer } from './components/Footer'
import { Header } from './components/Header'


function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Counter msg='Hello Counter' />
      </header>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
