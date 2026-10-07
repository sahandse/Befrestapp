import './style.css';

type Feature = {
  icon: string;
  title: string;
  text: string;
};

const features: Feature[] = [
  { icon: '↔', title: 'انتقال مستقیم', text: 'فایل‌ها مستقیم بین دو دستگاه روی شبکه محلی منتقل می‌شوند.' },
  { icon: '⌁', title: 'بدون اینترنت', text: 'برای انتقال فایل به اینترنت یا فضای ابری وابسته نیستی.' },
  { icon: '▦', title: 'اتصال با QR', text: 'با اسکن QR دستگاه مقصد را سریع پیدا و متصل کن.' },
  { icon: '▣', title: 'همه نوع فایل', text: 'عکس، ویدیو، موسیقی، اسناد، برنامه، پوشه، متن و لینک.' },
  { icon: '⌾', title: 'دستگاه‌های نزدیک', text: 'دستگاه‌های موجود روی همان شبکه را سریع پیدا کن.' },
  { icon: '◈', title: 'PIN و دستگاه مطمئن', text: 'برای دریافت امن‌تر از PIN و دستگاه‌های مورد اعتماد استفاده کن.' },
];

const screenshots = [
  { src: './images/screenshots/photo_2026-10-07_12-48-31.jpg', title: 'صفحه اصلی' },
  { src: './images/screenshots/photo_2026-10-07_12-48-28.jpg', title: 'ارسال فایل' },
  { src: './images/screenshots/photo_2026-10-07_12-48-29.jpg', title: 'دریافت فایل' },
  { src: './images/screenshots/photo_2026-10-07_12-48-32.jpg', title: 'تنظیمات' },
];

const faqs = [
  ['برای انتقال فایل اینترنت لازم است؟', 'خیر. انتقال روی شبکه محلی بین دستگاه‌ها انجام می‌شود.'],
  ['فایل‌ها روی سرور آپلود می‌شوند؟', 'خیر. بفرست برای انتقال فایل به سرور یا فضای ابری وابسته نیست.'],
  ['چه فایل‌هایی را می‌توان فرستاد؟', 'عکس، ویدیو، موسیقی، سند، برنامه، پوشه، فایل عمومی، متن و لینک.'],
  ['برای دریافت امن‌تر چه امکاناتی دارد؟', 'امکان استفاده از PIN و مدیریت دستگاه‌های مورد اعتماد در برنامه وجود دارد.'],
];

