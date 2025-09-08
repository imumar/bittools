document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <footer style="text-align: center; padding: 20px; margin-top: 40px;">
  <div style="display: inline-block; border-top: 1px solid #1e232d; padding: 10px 40px 0;">
    <p>© 2025 BitTools | <a href="/about">About</a> | <a href="/contact">Contact</a> | 
    <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms</a></p>
  </div>
</footer>

    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
