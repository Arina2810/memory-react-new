import './App.css'
import Button from './components/Button/Button'

function App() {
  return (
    <div className='container'>
      <header>
        <h1>Игра мемори</h1>
      </header>
      <main>
        контент

        <Button title='заказать' color='red' rounded='false' />
        <Button title="купить" color='green' />
        <Button title='Войти' color='blue' />


        <button>моя кнопка</button>

      </main>
      <footer>
        <p>&copy; Мухина Юлия, 2026 г.</p>
      </footer>
    </div>
  )
}

export default App
