import React from 'react';

function News() {
  const accentColor = '#78a5a3'; 
  const newsItems = [
    { id: 1, date: '15 Мая', year: '2026', title: 'Летняя коллекция: свежесть и легкость', text: 'Рады представить вашему вниманию нашу новую сезонную коллекцию. Легкие букеты с гортензиями, дельфиниумами и полевыми цветами уже доступны к заказу.' },
    { id: 2, date: '10 Мая', year: '2026', title: 'Мастер-класс: секреты флористики', text: 'Приглашаем вас на наш открытый урок. Шеф-флорист студии «Лотос» научит вас тонкостям подбора цветов и созданию устойчивых композиций.' },
    { id: 3, date: '01 Мая', year: '2026', title: 'Экспресс-доставка за 60 минут', text: 'Мы оптимизировали нашу логистику! Теперь мы доставляем букеты по центральным районам города всего за один час после оформления заказа.' },
    { id: 4, date: '25 Апр', year: '2026', title: 'Переход на 100% эко-упаковку', text: 'Студия «Лотос» полностью отказывается от пластика. Теперь мы используем только биоразлагаемые материалы: крафт-бумагу, джут и натуральные ленты.' }
  ];
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '40px', paddingBottom: '60px' }}>
      <h2 style={{ fontSize: '36px', color: '#333', marginBottom: '60px', textAlign: 'center', fontFamily: 'serif', fontWeight: 'normal' }}>Новости студии</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '0 10px' }}>
        {newsItems.map(item => (
          <div key={item.id} style={{
            display: 'flex',
            gap: '30px',
            backgroundColor: '#fdfcf5',
            padding: '30px',
            borderRadius: '15px',
            border: '1px solid #dcd7c9',
            boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
            flexWrap: 'wrap'
          }}>
            <div style={{
              textAlign: 'center',
              width: '80px',
              borderRight: `2px solid ${accentColor}`,
              paddingRight: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minWidth: '80px'
            }}>
              <p style={{ fontSize: '24px', color: accentColor, fontWeight: 'bold', fontFamily: 'serif' }}>{item.date}</p>
              <p style={{ fontSize: '14px', color: '#999' }}>{item.year}</p>
            </div>
            <div style={{ flex: '1', minWidth: '260px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '12px', color: '#333', fontWeight: 'normal', fontFamily: 'serif' }}>
                {item.title}
              </h3>
              <p style={{ color: '#666', lineHeight: '1.7', fontWeight: '300', fontSize: '16px' }}>
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default News;