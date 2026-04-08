import Header from './components/Header';
import Footer from './components/Footer';
import Catalogo from './pages/Catalogo';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Catalogo />
      </main>
      <Footer />
    </div>
  )
}

export default App
