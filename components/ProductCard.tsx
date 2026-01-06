import React from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  image?: string;
  title?: string;
  description?: string;
  price?: number;
  buttonText?: string;
  onButtonClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image = 'https://via.placeholder.com/300x200',
  title = 'Produto',
  description = 'Descrição do produto',
  price = 99.99,
  buttonText = 'Comprar',
  onButtonClick = () => {},
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.footer}>
            <span className={styles.price}>R$ {price.toFixed(2)}</span>
            <button className={styles.button} onClick={onButtonClick}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
