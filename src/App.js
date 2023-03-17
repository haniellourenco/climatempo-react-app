

function App() {
  const post = {
    idCidade: 1,
    name: 'Joinville',
    state: 'SC',
    country: 'Brasil',
    data: {
      temperature: 20,
      humity: 89,
      condition: 'Céu limpo',
    }
  }
  return (
    <>
      <h1>Climatempo</h1>
      <p>
        {post.name} - {post.state} - {post.country}
        <br/>
        Temperatura: {post.data.temperature} °C
        <br/>
        Humidade: {post.data.humity}%
        <br/>
        Condição: {post.data.condition}
      
      </p>
      
    
    </>
  );
}

export default App;
