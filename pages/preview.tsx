import ProductCard from '@/components/ProductCard';

export default function Preview() {
  return (
    <div style={{ padding: '40px', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1>Preview - ProductCard</h1>
      
      <section style={{ margin: '40px 0' }}>
        <h2>Padrão</h2>
        <ProductCard />
      </section>

      <section style={{ margin: '40px 0' }}>
        <h2>Com dados customizados</h2>
        <ProductCard
          title="Fone Bluetooth"
          description="Som de qualidade premium com cancelamento de ruído"
          price={299.90}
          image="https://via.placeholder.com/300x200?text=Fone"
          buttonText="Adicionar ao carrinho"
        />
      </section>

      <section style={{ margin: '40px 0' }}>
        <h2>Outro produto</h2>
        <ProductCard
          title="Smartwatch"
          description="Monitor sua saúde e atividades físicas"
          price={499.99}
          image="https://via.placeholder.com/300x200?text=Smartwatch"
          buttonText="Comprar agora"
        />
      </section>
    </div>
  );
}
