
function openWhatsApp() {
    const name = document.getElementById('name').value;
    const adress = document.getElementById('adress').value;
    const phoneNumber = "+201112824017"; 

    // استرجاع البيانات من localStorage
    const storedData = localStorage.getItem("userData");
    const dishes = JSON.parse(storedData);

    // بناء رسالة الواتساب مع سرد الأطباق وعدد الطلبات
    let message = `أهلاً، اسمي ${name} وأود طلب:\n`;
    dishes.forEach(dish => {
        message += `* ${dish.name} (عدد الطلبات: ${dish.count})\n`;
    });
    message += `على عنوان ${adress}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function openTelegram() {
    const name = document.getElementById('name').value;
    const adress = document.getElementById('adress').value;
    const username = "+201112824017";  

    // استرجاع البيانات من localStorage
    const storedData = localStorage.getItem("userData");
    const dishes = JSON.parse(storedData);

    // بناء رسالة التليجرام مع سرد الأطباق وعدد الطلبات
    let message = `أهلاً، اسمي ${name} وأود طلب:\n`;
    dishes.forEach(dish => {
        message += `* ${dish.name} (عدد الطلبات: ${dish.count})\n`;
    });
    message += `على عنوان ${adress}`;

    const telegramUrl = `https://t.me/${username}?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
}




const showImageBtn = document.getElementById('showImage');
const overlayImage = document.getElementById('overlayImage');
let isImageShown = false;

showImageBtn.addEventListener('click', () => {
    isImageShown = !isImageShown;
    overlayImage.style.display = isImageShown ? 'flex' : 'none';
});

document.addEventListener('click', (event) => {
    if (event.target.id === 'overlayImage') {
        overlayImage.style.display = 'none';
    }
});
