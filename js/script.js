document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    const searchIcon = document.querySelector('#search-icon');
    const searchInput = document.querySelector('#search-input');
    const langBtn = document.querySelector('#lang-btn');
    
    let currentLang = 'ID';

    // 1. Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 2. Search Bar Animation
    searchIcon.addEventListener('click', () => {
        searchInput.classList.toggle('active');
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
        }
    });

    // 3. Language Switcher Logic
    langBtn.addEventListener('click', () => {
        // Switch language variable
        currentLang = currentLang === 'ID' ? 'EN' : 'ID';
        
        // Update button text (show the OTHER language)
        langBtn.innerText = currentLang === 'ID' ? 'EN' : 'ID';

        // Update all elements with data-id and data-en attributes
        const translatableElements = document.querySelectorAll('[data-id]');
        
        translatableElements.forEach(el => {
            const textID = el.getAttribute('data-id');
            const textEN = el.getAttribute('data-en');
            
            // If it has children (like the arrow icon), only change the text part
            if (el.children.length > 0) {
                el.childNodes[0].textContent = currentLang === 'ID' ? textID + ' ' : textEN + ' ';
            } else {
                el.innerText = currentLang === 'ID' ? textID : textEN;
            }
        });
    });

    // Perbaikan supaya Artikel GAK nutup hamburger dan munculin sub-menu
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Kalau yang diklik itu bagian dari dropdown (Artikel), jangan tutup hamburger!
        if (link.closest('.dropdown')) {
            e.preventDefault(); // Biar gak loncat ke atas
            e.stopPropagation(); // Stop perintah nutup hamburger
            link.parentElement.classList.toggle('buka'); // Munculin sub-menu
        } else {
            // Kalau klik menu lain (Beranda, dll), baru tutup
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});
});
// NAVBAR TRANSPARAN
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    //END NAVBAR TRANSPARAN
    // HERO SECTION
    document.addEventListener('DOMContentLoaded', () => {
    // 1. AOS Initialization (Animasi Scroll)
    AOS.init({
        duration: 1000,
        once: true,
    });

    // 2. GSAP Loading Animation
    const tl = gsap.timeline();
    tl.to(".loader-bar", { width: "100%", duration: 1.5, ease: "power2.inOut" })
      .to("#loader", { y: "-100%", duration: 0.8, ease: "power4.inOut" })
      .from(".hero-content h1", { opacity: 0, y: 30, duration: 0.8 }, "-=0.3")
      .from(".hero-content p", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5");

    // 3. Navbar Scroll Effect (Modifikasi dari sebelumnya)
    const nav = document.querySelector('#main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 4. Counter Animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target') || parseInt(counter.innerText);
            const count = +counter.innerText;
            // Ini contoh sederhana, angka statis di HTML akan langsung terbaca
        };
        // Logika counter bisa ditambahkan jika ingin angka berjalannya lebih dinamis
    });
});
// ANIMASI HITUNG MAJU
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    
    const runCounter = (el) => {
        const target = +el.getAttribute('data-target'); // Mengambil angka 150
        const duration = 2000; // Durasi animasi (2 detik)
        const step = target / (duration / 16); // 16ms adalah interval rata-rata frame
        
        let current = 0;

        const update = () => {
            current += step;
            if (current < target) {
                el.innerText = Math.floor(current);
                requestAnimationFrame(update); // Menggunakan animasi yang lebih smooth dari setTimeout
            } else {
                el.innerText = target; // Pastikan berakhir tepat di angka target
            }
        };
        
        update();
    };

    // Fungsi untuk mendeteksi scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Jika elemen terlihat di layar, jalankan animasi
                runCounter(entry.target);
                // Berhenti mengamati setelah animasi jalan sekali
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.8 }); // 0.8 artinya animasi jalan saat 80% elemen muncul di layar

    counters.forEach(c => observer.observe(c));
});


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Opsional: Kunci scroll body pas menu kebuka biar gak lari-lari
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});


// Gunakan window agar radar lebih luas menjangkau seluruh layar
window.addEventListener('click', function(e) {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    // Cek apakah menu sedang terbuka
    if (navMenu.classList.contains('active')) {
        
        /* LOGIKA: 
           Jika yang diklik BUKAN hamburger, 
           DAN yang diklik BUKAN isi dari navMenu,
           MAKA tutup menu.
        */
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Aktifkan kembali scroll body
            document.body.style.overflow = 'auto';
            console.log("Menu ditutup karena klik di luar area");
        }
    }
});

//

// Gunakan event delegation supaya pasti kena targetnya
document.addEventListener('click', function(e) {
    const navMenu = document.querySelector('#nav-menu');
    const hamburger = document.querySelector('#hamburger');
    
    // 1. CEK: Apakah yang diklik itu tombol X atau icon di dalam tombol X?
    if (e.target.closest('#close-menu')) {
        console.log("Tombol X diklik!");
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});