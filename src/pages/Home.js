import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const accentColor = '#78a5a3'; 
  const reviews = [
    { id: 1, name: 'Елена П.', text: 'Заказывала букет на юбилей маме. Он превзошел все ожидания! Очень нежный, свежий и простоял почти две недели. Спасибо флористам студии «Лотос» за вкус и качество.', date: '15.05.2026' },
    { id: 2, name: 'Михаил К.', text: 'Спасибо за оперативную доставку! Забыл про годовщину, ребята выручили — через час шикарный букет был у жены. Сервис на высоте.', date: '10.05.2026' },
    { id: 3, name: 'Анна В.', text: 'Самые стильные букеты в городе! Обожаю ваш минимализм и подход к деталям. Всегда заказываю цветы только у вас.', date: '01.05.2026' }
  ];
  return (
    <div>
      <div style={{ 
        textAlign: 'center', padding: '100px 20px', 
        backgroundColor: '#e0eceb', 
        borderRadius: '20px', marginBottom: '60px',
        backgroundImage: 'url("https://i.pinimg.com/736x/0d/ee/73/0dee73e6f822be88cac8288a328a6d5c.jpg")',
        backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', position: 'relative'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.25)', borderRadius: '20px' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '54px', marginBottom: '20px', fontFamily: 'serif', letterSpacing: '2px', textTransform: 'uppercase' }}>Чистая красота</h1>
          <p style={{ fontSize: '20px', maxWidth: '650px', margin: '0 auto 40px auto', lineHeight: '1.6', fontWeight: '300' }}>
            Авторские композиции, вдохновленные природой. Простота, элегантность и свежесть в каждом букете от студии «Лотос».
          </p>
          <Link to="/catalog" style={{ 
            backgroundColor: accentColor, 
            color: '#fff', padding: '15px 45px', textDecoration: 'none', borderRadius: '30px', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', display: 'inline-block', 
            boxShadow: '0 4px 10px rgba(120,165,163,0.3)' 
            }}>
            Смотреть каталог
          </Link>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '50px', alignItems: 'center', marginBottom: '80px', padding: '0 10px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '260px' }}>
          <img src="https://i.pinimg.com/1200x/ba/79/1e/ba791efd759cda4661b00de8aa411872.jpg" alt="Цветок лотоса" style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '10px' }} />
        </div>
        <div style={{ flex: '1.2', minWidth: '260px' }}>
          <h2 style={{ fontSize: '34px', color: '#333', marginBottom: '25px', fontFamily: 'serif', fontWeight: 'normal' }}>Гармония и вдохновение</h2>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8', fontWeight: '300', marginBottom: '15px' }}>
            В студии «Лотос» мы верим, что флористика — это язык эмоций. Мы стремимся к гармонии формы и цвета, используя только самые свежие и качественные растения. 
          </p>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8', fontWeight: '300' }}>
            Наш стиль — это современный минимализм и природная эстетика. Мы осознанно отказываемся от сложной пластиковой упаковки, отдавая предпочтение экологичным материалам.
          </p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 10px' }}>
        <h2 style={{ fontSize: '34px', color: '#333', marginBottom: '50px', fontFamily: 'serif', fontWeight: 'normal' }}>
          Говорят наши <span style={{ color: accentColor }}>клиенты</span>
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          {reviews.map(review => (
            <div key={review.id} style={{
              backgroundColor: '#fdfcf5',
              border: '1px solid #dcd7c9',
              padding: '30px',
              borderRadius: '15px',
              width: '320px',
              textAlign: 'left',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ fontSize: '50px', color: accentColor, fontFamily: 'serif', lineHeight: '1', marginBottom: '10px' }}>“</div>
              <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6', fontWeight: '300', marginBottom: '20px', flex: '1' }}>
                {review.text}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: '15px' }}>
                <p style={{ fontSize: '16px', color: '#333', fontWeight: 'bold' }}>{review.name}</p>
                <p style={{ fontSize: '14px', color: '#999' }}>{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="full-width-block" style={{ 
        backgroundColor: '#fdfcf5', 
        padding: '80px 20px', textAlign: 'center', 
        borderTop: '1px solid #dcd7c9', borderBottom: '1px solid #dcd7c9' 
        }}>
        <h2 style={{ fontSize: '34px', color: '#333', marginBottom: '20px', fontFamily: 'serif', fontWeight: 'normal' }}>Индивидуальный заказ</h2>
        <p style={{ fontSize: '18px', color: '#666', maxWidth: '650px', margin: '0 auto 50px auto', lineHeight: '1.6', fontWeight: '300' }}>
          Расскажите нам о своих предпочтениях, и наши флористы создадут уникальную композицию специально для вас.
        </p>
        <form style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }} onSubmit={handleFormSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#777', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>E-mail</label>
            <input type="email" placeholder="example@mail.ru" style={{ width: '100%', padding: '15px 20px', border: '1px solid #dcd7c9', borderRadius: '30px', fontSize: '16px', backgroundColor: '#ffffff', outline: 'none' }} required />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#777', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>Ваше имя</label>
            <input type="text" placeholder="Мария" style={{ width: '100%', padding: '15px 20px', border: '1px solid #dcd7c9', borderRadius: '30px', fontSize: '16px', backgroundColor: '#ffffff', outline: 'none' }} required />
          </div>
          <div style={{ marginBottom: '40px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#777', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>Пожелания</label>
            <textarea placeholder="Опишите букет мечты..." rows="4" style={{ width: '100%', padding: '15px 20px', border: '1px solid #dcd7c9', borderRadius: '20px', fontSize: '16px', backgroundColor: '#ffffff', outline: 'none', resize: 'vertical' }} required></textarea>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit" style={{ width: '100%', backgroundColor: '#333', color: '#ffffff', padding: '18px', border: 'none', borderRadius: '30px', fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              Отправить запрос
            </button>
          </div>
        </form>
      </div>
      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000,
          display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', backdropFilter: 'blur(3px)'
        }}>
          <div style={{
            backgroundColor: '#fdfcf5', 
            padding: '50px 30px', borderRadius: '20px',
            textAlign: 'center', width: '100%', maxWidth: '420px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '60px', marginBottom: '20px' }}>🪷</div>
            <h3 style={{ fontSize: '26px', color: '#333', marginBottom: '15px', fontFamily: 'serif', fontWeight: 'normal' }}>Запрос принят</h3>
            <p style={{ color: '#666', marginBottom: '30px', lineHeight: '1.6', fontWeight: '300' }}>
              Спасибо за обращение. Наши флористы свяжутся с вами в ближайшее время.</p>
            <button 
              onClick={() => setIsModalOpen(false)} 
              style={{ 
                padding: '12px 40px', 
                backgroundColor: accentColor, 
                color: '#fff', border: 'none', borderRadius: '30px', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', cursor: 'pointer' 
              }}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;