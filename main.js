
async function ExibirDados (){
    const apiUrl = 'https://api.adviceslip.com/advice';
    let result ;
    await fetch (apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Ocorreu um erro: ${response.status}`);
        }
        return response.json();
      })
      .then(data => { result = data;
        console.log('Dados recebidos:', data);
      })
      .catch(error => {
        console.error('Ocorreu um erro ao buscar os dados:', error);
    
      });
    
    document.getElementById('advice').innerHTML = result.slip.advice;

  } 
  