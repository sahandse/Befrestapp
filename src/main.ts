import './style.css';

const features = [
  { icon: '↔', title: 'مستقیم بین دو دستگاه', text: 'فایل‌ها بدون آپلود روی سرور و در شبکه محلی منتقل می‌شوند.' },
  { icon: '▣', title: 'هر نوع فایل', text: 'عکس، ویدیو، موسیقی، برنامه، سند، پوشه و متن را بفرست.' },
  { icon: '⌁', title: 'اتصال ساده', text: 'دستگاه نزدیک را پیدا کن یا با QR مستقیماً متصل شو.' },
];

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) throw new Error('App root not found');

app.innerHTML = `
  <div class="ambient ambient-a"></div>
  <div class="ambient ambient-b"></div>

  <header class="nav shell">
    <a class="brand" href="#top" aria-label="بفرست">
      <img class="brand-image" src="./images/screenshots/logo.jpg" alt="لوگو بفرست" />
      <strong>بفرست</strong>
    </a>
    <a class="nav-cta" href="#download">دانلود</a>
  </header>

  <main id="top">
    <section class="hero shell">
      <div class="hero-copy">
        <span class="pill"><i></i> بدون اینترنت • مستقیم • ساده</span>
        <h1>فایلت را<br><em>فقط بفرست.</em></h1>
        <p>
          انتقال سریع فایل بین دو دستگاه روی شبکه محلی؛ بدون اینترنت، بدون آپلود روی سرور و بدون مراحل اضافی.
        </p>

        <div class="actions" id="download">
          <a class="download-btn" href="https://github.com/sahandse/befresta/releases/latest" target="_blank" rel="noreferrer">
            <span class="download-ico">↓</span>
            <span><b>دانلود آخرین نسخه</b><small>Android • APK</small></span>
          </a>
          <a class="ghost-btn" href="#preview">دیدن محیط برنامه</a>
        </div>

        <div class="trust">
          <span>◉ انتقال محلی</span>
          <span>⌁ بدون سرور</span>
          <span>⚡ سریع</span>
        </div>
      </div>

      <div class="hero-device" aria-label="پیش نمایش واقعی بفرست">
        <div class="halo"></div>
        <div class="real-shot hero-shot">
          <img src="./images/screenshots/photo_2026-10-07_12-48-31.jpg" alt="نمای اصلی برنامه بفرست" />
        </div>
        <div class="float-badge">⚡ <span><b>بدون اینترنت</b><small>شبکه محلی</small></span></div>
      </div>
    </section>

    <section class="feature-grid shell">
      ${features.map(feature => `
        <article class="feature-card">
          <span class="feature-icon">${feature.icon}</span>
          <h3>${feature.title}</h3>
          <p>${feature.text}</p>
        </article>
      `).join('')}
    </section>

    <section class="preview shell" id="preview">
      <div class="section-title">
        <span>داخل برنامه</span>
        <h2>ساده، سریع و خلوت.</h2>
        <p>طراحی نزدیک به خود اپ؛ با تمرکز روی ارسال و دریافت.</p>
      </div>

      <div class="screens">
        <figure class="real-shot"><img src="./images/screenshots/photo_2026-10-07_12-48-28.jpg" alt="اسکرین شات بفرست ۱" /></figure>
        <figure class="real-shot"><img src="./images/screenshots/photo_2026-10-07_12-48-29.jpg" alt="اسکرین شات بفرست ۲" /></figure>
        <figure class="real-shot"><img src="./images/screenshots/photo_2026-10-07_12-48-31.jpg" alt="اسکرین شات بفرست ۳" /></figure>
        <figure class="real-shot"><img src="./images/screenshots/photo_2026-10-07_12-48-32.jpg" alt="اسکرین شات بفرست ۴" /></figure>
      </div>
    </section>

    <section class="privacy shell">
      <div class="privacy-card">
        <div>
          <span class="pill"><i></i> حریم خصوصی</span>
          <h2>فایل تو، بین دستگاه‌های خودت.</h2>
          <p>بفرست برای انتقال فایل به فضای ابری وابسته نیست. انتقال در شبکه محلی انجام می‌شود.</p>
        </div>
        <div class="local-orb"><span>⌁</span><b>Local Transfer</b><small>بدون آپلود روی سرور</small></div>
      </div>
    </section>

    <section class="final-download shell">
      <img class="final-logo-image" src="./images/screenshots/logo.jpg" alt="لوگو بفرست" />
      <h2>آماده‌ای؟ بفرست.</h2>
      <p>آخرین نسخه Android را دریافت کن.</p>
      <a class="download-btn" href="https://github.com/sahandse/befresta/releases/latest" target="_blank" rel="noreferrer">
        <span class="download-ico">↓</span>
        <span><b>دانلود بفرست</b><small>آخرین نسخه منتشرشده</small></span>
      </a>
    </section>
  </main>

  <footer class="shell"><span>© بفرست</span><span>انتقال مستقیم فایل روی شبکه محلی</span></footer>
`;

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href') ?? '');
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
