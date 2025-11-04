---
layout: default
title: Products - Herbal Indulgence POS
---
<section class="hero">
  <h1>Our POS Solutions</h1>
  <p>Hardware and software tailored for cannabis operators.</p>
  <!-- Tabs: Hardware | Software (use JS toggle) -->
  <div id="tabs">
    <button onclick="showTab('hardware')">Hardware</button>
    <button onclick="showTab('software')">Software</button>
  </div>
</section>

<div id="hardware">
  <h2>Hardware Gallery</h2>
  <div class="carousel">
    <img src="{{ site.baseurl }}/assets/images/terminal.jpg" alt="15&quot; Touchscreen Terminal">
    <img src="{{ site.baseurl }}/assets/images/scanner.jpg" alt="Inventory Scanner">
    <!-- More -->
  </div>
</div>

<div id="software" style="display:none;">
  <h2>Software Features</h2>
  <ul>
    <li>Real-time inventory tracking</li>
    <li>Reporting dashboards</li>
    <li>eDebit processing</li>
  </ul>
</div>

<h2>Key Specs</h2>
<table>
  <thead><tr><th>Feature</th><th>Description</th><th>Benefit for Dispensaries/Growers</th></tr></thead>
  <tbody>
    <tr><td>Terminal Size</td><td>15" touchscreen, ruggedized</td><td>Handles high-traffic counters or farm offices</td></tr>
    <tr><td>Payment Module</td><td>Green.Money eDebit integration</td><td>Instant bank transfers, compliant for high-risk</td></tr>
    <tr><td>Inventory Sync</td><td>Real-time with MarijuanaSoftware</td><td>METRC auto-reporting, reduces errors by 50%</td></tr>
    <tr><td>Security</td><td>End-to-end encryption, PCI-DSS</td><td>Protects sensitive cannabis transaction data</td></tr>
    <tr><td>Price</td><td>$499 one-time + $29/mo software</td><td>Affordable entry for small ops</td></tr>
  </tbody>
</table>

<h2 id="configurator">Build Your Setup</h2>
<form>
  <label><input type="checkbox" value="eDebit" onchange="updateQuote()"> Add eDebit Module (+$99/mo)</label>
  <label><input type="checkbox" value="scanner" onchange="updateQuote()"> Add Scanner (+$199 one-time)</label>
  <p>Estimated Total: $<span id="quote-total">499</span>/mo</p>
  <a href="{{ site.baseurl }}/pages/pricing" class="cta">Get Full Pricing</a>
</form>

<script>
function showTab(tab) {
  document.querySelectorAll('#tabs + div').forEach(d => d.style.display = 'none');
  document.getElementById(tab).style.display = 'block';
}
</script>