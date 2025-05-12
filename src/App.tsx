
import './CryptoArbitragePromo.css';
import screen from './assets/screen.jpg';

const CryptoArbitragePromo = () => (
  <div className="promo-container">
    {/* Header */}
    <div className="promo-header">
      <h1 className="promo-title">Зарабатывай от $400 в неделю на криптоарбитраже!</h1>
      <p className="promo-subtitle">Хочешь выйти на реальный доход с криптовалюты в 2025 году? Я покажу,
        как это делают мои ученики и дам тебе пошаговую схему бесплатно.</p>
      <p className="promo-description">
        Торгуй на официальных биржах и получай процент с каждой сделки.
Хочешь выйти на стабильный доход? Пиши — тебя обучат и предоставят личного менеджера.
      </p>
    </div>

    {/* Content with list and screenshot */}
    <div className="promo-content">
      <div className="promo-list">
        <h2 className="promo-list-title">Вот что ты получишь:</h2>
        <ul className="promo-features">
          <li>Пошаговую инструкцию, как заработать свои первые $1000</li>
          <li>Торговые сигналы каждые два дня</li>
          <li>Бесплатное обучение с нуля</li>
          <li>Консультации 7 дней в неделю</li>
        </ul>
      </div>
      <div className="promo-screenshot">
        <img src={screen} alt="Пример прибыли в USDT" className='img' />
      </div>
      <div className="promo-access">
      <div className="access-box">
        <h3>Успей попасть в команду первых 100 человек!</h3>
        <p>Следующий набор будет не скоро — не упусти шанс начать зарабатывать уже сейчас.</p>
        <button className="btn-telegram">Свяжись с менеджером в Telegram</button>
      </div>
      <div className="access-note">
        <div className="note">
          <p className="label">НЕ ПРОПУСТИ</p>
          <p className="text">Я не расдаю эту схему массово</p>
        </div>
      </div>
    </div>
    </div>

  

    {/* FAQs */}
    <div className="promo-faq">
      <div className="faq-item">
        <h4 className="trik">Часто задаваемые вопросы:</h4>
        <h4>Нужно ли вкладывать деньги?</h4>
        <p>Да, но вы можете начать с любой удобной для вас суммы.</p>
      </div>
      <div className="faq-item">
        <h4>Могу ли я потерять деньги?</h4>
        <p>Вы торгуете только на проверенных мировых биржах со своей репутацией. Мы не предлагаем сторонние платформы. Все сделки вы совершаете самостоятельно на своих аккаунтах.</p>
      </div>
      <div className="faq-item">
        <h4>В чём ваш интерес?</h4>
        <p>Мы зарабатываем 20% с вашей прибыли — это оплата за сопровождение и помощь в сделках.</p>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="promo-footer">
      <p>Готов начать?</p>
      <button className="btn-primary">Получить доступ сейчас</button>
    </div>
  </div>
);

export default CryptoArbitragePromo;
