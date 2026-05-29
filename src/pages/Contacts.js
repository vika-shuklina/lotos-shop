import React from 'react';

function Contacts() {
  const accentColor = '#78a5a3'; 

  return (
    <div style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '60px', maxWidth: '800px', margin: '0 auto', padding: '40px 10px' }}>
      <h2 style={{ fontSize: '36px', color: '#333', marginBottom: '30px', fontFamily: 'serif', fontWeight: 'normal' }}>Свяжитесь с нами</h2>
      <p style={{ fontSize: '19px', color: '#555', marginBottom: '40px', fontWeight: '300', lineHeight: '1.6' }}>
        Студия флористики <span style={{ color: accentColor, fontWeight: 'bold' }}>«ЛОТОС»</span>. Мы всегда рады вашим звонкам и сообщениям.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '50px' }}>
        <p style={{ fontSize: '18px' }}>📞 Телефон: <strong>+7 (800) 555-35-35</strong></p>
        <p style={{ fontSize: '18px' }}>✉️ E-mail: <a href="mailto:hello@lotos.flower" style={{ color: accentColor, textDecoration: 'none' }}>hello@lotos.flower</a></p>
      </div>
      <div style={{ 
        marginTop: '60px', 
        borderTop: '1px solid #dcd7c9', 
        paddingTop: '40px', 
        maxWidth: '650px', 
        margin: '60px auto 0' 
      }}>
        <h3 style={{ fontSize: '26px', color: '#333', marginBottom: '40px', fontFamily: 'serif', fontWeight: 'normal' }}>Наша команда</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          <div style={{ 
            textAlign: 'left', 
            backgroundColor: '#fdfcf5', 
            padding: '25px', borderRadius: '15px', 
            border: '1px solid #dcd7c9' 
            }}>
            <p style={{ fontSize: '20px', color: '#333', fontWeight: 'bold', marginBottom: '5px' }}>Карамзина Мария</p>
            <p style={{ fontSize: '16px' }}>✉️ <a href="mailto:karamzina@sfedu.ru" style={{ color: accentColor, textDecoration: 'none' }}>karamzina@sfedu.ru</a></p>
          </div>
          <div style={{ 
            textAlign: 'left', 
            backgroundColor: '#fdfcf5', 
            padding: '25px', borderRadius: '15px', 
            border: '1px solid #dcd7c9' 
            }}>
            <p style={{ fontSize: '20px', color: '#333', fontWeight: 'bold', marginBottom: '5px' }}>Шуклина Виктория</p>
            <p style={{ fontSize: '16px' }}>✉️ <a href="mailto:Dalferova@sfedu.ru" style={{ color: accentColor, textDecoration: 'none' }}>vshuklina@sfedu.ru</a></p>
          </div>
          <div style={{ 
            textAlign: 'left', 
            backgroundColor: '#fdfcf5', 
            padding: '25px', borderRadius: '15px', 
            border: '1px solid #dcd7c9' 
            }}>
            <p style={{ fontSize: '20px', color: '#333', fontWeight: 'bold', marginBottom: '5px' }}>Алферова Дарья</p>
            <p style={{ fontSize: '16px' }}>✉️ <a href="mailto:Dalferova@sfedu.ru" style={{ color: accentColor, textDecoration: 'none' }}>Dalferova@sfedu.ru</a></p>
          </div>
        </div>
      </div>
      <p style={{ fontSize: '16px', color: '#999', marginTop: '60px', fontWeight: '300' }}>Прием заказов онлайн: Пн-Вс с 10:00 до 21:00</p>
    </div>
  );
}

export default Contacts;