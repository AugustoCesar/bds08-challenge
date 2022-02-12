import mainImage from 'assets/photo.png';

import './styles.css';

type Props = {
  title: string;
  description: string;
};

const ResultCard = ({ title, description }: Props) => {
  return (
    <div className="container result-container">
      <div className="img-container">
        <img src={mainImage} alt="" />
      </div>
      <div className="info-container">
        <h2>Informações</h2>
        <p>Perfil: Lorem ipsum dolor sit amet.</p>
        <p>Seguidores: Lorem ipsum dolor sit amet.</p>
        <p>Localidade: Lorem ipsum dolor sit amet.</p>
        <p>Nome: Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default ResultCard;
