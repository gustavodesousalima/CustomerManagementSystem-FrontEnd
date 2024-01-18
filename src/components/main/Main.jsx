import { useState, useEffect } from 'react';
import axios from 'axios';
import './main.css';

function Main() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Função para buscar dados da API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/getcustomers/');
        setClientes(response.data); // Atualiza o estado com os dados da API
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    // Buscar dados imediatamente ao carregar o componente
    fetchData();

    // Buscar dados a cada 5 segundos
    const intervalId = setInterval(fetchData, 5000);

    // Limpar intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);// O segundo parâmetro vazio indica que useEffect deve ser executado apenas uma vez (equivalente a componentDidMount)

  return (
    <main id='container_Main'>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Coordenada X</th>
            <th>Coordenada Y</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.name}</td>
              <td>{cliente.email}</td>
              <td>{cliente.telephone}</td>
              <td>{cliente.coord_x}</td>
              <td>{cliente.coord_y}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Main;
