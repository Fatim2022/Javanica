let cart = [];
// Inisialisasi variabel total secara global
let total = 0;

function addToCart(itemName, price) {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Buat elemen baru untuk item yang ditambahkan
    const newItem = document.createElement('div');
    newItem.textContent = `${itemName} - Rp${price.toLocaleString('id-ID')}`;
    cartItems.appendChild(newItem);

    // Update total harga
    total += price;
    totalPriceElement.textContent = `Total: Rp${total.toLocaleString('id-ID')}`;
}

function payOnline() {
    alert(`You have successfully paid Rp${total.toLocaleString('id-ID')} online!`);
    resetCart();
}

function payOffline() {
    alert(`Please pay Rp${total.toLocaleString('id-ID')} at the counter.`);
    resetCart();
}

function resetCart() {
    // Reset cart dan total
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Kosongkan elemen cart
    total = 0;
    document.getElementById('total-price').textContent = 'Total: Rp0';
}

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}

document.getElementById("payOnline").addEventListener("click", function() {
    // Arahkan ke halaman pembayaran online
    window.location.href = "payment.html";
});

document.getElementById("payOffline").addEventListener("click", function() {
    // Tampilkan jendela pemberitahuan untuk pembayaran offline
    alert("Silakan lakukan pembayaran di kasir agar pesanan Anda dapat diproses.");
});
document.getElementById("reservationLink").addEventListener("click", function() {
    window.location.href = "reservation.html";
});