const DIRECT_URL = 'https://github.com/sahandse/befresta/releases/latest';

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
    <nav class="desktop-nav" aria-label="ناوبری">
      <a href="#features">قابلیت‌ها</a>
      <a href="#preview">تصاویر</a>
      <a href="#faq">پرسش‌ها</a>
    </nav>
    <a class="nav-cta" href="#download">دانلود</a>
  </header>

  <main id="top">
    <section class="hero shell">
      <div class="hero-copy">
        <span class="pill"><i></i> بدون اینترنت • مستقیم • ساده</span>
        <h1>فایل‌هات رو<br><em>مستقیم بفرست.</em></h1>
        <p>انتقال فایل بین دو دستگاه روی شبکه محلی؛ بدون آپلود روی سرور، بدون ساخت حساب و بدون مراحل اضافه.</p>

        <div class="actions">
          <a class="download-btn" href="${DIRECT_URL}" target="_blank" rel="noreferrer">
            <span class="download-ico">↓</span>
            <span><b>دانلود مستقیم APK</b><small>آخرین نسخه اندروید</small></span>
          </a>
          <a class="ghost-btn" href="#preview">دیدن محیط واقعی</a>
        </div>

        <div class="trust">
          <span>✓ بدون آپلود</span>
          <span>✓ بدون حساب کاربری</span>
          <span>✓ بدون اینترنت</span>
        </div>
      </div>

      <div class="hero-device" aria-label="تصویر اصلی برنامه بفرست">
        <div class="halo"></div>
        <div class="real-shot hero-shot">
          <img src="./images/screenshots/photo_2026-10-07_12-48-29.jpg" alt="صفحه اصلی واقعی برنامه بفرست" />
        </div>
        <div class="float-badge">⚡ <span><b>انتقال محلی</b><small>مستقیم بین دو دستگاه</small></span></div>
      </div>
    </section>

    <section class="download-hub shell" id="download">
      <div class="section-title compact-title">
        <span>دانلود بفرست</span>
        <h2>روش دلخواهت را انتخاب کن.</h2>
      </div>
      <div class="store-grid">
        <a class="store-card primary-store" href="${DIRECT_URL}" target="_blank" rel="noreferrer">
          <span class="store-icon">↓</span>
          <div><b>دانلود مستقیم</b><small>فایل APK از GitHub Releases</small></div>
          <span class="store-action">دانلود ←</span>
        </a>
        <div class="store-card store-pending" aria-disabled="true">
          <span class="store-icon">B</span>
          <div><b>کافه‌بازار</b><small>لینک رسمی پس از انتشار</small></div>
          <span class="coming">به‌زودی</span>
        </div>
        <div class="store-card store-pending" aria-disabled="true">
          <span class="store-icon">M</span>
          <div><b>مایکت</b><small>لینک رسمی پس از انتشار</small></div>
          <span class="coming">به‌زودی</span>
        </div>
      </div>
    </section>

    <section class="feature-wrap shell" id="features">
      <div class="section-title">
        <span>قابلیت‌ها</span>
        <h2>سریع، خصوصی و بدون پیچیدگی.</h2>
        <p>همه‌چیز برای ارسال و دریافت سریع فایل، در یک رابط خلوت و ساده.</p>
      </div>
      <div class="feature-grid">
        ${features.map(feature => `
          <article class="feature-card">
            <span class="feature-icon">${feature.icon}</span>
            <h3>${feature.title}</h3>
            <p>${feature.text}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="mini-proof shell">
      <div><b>بدون آپلود</b><span>فایل به فضای ابری فرستاده نمی‌شود.</span></div>
      <div><b>بدون حساب</b><span>برای شروع انتقال نیاز به ثبت‌نام نداری.</span></div>
      <div><b>روی شبکه محلی</b><span>انتقال مستقیم بین دستگاه‌های نزدیک.</span></div>
    </section>

    <section class="preview shell" id="preview">
      <div class="section-title">
        <span>محیط واقعی برنامه</span>
        <h2>همان چیزی که داخل بفرست می‌بینی.</h2>
        <p>اسکرین‌شات‌های واقعی برنامه، بدون موکاپ و تصویر ساختگی.</p>
      </div>

      <div class="screens" aria-label="تصاویر برنامه">
        ${screenshots.map((shot, index) => `
          <figure class="real-shot screen-item">
            <img src="${shot.src}" alt="${shot.title} بفرست" loading="${index === 0 ? 'eager' : 'lazy'}" />
            <figcaption>${shot.title}</figcaption>
          </figure>
        `).join('')}
      </div>
      <div class="swipe-hint">← برای دیدن تصاویر بیشتر بکش →</div>
    </section>

    <section class="privacy shell">
      <div class="privacy-card">
        <div>
          <span class="pill"><i></i> حریم خصوصی</span>
          <h2>فایل تو، بین دستگاه‌های خودت.</h2>
          <p>بفرست برای انتقال فایل به فضای ابری وابسته نیست. انتقال روی شبکه محلی انجام می‌شود و مسیر کار کوتاه و مستقیم می‌ماند.</p>
          <div class="privacy-tags">
            <span>بدون فضای ابری</span>
            <span>بدون ثبت‌نام</span>
            <span>اتصال محلی</span>
          </div>
        </div>
        <div class="local-orb"><span>⌁</span><b>Local Transfer</b><small>مستقیم و ساده</small></div>
      </div>
    </section>

    <section class="faq shell" id="faq">
      <div class="section-title">
        <span>پرسش‌های متداول</span>
        <h2>چند جواب کوتاه.</h2>
      </div>
      <div class="faq-list">
        ${faqs.map(([q, a], index) => `
          <details class="faq-item" ${index === 0 ? 'open' : ''}>
            <summary>${q}<span>+</span></summary>
            <p>${a}</p>
          </details>
        `).join('')}
      </div>
    </section>

    <section class="final-download shell">
      <img class="final-logo-image" src="./images/screenshots/logo.jpg" alt="لوگو بفرست" />
      <span class="pill"><i></i> Android</span>
      <h2>آماده‌ای؟ بفرست.</h2>
      <p>آخرین نسخه را مستقیم دریافت کن. لینک بازار و مایکت هم بعد از انتشار رسمی فعال می‌شود.</p>
      <div class="final-actions">
        <a class="download-btn" href="${DIRECT_URL}" target="_blank" rel="noreferrer">
          <span class="download-ico">↓</span>
          <span><b>دانلود مستقیم</b><small>Android • APK</small></span>
        </a>
        <a class="ghost-btn" href="#download">روش‌های دانلود</a>
      </div>
    </section>
  </main>

  <a class="mobile-sticky-download" href="${DIRECT_URL}" target="_blank" rel="noreferrer">
    <span>↓</span>
    <b>دانلود مستقیم بفرست</b>
  </a>

  <footer class="shell">
    <span>© بفرست</span>
    <span>انتقال مستقیم فایل روی شبکه محلی</span>
  </footer>
`;

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href') ?? '');
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
