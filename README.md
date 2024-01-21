# Description

## Installation
1. Make sure you have Node.js installed before running the application.
2. Clone or download the source code from the repository.

## Usage
1. Open the terminal and navigate to the directory containing the source code.
2. Run the command `npm install` to install dependencies.

## File `index.html`
- **Path:** `./index.html`
- **Meaning:** Contains the HTML content of the website. Sent to the client when accessing the root ("/") address.

## File `requestCount.json`
- **Path:** `./requestCount.json`
- **Meaning:** Stores the current request count in JSON format.

## Root Route "/"
- **Path:** `/`
- **Meaning:** Increases the `requestCount` variable upon access. Returns HTML content from the `index.html` file. Stores the request count in the JSON file and broadcasts the count to all clients through WebSocket.

## Route "/api/requestCount"
- **Path:** `/api/requestCount`
- **Meaning:** Returns the request count in JSON format when called.

## Support Functions
- `saveRequestCountToJson()`: Saves the request count to the JSON file.
- `resetRequestCount()`: Resets the request count to 0 and saves it to the JSON file.
- `readRequestCountFromJson()`: Reads the request count from the JSON file on startup.
- `broadcastRequestCount()`: Sends the request count to all clients through WebSocket.

## Time Configuration
- Updates the request count every 2 seconds and broadcasts the information.
- Resets the request count to 0 every 2 seconds.

## Event Handling
- Captures the server close event to save the request count to the JSON file before exiting the program.

## Note
- The server automatically restarts after closing.

---

# Mô tả 

## Cài Đặt
1. Đảm bảo bạn đã cài đặt Node.js trước khi chạy ứng dụng.
2. Clone hoặc tải mã nguồn từ repository.

## Sử Dụng
1. Mở terminal và điều hướng đến thư mục chứa mã nguồn.
2. Chạy lệnh `npm install` để cài đặt các dependency.

## File `index.html`
- **Path:** `./index.html`
- **Ý Nghĩa:** Chứa nội dung HTML của trang web. Được gửi về client khi truy cập địa chỉ gốc ("/").

## File `requestCount.json`
- **Path:** `./requestCount.json`
- **Ý Nghĩa:** Lưu trữ số lượng yêu cầu hiện tại dưới dạng JSON.

## Route Gốc "/"
- **Path:** `/`
- **Ý Nghĩa:** Tăng biến `requestCount` khi có yêu cầu truy cập. Trả về nội dung HTML từ file `index.html`. Lưu số lượng yêu cầu vào file JSON và broadcast số lượng yêu cầu đến tất cả client thông qua WebSocket.

## Route "/api/requestCount"
- **Path:** `/api/requestCount`
- **Ý Nghĩa:** Trả về số lượng yêu cầu dưới dạng JSON khi được gọi.

## Các Hàm Hỗ Trợ
- `saveRequestCountToJson()`: Lưu số lượng yêu cầu vào file JSON.
- `resetRequestCount()`: Đặt lại số lượng yêu cầu về 0 và lưu vào file JSON.
- `readRequestCountFromJson()`: Đọc số lượng yêu cầu từ file JSON khi khởi động.
- `broadcastRequestCount()`: Gửi số lượng yêu cầu đến tất cả client thông qua WebSocket.

## Cấu Hình Thời Gian
- Cập nhật số lượng yêu cầu mỗi 2 giây và broadcast thông tin.
- Đặt lại số lượng yêu cầu về 0 sau mỗi 2 giây.

## Xử Lý Sự Kiện
- Bắt sự kiện đóng server để lưu số lượng yêu cầu vào file JSON trước khi thoát chương trình.

## Lưu Ý
- Server tự động khởi động lại sau khi đóng.


---

# Feedback on Request Count - XIE

## HTML Structure
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>- XIE DEMO -</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <style>
        /* Styles for body, h2, canvas, and #requestCount */
    </style>
</head>
<body>
    <div>
        <h2>Feedback on Request Count - XIE</h2>
        <canvas id="requestChart" width="400" height="200"></canvas>
        <p id="requestCount">Request Count: Loading...</p>
    </div>
    <script>
        // JavaScript code for real-time updates and chart creation
    </script>
</body>
</html>
```
