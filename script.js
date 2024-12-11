const services = document.querySelectorAll('.menu-button');
const searchInput = document.getElementById('service-search');

// Fungsi untuk menampilkan layanan yang sesuai dengan pencarian
const showService = (service) => {
    const keyword = service.dataset.keywords.toLowerCase();
    return keyword.includes(searchInput.value.toLowerCase());
};

// Menyembunyikan atau menampilkan layanan berdasarkan pencarian
searchInput.addEventListener('input', () => {
    services.forEach(service => {
        if (showService(service)) {
            service.classList.remove('hidden');
        } else {
            service.classList.add('hidden');
        }
    });
});

// Fungsi untuk memperbarui tanggal dan waktu
const updateDateTime = () => {
    const now = new Date();
    const dayOfWeek = now.toLocaleDateString('id-ID', { weekday: 'long' });
    const day = now.getDate();
    const month = now.toLocaleDateString('id-ID', { month: 'long' });
    const year = now.getFullYear();

    const dateElement = document.getElementById('current-date');
    dateElement.textContent = `${dayOfWeek}, ${day} ${month} ${year}`;

    const timeElement = document.getElementById('current-time');
    timeElement.textContent = now.toLocaleTimeString();
};

// Memperbarui waktu setiap detik
setInterval(updateDateTime, 1000);

// Menambahkan event listener untuk setiap menu button
services.forEach(service => {
    service.addEventListener('click', () => {
        Swal.fire({
            title: 'Maaf bro, sedang dalam pengembangan',
            icon: 'info',
            confirmButtonText: 'OK',
            confirmButtonColor: '#4a90e2',
        });
    });
});

// Hujan effect
function createRain() {
    const rain = document.createElement("div");
    rain.classList.add("rain");
    document.body.appendChild(rain);

    for (let i = 0; i < 100; i++) {
        let drop = document.createElement("div");
        drop.classList.add("drop");
        rain.appendChild(drop);

        drop.style.left = `${Math.random() * window.innerWidth}px`;
        drop.style.animationDuration = `${Math.random() * 2 + 2}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
    }
}

createRain();
