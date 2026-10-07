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
      <span class="logo-mark"><i>➜</i><i>←</i></span>
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

      <div class="hero-device" aria-label="پیش نمایش بفرست">
        <div class="halo"></div>
        <div class="phone">
          <div class="status"><span>۱۲:۳۲</span><span>◉ 4G ▮▮▮</span></div>
          <div class="app-head">
            <div><h3>بفرست</h3><small>بدون اینترنت • مستقیم • ساده</small></div>
            <span class="round-icon">☷</span>
          </div>

          <div class="transfer-card receive">
            <span class="corner-icon">↙</span>
            <div><h4>دریافت</h4><p>گوشی را آماده دریافت کن</p></div>
            <button>باز کردن ←</button>
          </div>

          <div class="transfer-card send">
            <span class="corner-icon">↗</span>
            <div><h4>ارسال</h4><p>فایل را مستقیم بفرست</p></div>
            <button>باز کردن ←</button>
          </div>
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
        <article class="screen">
          <header>ارسال <span>→</span></header>
          <h3>چی می‌خوای بفرستی؟</h3>
          <p>محتوا را انتخاب کن و بعد روی دستگاه مقصد بزن</p>
          <div class="tile-grid">
            <span>▧<small>عکس</small></span><span>▶<small>ویدیو</small></span>
            <span>♫<small>موسیقی</small></span><span>▤<small>اسناد</small></span>
            <span>▱<small>فایل‌ها</small></span><span>◉<small>برنامه‌ها</small></span>
            <span>□<small>پوشه</small></span><span>≡<small>متن و لینک</small></span>
          </div>
          <div class="nearby"><b>دستگاه‌های نزدیک</b><span>◎</span><small>دستگاه مقصد روی همین شبکه نمایش داده می‌شود</small></div>
        </article>

        <article class="screen focus">
          <header>دریافت <span>→</span></header>
          <div class="receive-panel"><span>↙</span><b>آماده دریافت</b><small>دستگاه شما</small></div>
          <div class="list-row"><span>⚡</span><div><b>دریافت سریع</b><small>درخواست‌های شبکه محلی</small></div></div>
          <div class="list-row"><span>▦</span><div><b>اتصال با QR</b><small>اتصال مستقیم بین دو دستگاه</small></div></div>
        </article>

        <article class="screen">
          <header>تنظیمات <span>→</span></header>
          <div class="settings-card">
            <h3>هویت دستگاه</h3>
            <label>نام دستگاه</label>
            <div class="input">F3</div>
            <button>ذخیره نام دستگاه</button>
          </div>
          <div class="settings-card">
            <h3>امنیت دریافت</h3>
            <div class="setting-row"><span>PIN برای دریافت</span><i></i></div>
          </div>
        </article>

        <article class="screen">
          <header>بفرست <span>☷</span></header>
          <div class="home-card blue"><span>↙</span><b>دریافت</b><small>گوشی را آماده دریافت کن</small></div>
          <div class="home-card rose"><span>↗</span><b>ارسال</b><small>فایل را مستقیم بفرست</small></div>
        </article>
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
      <div class="final-logo">↔</div>
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
