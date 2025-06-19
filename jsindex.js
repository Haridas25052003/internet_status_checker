
    function updateStatus() {
      const statusDiv = document.getElementById('status');
      if (navigator.onLine) {
        statusDiv.textContent = "✅ You are ONLINE";
        statusDiv.className = "status online";
      } else {
        statusDiv.textContent = "❌ You are OFFLINE";
        statusDiv.className = "status offline";
      }
    }

    // Check status on load
    updateStatus();

    // Listen for status changes
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
