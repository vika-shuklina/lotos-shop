import React, { useState } from 'react';

function Catalog() {
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const accentColor = '#78a5a3'; 
  const flowers = [
    { id: 1, name: 'Лотос & Пион', price: '6 500 ₽', image: 'https://i.pinimg.com/1200x/a6/7c/3d/a67c3dccf26f3756039e22d09f1553e2.jpg' },
    { id: 2, name: 'Белоснежная Роза', price: '4 800 ₽', image: 'https://i.pinimg.com/736x/bf/8d/57/bf8d57a722328bbe99f9d7676784a506.jpg' },
    { id: 3, name: 'Весеннее Утро', price: '3 900 ₽', image: 'https://i.pinimg.com/736x/eb/74/11/eb74118f02715fcee8b11a51d9c5990c.jpg' },
    { id: 4, name: 'Полевые цветы', price: '2 500 ₽', image: 'https://i.pinimg.com/736x/e2/89/d9/e289d97db90c64d6e868f7fc60661457.jpg' },
    { id: 5, name: 'Лавандовый Ветер', price: '3 200 ₽', image: 'https://i.pinimg.com/1200x/e1/60/38/e1603812cda8709393149b979c850a21.jpg' },
    { id: 6, name: 'Солнечный букет', price: '3 400 ₽', image: 'https://i.pinimg.com/736x/4d/a1/7f/4da17f17b86cf67567142c77d71057bd.jpg' },
    { id: 7, name: 'Элегантная Лилия', price: '5 100 ₽', image: 'https://i.pinimg.com/736x/ba/35/b6/ba35b65db70c98f2888e83bba6c3fcac.jpg' },
    { id: 8, name: 'Авторский "Лотос"', price: '7 500 ₽', image: 'https://i.pinimg.com/1200x/0d/23/b7/0d23b7db377434bd96535b5821cb5e7a.jpg' },
    { id: 9, name: 'Чистая Орхидея', price: '6 100 ₽', image: 'https://i.pinimg.com/736x/5a/83/0f/5a830f1e2f75fc3bc3a8151b8918670e.jpg' },
    { id: 10, name: 'Воздушная Гортензия', price: '5 800 ₽', image: 'https://i.pinimg.com/736x/7a/cb/77/7acb77dd2bded872ff29eb4e8c5c3b5f.jpg' },
    { id: 11, name: 'Коралловый Шик', price: '2 700 ₽', image: 'https://i.pinimg.com/736x/d7/41/ac/d741ac02519a779075d9a86e5018e7ba.jpg' },
    { id: 12, name: 'Букет Ирисов', price: '3 100 ₽', image: 'https://i.pinimg.com/736x/2b/97/7b/2b977b199bd2936d0947e6fefbf6fbbd.jpg' },
    { id: 13, name: 'Розовое Облако', price: '5 500 ₽', image: 'https://i.pinimg.com/1200x/3d/58/c1/3d58c12cb0b94659d0d23d57d2180096.jpg' },
    { id: 14, name: 'Мини розы', price: '6 900 ₽', image: 'https://i.pinimg.com/1200x/e2/2c/7c/e22c7cdd265b88561d0d8d575bdf2100.jpg' },
    { id: 15, name: 'Минимализм Эустомы', price: '4 200 ₽', image: 'https://i.pinimg.com/736x/92/9c/10/929c10ef8aa6679e6fb793d3233fac35.jpg' }
  ];
  const handleBuyClick = (flower) => {
    setSelectedFlower(flower);
    setIsFormOpen(true);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFormOpen(false);
    setIsSuccessOpen(true);
  };
  const closeSuccessWindow = () => {
    setIsSuccessOpen(false);
    setSelectedFlower(null);
  };
  return (
    <div className="catalog-page">
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '36px', color: '#333', fontFamily: 'serif', fontWeight: 'normal' }}>Каталог студии</h2>
        <p style={{ fontSize: '18px', color: '#777', marginTop: '10px', fontWeight: '300' }}>Авторские букеты и композиции</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '40px', justifyContent: 'center', padding: '0 10px' }}>
        {flowers.map(flower => (
          <div key={flower.id} style={{
            backgroundColor: '#fdfcf5', 
            borderRadius: '0px',
            display: 'flex', flexDirection: 'column', 
            overflow: 'hidden',
            border: '1px solid #dcd7c9',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
          onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            <img src={flower.image} alt={flower.name} style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
            <div style={{ padding: '25px', textAlign: 'left', flex: '1', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '20px', color: '#333', marginBottom: '10px', fontWeight: 'normal', fontFamily: 'serif' }}>{flower.name}</h3>
              <p style={{ color: accentColor, fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}>{flower.price}</p>
              <button 
                onClick={() => handleBuyClick(flower)}
                style={{
                  marginTop: 'auto', 
                  padding: '12px 0', 
                  backgroundColor: 'transparent', 
                  border: 'none',
                  borderBottom: `2px solid ${accentColor}`, 
                  color: accentColor, 
                  cursor: 'pointer', 
                  fontSize: '14px', 
                  textTransform: 'uppercase',
                  letterSpacing: '2px', 
                  width: 'fit-content', 
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#333'}
                onMouseOut={(e) => e.currentTarget.style.color = accentColor}>
                Купить →
              </button>
            </div>
          </div>
        ))}
      </div>
      {isFormOpen && selectedFlower && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000,
          display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', backdropFilter: 'blur(5px)'
        }}>
          <div style={{
            backgroundColor: '#fdfcf5', 
            padding: '40px', 
            borderRadius: '20px', 
            width: '100%', maxWidth: '450px', 
            boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
            position: 'relative'
          }}>
            <button onClick={() => setIsFormOpen(false)} style={{ position: 'absolute', top: '15px', right: '20px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#999' }}>×</button>
            <h3 style={{ fontSize: '26px', color: '#333', marginBottom: '15px', fontFamily: 'serif', fontWeight: 'normal', textAlign: 'center' }}>Оформление</h3>
            <div style={{ 
              padding: '15px', 
              backgroundColor: '#fffaf5', 
              borderRadius: '15px', marginBottom: '25px', 
              border: '1px solid #dcd7c9', textAlign: 'center' 
              }}>
              <p style={{ fontSize: '15px', color: '#777', marginBottom: '5px' }}>Вы покупаете:</p>
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                {selectedFlower.name} — <span style={{ color: accentColor }}>{selectedFlower.price}</span>
              </p>
            </div>
            <form onSubmit={handleFormSubmit} style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '15px' }}>
                <input type="text" placeholder="Ваше имя" style={{ width: '100%', padding: '15px 20px', border: '1px solid #dcd7c9', borderRadius: '30px', fontSize: '16px', backgroundColor: '#ffffff' }} required />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <input type="tel" placeholder="+7 (___) ___-__-__" style={{ width: '100%', padding: '15px 20px', border: '1px solid #dcd7c9', borderRadius: '30px', fontSize: '16px', backgroundColor: '#ffffff' }} required />
              </div>
              <div style={{ marginBottom: '30px' }}>
                <input type="text" placeholder="Адрес доставки" style={{ width: '100%', padding: '15px 20px', border: '1px solid #dcd7c9', borderRadius: '30px', fontSize: '16px', backgroundColor: '#ffffff' }} required />
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <button type="button" onClick={() => setIsFormOpen(false)} style={{ flex: 1, padding: '12px', backgroundColor: '#eee', color: '#555', border: 'none', borderRadius: '25px', cursor: 'pointer', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Отмена
                </button>
                <button type="submit" style={{ flex: 1.5, padding: '12px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '25px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Подтвердить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isSuccessOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000,
          display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', backdropFilter: 'blur(5px)'
        }}>
          <div style={{
            backgroundColor: '#fdfcf5', 
            padding: '50px 30px', borderRadius: '20px',
            textAlign: 'center', maxWidth: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '60px', marginBottom: '20px' }}>🌸</div>
            <h3 style={{ fontSize: '26px', color: '#333', marginBottom: '15px', fontFamily: 'serif', fontWeight: 'normal' }}>Заказ принят!</h3>
            <p style={{ color: '#666', marginBottom: '30px', lineHeight: '1.6', fontWeight: '300' }}>
              Мы начали работу над вашим букетом. Наши менеджеры свяжутся с вами в ближайшее время.
            </p>
            <button onClick={closeSuccessWindow} style={{ 
              padding: '12px 40px', 
              backgroundColor: accentColor, 
              color: '#fff', border: 'none', borderRadius: '30px', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', cursor: 'pointer' 
              }}>
              Прекрасно
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalog;