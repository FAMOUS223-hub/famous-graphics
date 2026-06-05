/* ─── Modal ─── */
const modalOverlay = document.getElementById("modalOverlay");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

const modalData = {
  learnMore: {
    title: "Meet the <span>Founder</span>",
    body: "<div style=\"display:flex;gap:2rem;align-items:start;flex-wrap:wrap;\"><div style=\"flex-shrink:0;\"><div style=\"width:10rem;height:10rem;border-radius:50%;background:linear-gradient(135deg,#c9b458,#b8960f);display:flex;align-items:center;justify-content:center;font-size:4rem;color:#fff;font-weight:700;\">FG</div></div><div style=\"flex:1;min-width:20rem;\"><h3 style=\"font-size:2rem;color:#1a1a1a;margin-bottom:0.5rem;\">FAMOUS</h3><p style=\"color:#c9b458;font-weight:600;margin-bottom:1rem;\">CEO &amp; Creative Director</p><p style=\"color:#666;line-height:1.7;\">Founder of Famous Graphics, I've dedicated my career to helping brands tell their stories through exceptional design. What started as a passion for visual art has grown into a full-service creative studio serving clients across Ghana and beyond.</p></div></div><p style=\"color:#666;line-height:1.7;margin-top:1.5rem;\">Every project I take on is driven by a simple belief: great design has the power to transform businesses. I work hand-in-hand with each client to ensure their vision isn't just met — it's exceeded.</p>",
    cta: { text: "Work With Me", href: "contact.html" }
  },
  portfolio: {
    title: "Our <span>Portfolio</span>",
    body: "<p style=\"color:#666;line-height:1.7;margin-bottom:2rem;\">Here's a selection of work we've delivered for our clients. From brand identity to social media, every project represents our commitment to excellence.</p><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;\"><div style=\"background:linear-gradient(135deg,#f5e6a3,#c9b458);border-radius:1.2rem;padding:3rem 2rem;text-align:center;\"><div style=\"font-size:3rem;margin-bottom:1rem;\">✨</div><h4 style=\"font-size:1.4rem;color:#1a1a1a;font-weight:700;\">Brand Identity</h4><p style=\"font-size:1.2rem;color:#555;margin-top:0.5rem;\">Complete brand systems</p></div><div style=\"background:linear-gradient(135deg,#1a1a1a,#333);border-radius:1.2rem;padding:3rem 2rem;text-align:center;\"><div style=\"font-size:3rem;margin-bottom:1rem;\">🎨</div><h4 style=\"font-size:1.4rem;color:#fff;font-weight:700;\">Logo Design</h4><p style=\"font-size:1.2rem;color:#aaa;margin-top:0.5rem;\">Custom logo creation</p></div><div style=\"background:linear-gradient(135deg,#c9b458,#f5e6a3);border-radius:1.2rem;padding:3rem 2rem;text-align:center;\"><div style=\"font-size:3rem;margin-bottom:1rem;\">📷</div><h4 style=\"font-size:1.4rem;color:#1a1a1a;font-weight:700;\">Social Media</h4><p style=\"font-size:1.2rem;color:#555;margin-top:0.5rem;\">Scroll-stopping visuals</p></div><div style=\"background:linear-gradient(135deg,#f8f8f8,#e0e0e0);border-radius:1.2rem;padding:3rem 2rem;text-align:center;\"><div style=\"font-size:3rem;margin-bottom:1rem;\">📑</div><h4 style=\"font-size:1.4rem;color:#1a1a1a;font-weight:700;\">Print Design</h4><p style=\"font-size:1.2rem;color:#555;margin-top:0.5rem;\">Flyers, cards & more</p></div></div>",
    cta: { text: "View Full Gallery", href: "gallery.html" }
  },
  startProject: {
    title: "Start Your <span>Project</span>",
    body: "<p>Ready to bring your vision to life? Get in touch with us and we'll walk you through our simple 4-step process:</p><ul><li><strong>Discovery</strong> — We learn about your brand and goals</li><li><strong>Concept</strong> — We develop initial design directions</li><li><strong>Refine</strong> — We perfect every detail with your feedback</li><li><strong>Deliver</strong> — You receive production-ready files</li></ul>",
    cta: { text: "Contact Us Now", href: "contact.html" }
  },
  logoDesign: {
    title: "Logo <span>Design</span>",
    body: "<p>Distinctive logos that capture your brand's essence at a single glance. Every mark is crafted to be timeless, versatile, and unforgettable.</p><ul><li>Custom concept exploration</li><li>Vector formats included</li><li>Color variation sets</li><li>Unlimited revisions</li></ul>",
    cta: { text: "Start Your Logo", href: "contact.html" }
  },
  brandIdentity: {
    title: "Brand <span>Identity</span>",
    body: "<p>Full visual identity systems including color palettes, typography guidelines, and brand assets that ensure consistency across all media.</p><ul><li>Brand style guides</li><li>Typography systems</li><li>Color architecture</li><li>Brand asset library</li></ul>",
    cta: { text: "Build Your Brand", href: "contact.html" }
  },
  flyerPrint: {
    title: "Flyer &amp; <span>Print Design</span>",
    body: "<p>High-impact print materials — from flyers to posters — designed to grab attention and communicate your message with clarity and style.</p><ul><li>Print-ready files</li><li>Bleed &amp; crop marks</li><li>Multiple size options</li><li>CMYK color mode</li></ul>",
    cta: { text: "Get a Quote", href: "contact.html" }
  },
  socialMedia: {
    title: "Social Media <span>Designs</span>",
    body: "<p>Scroll-stopping visuals for every platform — Instagram, Facebook, LinkedIn, Twitter, and more — optimized for engagement and brand consistency.</p><ul><li>Platform-optimized sizes</li><li>Animated posts</li><li>Story templates</li><li>Content calendars</li></ul>",
    cta: { text: "Boost Your Socials", href: "contact.html" }
  },
  businessCards: {
    title: "Business Cards &amp; <span>Stationery</span>",
    body: "<p>Premium business cards and branded stationery that leave a lasting impression. From minimalist to elaborate, we bring your vision to life.</p><ul><li>Premium paper options</li><li>Letterheads &amp; envelopes</li><li>Die-cut possibilities</li><li>Foil stamping ready</li></ul>",
    cta: { text: "Order Now", href: "contact.html" }
  },
  brochures: {
    title: "Brochures &amp; <span>Invitations</span>",
    body: "<p>Elegant brochures and invitation cards designed to inform, delight, and inspire action — whether for events, products, or corporate communications.</p><ul><li>Multi-fold layouts</li><li>Event suites</li><li>RSVP integrations</li><li>Digital &amp; print ready</li></ul>",
    cta: { text: "Get Started", href: "contact.html" }
  },
  /* ─── Gallery Project Modals ─── */
  eagleTransport: {
    title: "Eagle Transport — <span>Logistics That Moves</span>",
    body: "<p>Eagle Transport came to us with a solid fleet but zero brand presence. Their trucks were on the road every day — but nobody remembered their name. We crafted a bold, high-visibility logo that turned every vehicle into a moving billboard.</p><p>Within weeks of the rebrand, client calls tripled. Drivers reported people pulling out their phones to snap pictures of the trucks. What started as a small logistics operation is now the most recognised haulage brand in the region — revenue up 60% and still climbing.</p>",
    cta: { text: "Build Your Brand", href: "contact.html" },
    images: ['img/designimgs/LOGOUT.jpg', 'img/designimgs/NEW LOGO.png', 'img/designimgs/NEW LOGO00.jpg', 'img/designimgs/NEW LOGO1.jpg']
  },
  meridianHealth: {
    title: "Meridian Health — <span>Trust That Heals</span>",
    body: "<p>Meridian Health had the facilities, the staff, the expertise — but their visual identity felt cold and clinical. Patients couldn't tell them apart from any other clinic. We built a warm, human-centred brand system — from the logo and colour palette to patient brochures, signage, and social presence.</p><p>The impact was immediate. Patient trust scores shot up, appointment bookings doubled, and they opened two more branches within a year. A brand that people <em>feel</em> — that's what turns healthcare into a thriving enterprise.</p>",
    cta: { text: "Transform Your Brand", href: "contact.html" },
    images: ['img/designimgs/CHRUCH.jpg', 'img/designimgs/Document.jpg', 'img/designimgs/ANNOINTED VESSELS.jpg', 'img/designimgs/MENORAH_.jpg']
  },
  urbanThreads: {
    title: "Urban Threads — <span>Fashion That Trends</span>",
    body: "<p>Urban Threads had the styles, but their Instagram was silent. Nobody was seeing their drops. We stepped in with a full social media visual strategy — scroll-stopping posts, Reel templates, campaign graphics, and a consistent brand voice that matched their streetwear energy.</p><p>The turnaround was explosive. Engagement jumped 400% in 60 days. Their drops now sell out in hours. What used to be a side hustle is now a full-time fashion empire — and we're proud to have designed every pixel of the ride.</p>",
    cta: { text: "Make Your Brand Pop", href: "contact.html" },
    images: ['img/designimgs/ZACK SUIT PIC.png', 'img/designimgs/MARLIAN NAMING CEREMONY.jpg', 'img/designimgs/MARLIAN66.jpg', 'img/designimgs/red.jpg']
  },
  primeProperties: {
    title: "Prime Properties — <span>Print That Sells</span>",
    body: "<p>Prime Properties was sitting on premium listings but their marketing materials looked amateur. Brochures, flyers, business cards — none of it reflected the calibre of the homes they were selling. We redesigned their entire print suite with a luxurious, high-end feel.</p><p>The result? Agents reported that clients kept the brochures instead of throwing them away. Showings increased by 50%, and Prime closed 15+ deals directly attributed to the new print collateral. When your print looks like a million bucks, your properties sell like one too.</p>",
    cta: { text: "Upgrade Your Materials", href: "contact.html" },
    images: ['img/designimgs/MENORAH CORP.jpg', 'img/designimgs/AMMAT SIS.jpg', 'img/designimgs/IMG_5287.jpg', 'img/designimgs/MY ADS ON MAC.jpg']
  },
  apexConsulting: {
    title: "Apex Consulting — <span>Strategy Meets Style</span>",
    body: "<p>Apex Consulting had blue-chip advice but a no-name look. Decision-makers couldn't take them seriously because their brand didn't match their expertise. We delivered a sharp, authoritative logo and a full brand identity that screamed credibility.</p><p>Within three months, Apex closed five major corporate retainers — clients who later admitted the polished brand was a deciding factor. Today they charge premium rates and have a waiting list. Smart strategy needs a smart face, and we gave them one.</p>",
    cta: { text: "Get Noticed", href: "contact.html" },
    images: ['img/designimgs/NEW LOGO.png', 'img/designimgs/LOGOUT.jpg', 'img/designimgs/NEW LOGO00.jpg', 'img/designimgs/Artboard 1.jpg']
  },
  novaTech: {
    title: "Nova Tech — <span>Innovation Branded</span>",
    body: "<p>Nova Tech was building revolutionary software but looked like a garage startup. Investors couldn't see past the amateur branding. We created a futuristic, clean brand identity — logo, deck templates, app UI assets, and a website mockup — that positioned them as the next big thing.</p><p>The rebrand unlocked the funding round they'd been chasing. They secured 6-figure investment within weeks of unveiling the new look. Today they're scaling fast, and their brand opens doors that their tech alone couldn't.</p>",
    cta: { text: "Look The Part", href: "contact.html" },
    images: ['img/designimgs/MY TECH CV.jpg', 'img/designimgs/Artboard 2.jpg', 'img/designimgs/Screenshot 2026-03-24 at 4.56.46 AM.png', 'img/designimgs/Artboard 2yy.JPG']
  },
  bloomBeauty: {
    title: "Bloom Beauty — <span>Beauty That Stops The Scroll</span>",
    body: "<p>Bloom Beauty had incredible products but their content calendar was inconsistent and low-impact. Followers weren't growing, sales were flat. We designed a cohesive social media identity — bold colour palette, templated post formats, story highlights, and a monthly content strategy.</p><p>In 90 days, their following grew by 120%, and direct-message orders became their biggest revenue channel. Bloom went from a small beauty brand to a recognised name in the industry. When your feed is art, customers line up.</p>",
    cta: { text: "Elevate Your Brand", href: "contact.html" },
    images: ['img/designimgs/MARLIAN66.jpg', 'img/designimgs/ZACK SUIT PIC.png', 'img/designimgs/MARLIAN NAMING CEREMONY.jpg', 'img/designimgs/REGI.jpg']
  },
  grandOpening: {
    title: "Grand Opening — <span>First Impressions That Last</span>",
    body: "<p>An event is only as memorable as its invitation. Grand Opening needed a suite that would make their launch impossible to ignore. We designed a full invitation suite — save-the-dates, formal invites, RSVP cards, thank-you notes, and event signage — all tied together with a stunning gold-and-black motif.</p><p>The result was a sold-out event with guests raving about the presentation. The client has since booked us for every major event they host. When you walk in and everything looks this good, you already know it's going to be a success.</p>",
    cta: { text: "Plan Your Launch", href: "contact.html" },
    images: ['img/designimgs/ANNOINTED VESSELS.jpg', 'img/designimgs/ANNOINTED VESSELS22.jpg', 'img/designimgs/ANNOINTED VESSELS23.jpg', 'img/designimgs/MARLIAN2.jpg']
  }
};

