import { useParams } from 'react-router-dom'; // Pega o :id da URL

function ItemDetailsPage() {
  const { id } = useParams(); // Pega o ID da URL
  return <h1>Detalhes do Item #{id}</h1>;
}
export default ItemDetailsPage;