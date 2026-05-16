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

document.addEventListener('DOMContentLoaded', function() {
    const productBtn = document.querySelector('.has-mega > .nav-link');
    const megaMenu = document.querySelector('.mega-dropdown-wrapper');
    const productIcon = productBtn.querySelector('.icon-small');

    // 1. Logika Klik Menu Produk (Mega Menu)
    productBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Matikan link toko.html
        e.stopPropagation(); // Cegah perintah klik tembus ke dokumen

        // Toggle menu Produk
        const isOpen = megaMenu.classList.contains('show-mega');
        
        // Tutup semua menu lain dulu jika ada (opsional)
        closeAllMenus();

        if (!isOpen) {
            megaMenu.classList.add('show-mega');
            if (productIcon) productIcon.classList.add('rotate-icon');
        }
    });

    // 2. Klik di mana saja untuk menutup menu
    document.addEventListener('click', function(e) {
        if (!megaMenu.contains(e.target) && !productBtn.contains(e.target)) {
            closeAllMenus();
        }
    });

    // Fungsi Pembantu untuk Menutup
    function closeAllMenus() {
        megaMenu.classList.remove('show-mega');
        if (productIcon) productIcon.classList.remove('rotate-icon');
    }

    // 3. Mencegah klik di dalam area mega menu agar tidak menutup menu itu sendiri
    megaMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});


//SECRH BAR
const searchData = [
    // RUMAH & HUNIAN
    { 
        keywords: ["rumah", "bangun", "hunian", "membangun", "tempat tinggal", "villa", "kost", "kontrakan", "perumahan", "arsitektur rumah"], 
        url: "bangun_rumah.html" 
    },
    
    // RENOVASI & PERBAIKAN
    { 
        keywords: ["renovasi", "perbaikan", "cat", "plafon", "gypsum", "bocor", "atap", "genteng", "bongkar", "pasang keramik", "lantai", "dinding", "rembes", "bangunan lama"], 
        url: "renovasi.html" 
    },
    
    // KANTOR & KOMERSIAL
    { 
        keywords: ["kantor", "office", "b2b", "perusahaan", "ruko", "toko", "ruang usaha", "gedung", "komersial", "fasilitas publik", "sekolah", "rumah sakit"], 
        url: "renovasi_kantor.html" 
    },
    
    // INTERIOR & FURNITURE
    { 
        keywords: ["interior", "disain", "furniture", "ruangan", "meja", "kursi", "lemari", "kitchen set", "apartemen", "dekorasi", "wallpaper", "pencahayaan", "lighting"], 
        url: "disain_interior.html" 
    },
    
    // KONSTRUKSI BAJA & INDUSTRI
    { 
        keywords: ["baja", "gudang", "pabrik", "wf", "h-beam", "konstruksi berat", "atap baja", "rangka atap", "workshop", "hangar", "industri", "besi"], 
        url: "konstruksi_baja.html" 
    },
    
    // FIT OUT (SPESIFIK RITEL/KANTOR)
    { 
        keywords: ["fit out", "partisi", "sekat", "rebranding", "tenant", "mall", "outlet", "booth", "pameran"], 
        url: "fit_out.html" 
    },
    
    // PAGAR & EKSTERIOR
    { 
        keywords: ["pagar", "kanopi", "canopy", "carport", "tralis", "stainless", "pintu besi", "pagar minimalis", "taman", "halaman"], 
        url: "pagar_kanopi.html" 
    },
    
    // PROYEK & DOKUMENTASI
    { 
        keywords: ["proyek", "berita", "laporan", "lapangan", "progress", "update", "dokumentasi", "portofolio", "hasil kerja", "testimoni"], 
        url: "berita.html" 
    },
    
    // KONTAK & BANTUAN
    { 
        keywords: ["kontak", "alamat", "wa", "telepon", "whatsapp", "email", "lokasi", "peta", "tanya", "konsultasi", "harga", "biaya", "rab"], 
        url: "kontak.html" 
    },
    
    // PERUSAHAAN
    { 
        keywords: ["tentang", "profil", "perusahaan", "sejarah", "legalitas", "visi", "misi", "tim", "arsitek", "kontraktor", "pemilik"], 
        url: "about.html" 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchIcon = document.getElementById('search-icon');

    function executeSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (!query) return;

        // Mencari kecocokan kata kunci
        const result = searchData.find(item => 
            item.keywords.some(key => query.includes(key))
        );

        if (result) {
            // JIKA KETEMU: Langsung pindah ke halaman tersebut
            window.location.href = result.url;
        } else {
            // JIKA TIDAK KETEMU: Arahkan ke halaman semua layanan agar user tidak bingung
            alert("Hasil tidak ditemukan. Menampilkan semua layanan kami...");
            window.location.href = "layanan.html";
        }
    }

    // Klik Ikon
    searchIcon.addEventListener('click', executeSearch);

    // Tekan Enter
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') executeSearch();
    });
});


