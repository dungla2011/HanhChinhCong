# Hành Chính Công - Website Dịch Vụ

Đây là một trang web giới thiệu dịch vụ hành chính công trực tuyến, được xây dựng bằng HTML, CSS và JavaScript.

## Cấu trúc File

- `index.html` - File HTML chính
- `styles.css` - File CSS định kiểu
- `script.js` - File JavaScript cho tương tác
- `README.md` - File hướng dẫn này

## Hướng Dẫn Deploy lên GitHub Pages

### Bước 1: Tạo Repository trên GitHub
1. Đăng nhập vào [GitHub](https://github.com)
2. Click "New" để tạo repository mới
3. Đặt tên repository: `hanhchinhcong` (hoặc tên khác)
4. Chọn "Public" để ai cũng có thể xem
5. Click "Create repository"

### Bước 2: Push Code lên GitHub

Mở Terminal/Command Prompt và chạy:

```bash
cd e:\Projects\HanhChinhCong

# Khởi tạo git
git init

# Thêm tất cả file
git add .

# Commit
git commit -m "Initial commit"

# Thêm remote repository (thay YOUR_USERNAME và YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push code lên GitHub
git branch -M main
git push -u origin main
```

### Bước 3: Kích hoạt GitHub Pages

1. Vào repository của bạn trên GitHub
2. Chọn "Settings" (biểu tượng cog)
3. Kéo xuống tìm "Pages" trong menu bên trái
4. Trong "Source", chọn branch `main` và folder `/ (root)`
5. Click "Save"
6. Chờ vài phút, trang web sẽ có sẵn tại: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Bước 4: Truy cập Trang Web

Sau khi deploy thành công, bạn có thể truy cập trang web công khai tại URL:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

## Tính Năng

✅ Responsive Design (hoạt động trên mobile, tablet, desktop)
✅ Navigation mượt mà (smooth scroll)
✅ Các section: Hero, Services, About, Contact
✅ Form liên hệ
✅ Hiệu ứng hover trên các phần tử

## Tuỳ chỉnh

- Sửa tên công ty trong `<title>` và `.logo`
- Thay đổi màu sắc bằng cách sửa các gradient color trong `styles.css`
- Thêm/xoá các dịch vụ trong section `#services`
- Cập nhật thông tin liên hệ

## Hỗ Trợ

Nếu có vấn đề, hãy kiểm tra:
1. Tất cả file có ở cùng folder không?
2. URL của repository có đúng không?
3. Repository có phải public không?
4. Chờ 5-10 phút sau khi push, GitHub Pages cần thời gian để build

---

**Chúc mừng!** 🎉 Trang web của bạn giờ đã online và công khai!
