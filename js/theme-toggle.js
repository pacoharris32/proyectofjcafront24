const t=String.raw;class e extends HTMLElement{constructor(){super(),this.STORAGE_KEY="user-color-scheme",this.COLOR_MODE_KEY="--color-mode"}connectedCallback(){this.style.display="block",this.render()}getCSSCustomProp(t){let e=getComputedStyle(document.documentElement).getPropertyValue(t);return e.length&&(e=e.replace(/\'|"/g,"").trim()),e}applySetting(t){const e=t||localStorage.getItem(this.STORAGE_KEY);if(e)this.setStatus(e),window.applyThemeSetting(e);else{const t=this.getCSSCustomProp(this.COLOR_MODE_KEY)||"light";this.setStatus(t),window.applyThemeSetting(t)}}setStatus(t){this.buttons.forEach(e=>{e.setAttribute("aria-pressed",t===e.getAttribute("data-theme")?"true":"false")})}render(){this.innerHTML=t`
      <h2 class="text-600">Theme</h2>
      <div class="[ theme-toggle ] [ gap-top-300 ]">
        <button class="button" data-theme="light">Light</button>
        <button class="button" data-theme="dark">Dark</button>
      </div>
    `,this.afterRender()}afterRender(){this.buttons=this.querySelectorAll("[data-theme]"),this.buttons.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const s=t.getAttribute("data-theme");this.applySetting(s),localStorage.setItem(this.STORAGE_KEY,s)})}),this.applySetting()}}"customElements"in window&&customElements.define("theme-toggle",e);export default e;
//# sourceMappingURL=theme-toggle.js.map