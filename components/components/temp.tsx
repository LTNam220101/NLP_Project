import React, { useState } from 'react';

const YourComponent = () => {
  const [postData, setPostData] = useState({
    // Khởi tạo dữ liệu bạn muốn gửi
    key1: 'value1',
    key2: 'value2',
  });

  const handleStreamRequest = async () => {
    try {
      const response = await fetch('https://api.example.com/stream-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
        // Thêm option để cho phép streaming response
        signal: new AbortController().signal,
      });

      const reader = response?.body?.getReader();

      while (true) {
        const { done, value } = await reader?.read?.();

        if (done) {
          break;
        }

        // Xử lý dữ liệu streaming ở đây, ví dụ: console.log(value)
      }

      // Xử lý khi streaming kết thúc
      console.log('Streaming completed.');
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Error during streaming request:', error);
    }
  };

  return (
    <div>
      <h1>Your React Component</h1>
      <button onClick={handleStreamRequest}>Send Streaming Request</button>
    </div>
  );
};

export default YourComponent;