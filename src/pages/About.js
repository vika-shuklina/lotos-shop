import React from 'react';

function About() {
  const accentColor = '#78a5a3'; 

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '20px', paddingBottom: '40px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '40px', color: '#333', marginBottom: '20px', fontFamily: 'serif', fontWeight: 'normal' }}>Студия флористики «ЛОТОС»</h2>
        <p style={{ fontSize: '20px', color: accentColor, fontFamily: 'serif', letterSpacing: '1px', textTransform: 'uppercase' }}>Искусство в каждом лепестке</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '0 10px' }}>
        <div>
          <h3 style={{ fontSize: '24px', color: '#333', marginBottom: '15px', fontFamily: 'serif', fontWeight: 'normal' }}>Наша история</h3>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', fontWeight: '300' }}>
            «Лотос» — это команда флористов-художников, объединенных общей страстью к цветам и современному дизайну. Наша студия родилась из желания создавать не просто букеты, а настоящие арт-объекты, которые приносят гармонию и красоту в повседневную жизнь. Мы стремимся к тому, чтобы каждый наш заказ стал уникальным творческим проектом.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: '24px', color: '#333', marginBottom: '15px', fontFamily: 'serif', fontWeight: 'normal' }}>Философия простоты</h3>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', fontWeight: '300' }}>
            Мы вдохновляемся природой и её безупречной простотой. В наших работах мы стремимся к минимализму: меньше лишних деталей, больше фокуса на уникальности каждого цветка. Мы используем только экологичные материалы и натуральные текстуры. Букет от «ЛОТОС» — это всегда свежесть, стиль и безупречный вкус.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: '24px', color: '#333', marginBottom: '15px', fontFamily: 'serif', fontWeight: 'normal' }}>Творческий подход</h3>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#666', fontWeight: '300' }}>
            В нашей команде работают профессионалы, которые постоянно обучаются и следят за мировыми трендами флористики. Мы не просто собираем цветы в пучок, мы создаем настроение и передаем ваши чувства через язык растений. Доверьте нам создание красоты для вашего особого случая.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;