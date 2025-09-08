document.addEventListener("DOMContentLoaded", function() {
    const allToolsHTML = `
<style>
  .all-tools-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    list-style: none;
    padding: 0;
    margin: 40px 0;
  }

  .all-tools-list a {
    color: var(--muted);
    text-decoration: none;
    padding: 12px;
    border-radius: 8px;
    background: var(--panel);
    border: 1px solid var(--border);
    transition: all 0.2s;
  }

  .all-tools-list a:hover {
    color: var(--accent);
    background: #1e232d;
    transform: translateY(-2px);
  }

  .separator {
    border: 0;
    border-top: 1px solid var(--border);
    margin: 40px 0;
  }

  .ad-slot {
    margin: 24px 0 0 0;
    border-top: 1px solid var(--border);
    background: linear-gradient(135deg, rgba(107, 220, 255, .04), rgba(125, 255, 160, .03));
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center
  }
</style>
<section>
  <hr class="separator">
  <h2 style="text-align: center; margin-bottom: 24px;">All Tools</h2>
  <div class="all-tools-list">
    <a href="/dev/json-formatter">JSON Formatter</a>
    <a href="/dev/base64-encoder">Base 64 Encoder/Decoder</a>
    <a href="/dev/jwt-decoder">JWT Decoder</a>
    <a href="/dev/xml-formatter">XML Formatter</a>
    <a href="/dev/url-encoder">URL Encoder/Decoder</a>
    <a href="/dev/csv-to-json">CSV → JSON</a>
    <a href="/dev/uuid-generator">UUID v4 Generator</a>
    <a href="/dev/regex-tester">RegExp Tester</a>
    <a href="/dev/timestamp-converter">Timestamp Converter</a>
    <a href="/dev/html-escape">HTML Encoder/Decoder</a>
    <!-- <a href="/finance/compound-interest/index.html">Compound Interest Calculator</a>
        <a href="/finance/emi/index.html">EMI Calculator</a>
        <a href="/finance/fd/index.html">FD Calculator</a>
        <a href="/finance/inflation-adjuster/index.html">Inflation Adjuster</a>
        <a href="/finance/loan-affordability/index.html">Loan Affordability Calculator</a>
        <a href="/finance/lumpsum/index.html">Lumpsum Calculator</a>
        <a href="/finance/rd/index.html">RD Calculator</a>
        <a href="/finance/retirement-corpus/index.html">Retirement Corpus Calculator</a>
        <a href="/finance/roi-irr/index.html">ROI/IRR Calculator</a>
        <a href="/finance/sip/index.html">SIP Calculator</a>
        <a href="/health/bmi/index.html">BMI Calculator</a>
        <a href="/health/bmr/index.html">BMR Calculator</a> -->
        <a href="/text/case-converter">Case Converter</a>
         <a href="/text/extra-spaces">Extra Spaces Remover</a>
        <a href="/text/markdown">Markdown Previewer</a>
       <!-- <a href="/textTools/textDifference/text-difference.html">Text Difference Checker</a>
        <a href="/textTools/wordCounter/word-counter-index.html">Word Counter</a> -->
  </div>
  <div class="ad-slot">
    <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8636015392000586" data-ad-slot="6238140983"
      data-ad-format="auto" data-full-width-responsive="true"></ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  </div>
</section>
    `;
    const container = document.getElementById('all-tools-container');
    if (container) {
        container.innerHTML = allToolsHTML;
    }
});
