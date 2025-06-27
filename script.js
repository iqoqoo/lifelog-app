fetch('log.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("logList");
    data.forEach(entry => {
      const li = document.createElement("li");

      // entry.timestamp を日本時間でフォーマット
      const timestamp = dayjs(entry.timestamp).tz('Asia/Tokyo').format('YYYY/MM/DD HH:mm:ss');

      li.textContent = `${entry.date} ${timestamp}｜体調：${entry.condition}｜食事：${entry.meals}`;
      list.appendChild(li);
    });
  });
