// Danh sách các trang
const pages = [
    {
        id: 'trang-chu',
        title: '01 - Trang Chủ Hành Chính Công',
        file: '01-trang-chu.html'
    },
    {
        id: 'trang-dang-phat-trien',
        title: '02 - Trang Đang Phát Triển',
        file: 'pages/02-page.html'
    },
    {
        id: 'trang-3',
        title: '03 - Trang Khác',
        file: 'pages/03-page.html'
    }
    // Thêm các trang khác ở đây
];

// Hàm khởi tạo danh sách trang
function initPageList() {
    const pageList = document.getElementById('pageList');
    
    pages.forEach(page => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = page.title;
        button.classList.add('page-btn');
        button.dataset.pageId = page.id;
        button.dataset.pageFile = page.file;
        button.dataset.pageTitle = page.title;
        
        button.addEventListener('click', function() {
            loadPage(
                page.title,
                page.file,
                page.id
            );
        });
        
        li.appendChild(button);
        pageList.appendChild(li);
    });
}

// Hàm tải trang
function loadPage(title, file, pageId) {
    const welcomeSection = document.getElementById('welcomeSection');
    const pageViewer = document.getElementById('pageViewer');
    const pageTitle = document.getElementById('pageTitle');
    const pageLink = document.getElementById('pageLink');
    const pageFrame = document.getElementById('pageFrame');
    
    // Cập nhật tiêu đề
    pageTitle.textContent = title;
    pageLink.href = file;
    pageLink.target = '_blank';
    
    // Load iframe
    pageFrame.src = file;
    
    // Ẩn welcome, hiển thị viewer
    welcomeSection.style.display = 'none';
    pageViewer.style.display = 'flex';
    
    // Cập nhật active button
    document.querySelectorAll('.page-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-page-id="${pageId}"]`).classList.add('active');
    
    // Lưu vào localStorage
    localStorage.setItem('lastPage', JSON.stringify({ title, file, pageId }));
}

// Hàm khôi phục trang cuối cùng
function restoreLastPage() {
    const lastPage = localStorage.getItem('lastPage');
    if (lastPage) {
        try {
            const page = JSON.parse(lastPage);
            const pageBtn = document.querySelector(`[data-page-id="${page.pageId}"]`);
            if (pageBtn) {
                pageBtn.click();
            }
        } catch (e) {
            console.error('Lỗi khôi phục trang:', e);
        }
    }
}

// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', function() {
    initPageList();
    
    // Khôi phục trang cuối cùng hoặc load trang đầu tiên
    const lastPage = localStorage.getItem('lastPage');
    if (lastPage) {
        restoreLastPage();
    } else if (pages.length > 0) {
        const firstPage = pages[0];
        loadPage(firstPage.title, firstPage.file, firstPage.id);
    }
});

// Xử lý lỗi iframe
document.addEventListener('load', function(e) {
    if (e.target.id === 'pageFrame') {
        try {
            // Kiểm tra nếu iframe load thành công
            const iframeDoc = e.target.contentDocument || e.target.contentWindow.document;
            if (iframeDoc) {
                console.log('Trang đã load thành công');
            }
        } catch (err) {
            console.warn('Cảnh báo: Không thể truy cập iframe content');
        }
    }
}, true);
