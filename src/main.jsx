import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const programItems = [
  {
    number: "01",
    title: "Materi yang terstruktur",
    body: "Belajar dari konsep dasar sampai strategi ujian dalam alur yang jelas dan mudah diikuti.",
  },
  {
    number: "02",
    title: "Mentor yang menemani",
    body: "Dapatkan arahan dari kakak tingkat dan mentor yang pernah melewati perjalanan yang sama.",
  },
  {
    number: "03",
    title: "Latihan yang relevan",
    body: "Uji pemahaman lewat practice exam dan evaluasi rutin agar persiapan terasa nyata.",
  },
];

function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Plato home">
          <img src="/plato-logo.jpeg" alt="Plato" />
        </a>
        <nav aria-label="Navigasi utama">
          <a href="#tentang">Tentang Plato</a>
          <a href="#program">Program</a>
          <a href="#impact">Impact</a>
        </nav>
        <a className="nav-cta" href="#gabung">
          Gabung Plato <Arrow />
        </a>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <p className="kicker">Pendidikan untuk semua · Indonesia</p>
            <h1>
              Temukan jalanmu menuju <em>kampus impian.</em>
            </h1>
            <p className="hero-lede">
              Plato adalah ruang belajar gratis untuk siswa SMA yang ingin
              melangkah lebih jauh — dengan materi yang terarah, mentor yang
              peduli, dan teman seperjalanan.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#gabung">
                Mulai belajar gratis <Arrow />
              </a>
              <a className="text-link" href="#tentang">
                Kenali Plato <span>↓</span>
              </a>
            </div>
          </div>

          <div className="hero-board" aria-label="Ringkasan program Plato">
            <div className="board-topline">
              <span>PLATO / 2025</span>
              <span>STUDY DESK 01</span>
            </div>
            <div className="board-title">
              Rencana
              <br />
              <span>masa depan</span>
            </div>
            <div className="board-note note-orange">
              <small>CATATAN HARI INI</small>
              <strong>Yang besar selalu dimulai dari satu langkah.</strong>
            </div>
            <div className="board-note note-white">
              <small>PLATO MEMBER</small>
              <strong>
                Belajar bersama,
                <br />
                bertumbuh bersama.
              </strong>
              <span className="note-mark">✳</span>
            </div>
            <div className="board-line">
              <span>01</span>
              <div>
                <b>Target:</b> Universitas impian
              </div>
              <span>→</span>
            </div>
          </div>
        </section>

        <section className="manifesto" id="tentang">
          <div className="manifesto-mark">✳</div>
          <p className="kicker">Kenapa Plato ada</p>
          <h2>Karena potensi tidak boleh berhenti hanya karena akses.</h2>
          <p className="manifesto-body">
            Kami percaya setiap siswa berhak mendapatkan dukungan yang membantu
            mereka percaya pada kemampuannya sendiri. Plato hadir untuk membuat
            persiapan masuk universitas terasa lebih dekat, lebih manusiawi, dan
            bisa diakses siapa saja.
          </p>
        </section>

        <section className="program-section" id="program">
          <div className="section-heading">
            <div>
              <p className="kicker">Yang kami lakukan</p>
              <h2>
                Alat untuk melangkah
                <br />
                lebih percaya diri.
              </h2>
            </div>
            <p className="section-aside">
              Bukan sekadar tempat mengerjakan soal. Plato membantu siswa
              memahami prosesnya dan menemukan cara belajar yang paling cocok
              untuk dirinya.
            </p>
          </div>
          <div className="program-list">
            {programItems.map((item) => (
              <article className="program-item" key={item.number}>
                <span className="program-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span className="item-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="impact-section" id="impact">
          <div className="impact-intro">
            <p className="kicker">Dampak yang ingin kami bangun</p>
            <h2>Lebih banyak mimpi yang punya kesempatan untuk jadi nyata.</h2>
          </div>
          <div className="impact-stats">
            <div>
              <strong>100%</strong>
              <span>Gratis untuk siswa</span>
            </div>
            <div>
              <strong>1:1</strong>
              <span>Belajar yang lebih personal</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Ruang untuk bertumbuh</span>
            </div>
          </div>
        </section>

        <section className="join-section" id="gabung">
          <div>
            <p className="kicker">Untuk siswa, mentor, dan partner</p>
            <h2>Siap mulai langkah pertamamu?</h2>
          </div>
          <a
            className="button button-light"
            href="https://discord.gg/64QaHnDKY"
            target="_blank"
            rel="noreferrer"
          >
            Gabung Discord <Arrow />
          </a>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top">
          <img src="/plato-logo.jpeg" alt="Plato" />
        </a>
        <span>Belajar untuk masa depan yang kamu pilih.</span>
        <a
          className="footer-link"
          href="https://www.linkedin.com/company/99419702/admin/dashboard/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
        <span>© 2026 Plato</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
