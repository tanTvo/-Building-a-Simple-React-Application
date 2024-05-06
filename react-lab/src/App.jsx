import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';





function App() {
  return (
    <>
      <Header />
      <Content color="blue" text="This is my first React Application!!!!!!!!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!!!!!!!!" />
      <Footer />
    </>
  );
}

export default App;