// DETAIL PRODUK
function orderViaWA() {
    const location = document.getElementById('shipping-location').value;
    const productName = document.querySelector('.product-title').innerText;
    const phoneNumber = "62895406014065";
    
    const message = `*DISKUSI PRODUK - PT PARTA JASA*\n\nHalo Admin, saya tertarik dengan:\n*${productName}*\n\nLokasi Proyek: ${location}\n\nMohon informasi harga terbaru dan estimasi pengirimannya. Terima kasih.`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}


// DROPSOWN PRODUK
document.addEventListener('DOMContentLoaded', function() {
    const megaMenuTrigger = document.querySelector('.has-mega > .nav-link');
    const megaDropdown = document.querySelector('.mega-dropdown-wrapper');
    const arrowIcon = megaMenuTrigger.querySelector('.icon-small');

    // Fungsi Klik untuk Buka/Tutup
    megaMenuTrigger.addEventListener('click', function(e) {
        // Mencegah navigasi ke toko.html hanya pada klik pertama saat menu tertutup
        if (!megaDropdown.classList.contains('active')) {
            e.preventDefault(); 
        } else {
            // Jika sudah terbuka, biarkan navigasi bekerja atau tutup kembali (pilihan)
            // e.preventDefault(); // Gunakan ini jika ingin klik kedua hanya untuk menutup
        }

        // Toggle class Active
        megaDropdown.classList.toggle('active');
        
        // Animasi rotasi ikon panah
        if (arrowIcon) {
            arrowIcon.classList.toggle('rotate');
        }
    });

    // Menutup menu jika mengklik di luar area navbar
    document.addEventListener('click', function(e) {
        const isClickInside = megaMenuTrigger.parentElement.contains(e.target);

        if (!isClickInside && megaDropdown.classList.contains('active')) {
            megaDropdown.classList.remove('active');
            if (arrowIcon) {
                arrowIcon.classList.remove('rotate');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const productLink = document.querySelector('.has-mega > .nav-link');
    const megaWrapper = document.querySelector('.mega-dropdown-wrapper');

    if (productLink) {
        productLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                e.stopPropagation();

                // Toggle menu produk
                megaWrapper.classList.toggle('open');
                
                // Rotasi icon panah jika ada
                const icon = this.querySelector('.icon-small');
                if (icon) icon.classList.toggle('rotate-icon');
            }
        });
    }
});


//klik  toko.html
const productLink = document.querySelector('.has-mega > .nav-link');

productLink.addEventListener('click', function(e) {
    // Mencegah navigasi ke toko.html
    e.preventDefault(); 
    
    // Logika buka tutup menu Anda di sini
    const megaWrapper = document.querySelector('.mega-dropdown-wrapper');
    megaWrapper.classList.toggle('open');
    
    // Rotasi icon panah
    const icon = this.querySelector('.icon-small');
    if (icon) icon.classList.toggle('rotate-icon');
});

// PEMBARUAN DROPDOWN
document.addEventListener('DOMContentLoaded', function() {
    // Mencari semua tombol yang punya class mega-trigger
    const triggers = document.querySelectorAll('.mega-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault(); // Stop pindah halaman
            e.stopPropagation(); // Stop event agar tidak dianggap klik di luar area

            // Cari pembungkus terdekat dan dropdown-nya
            const parent = this.closest('.has-mega');
            const dropdown = parent.querySelector('.mega-dropdown-wrapper');
            const icon = this.querySelector('.icon-small');

            // 1. Tutup mega menu lain yang mungkin sedang terbuka (agar tidak tabrakan)
            document.querySelectorAll('.mega-dropdown-wrapper').forEach(menu => {
                if (menu !== dropdown) {
                    menu.classList.remove('active-mega');
                    // Reset icon panah menu lain
                    const otherIcon = menu.parentElement.querySelector('.icon-small');
                    if (otherIcon) otherIcon.classList.remove('rotate-icon');
                }
            });

            // 2. Klik untuk Buka atau Tutup (Toggle)
            dropdown.classList.toggle('active-mega');
            
            // 3. Animasi rotasi panah
            if (icon) {
                icon.classList.toggle('rotate-icon');
            }
        });
    });

    // Menutup menu jika klik di sembarang tempat di luar navbar
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.has-mega')) {
            document.querySelectorAll('.mega-dropdown-wrapper').forEach(menu => {
                menu.classList.remove('active-mega');
                const icon = menu.parentElement.querySelector('.icon-small');
                if (icon) icon.classList.remove('rotate-icon');
            });
        }
    });
});

//MENU DROPDOWN TERTUTUP OTOMATIS