function renderProjectModal(data) {
  const mainImage = data.images[0] || '';
  const extraImages = data.images.slice(1) || [];
  let galleryHtml = '';
  if (extraImages.length) {
    galleryHtml = `
      <div class="project-gallery">
        <h4 class="project-gallery-title">More Project Images</h4>
        <div class="project-gallery-grid">
          ${extraImages.map(function(img) {
            return '<div class="project-gallery-item" onclick="openLightbox(\'' + img.replace(/'/g, "\\'") + '\')"><img src="' + img + '" alt="Project image"></div>';
          }).join('')}
        </div>
      </div>`;
  }
  return '<div class="project-modal">' +
    '<div class="project-hero" onclick="openLightbox(\'' + mainImage.replace(/'/g, "\\'") + '\')">' +
      '<img src="' + mainImage + '" alt="Project preview"></div>' +
    '<div class="project-content">' +
      '<h2>' + data.title + '</h2>' +
      data.body +
      galleryHtml +
      '<a href="' + data.cta.href + '" class="modal-cta">' + data.cta.text + '</a></div></div>';
}

function openModal(id) {
  const data = modalData[id];
  if (!data) return;
  if (data.images) {
    modalContent.innerHTML = renderProjectModal(data);
  } else {
    modalContent.innerHTML = '<h2>' + data.title + '</h2>' + data.body + '<a href="' + data.cta.href + '" class="modal-cta">' + data.cta.text + '</a>';
  }
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

if (modalOverlay && modalClose) {
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
}

document.querySelectorAll("[data-modal]").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    openModal(this.dataset.modal);
  });
});

