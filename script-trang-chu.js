// Xử lý click nút dịch vụ
const serviceButtons = document.querySelectorAll('.service-btn');

serviceButtons.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const serviceName = this.querySelector('.service-title').textContent.trim();
        console.log('Dịch vụ được chọn:', serviceName);
        
        // Thêm hiệu ứng
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
        
        // Có thể thêm điều hướng hoặc logic khác ở đây
        // window.location.href = 'chi-tiet-dich-vu.html?service=' + encodeURIComponent(serviceName);
    });
});

// Xử lý click icon cài đặt
const settingsIcon = document.querySelector('.settings-icon');
if (settingsIcon) {
    settingsIcon.addEventListener('click', function() {
        alert('Cài đặt chưa được triển khai');
    });
}

// Thêm animation khi trang load
window.addEventListener('load', function() {
    const container = document.querySelector('.container-main');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.6s ease-out';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});

// Touch support cho mobile
serviceButtons.forEach(btn => {
    btn.addEventListener('touchstart', function() {
        this.style.opacity = '0.9';
    });
    
    btn.addEventListener('touchend', function() {
        this.style.opacity = '1';
    });
});