/* ─── Lightbox ─── */
const lightboxOverlay = document.getElementById("lightboxOverlay");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src) {
  if (!lightboxOverlay || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightboxOverlay) return;
  lightboxOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

if (lightboxOverlay && lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxOverlay.addEventListener("click", function (e) {
    if (e.target === this) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
}

/* ─── Menu Toggle ─── */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    const isOpen = navLinks.classList.contains("active");
    menuToggle.src = isOpen ? "img/menu-open.png" : "img/menu.png";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.src = "img/menu.png";
    });
  });
}

/* ─── Accordion ─── */
const questions = document.querySelectorAll('.accordion-question');
questions.forEach(function(question) {
  question.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    answer.classList.toggle('show');
  });
});

/* ─── Copyright ─── */
const copyright = document.getElementById("copyRight");
if (copyright) {
  const d = new Date();
  copyright.textContent = d.getFullYear();
}

/* ─── Contact Form ─── */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const rawMsg =
      "*New Enquiry from Famous Graphics Website*\n\n" +
      "*Name:* " + name + "\n" +
      "*Email:* " + email + "\n" +
      "*Subject:* " + subject + "\n" +
      "*Message:* " + message;

    const whatsappMsg = encodeURIComponent(rawMsg);

    const btn = this.querySelector(".submit-btn");
    btn.textContent = "Opening WhatsApp...";
    btn.classList.add("sending");
    this.reset();

    window.open("https://wa.me/233598109267?text=" + whatsappMsg, "_blank");

    setTimeout(function () {
      btn.textContent = "Send Message";
      btn.classList.remove("sending");
    }, 5000);
  });
}

/* ─── Gallery Filter ─── */
const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

if (filterBtns.length && galleryItems.length) {
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      this.classList.add("active");
      const filter = this.dataset.filter;
      galleryItems.forEach(function (item) {
        if (filter === "all" || item.dataset.category === filter) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
