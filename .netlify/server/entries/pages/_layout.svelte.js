import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-z0yki7{z-index:1;width:95%;display:flex;justify-content:space-between;align-items:center;padding:10px 0px}.logo.svelte-z0yki7{width:55px;height:55px}.links.svelte-z0yki7{display:grid;justify-items:center;align-items:center;grid-template-columns:auto auto auto;gap:25px}a.svelte-z0yki7{text-decoration:none;color:#e4e4e4;font-size:25px;font-weight:600;transition:all 0.3s linear}a.svelte-z0yki7:hover{cursor:pointer;color:#21e1fd}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="${"svelte-z0yki7"}"><div><img class="${"logo svelte-z0yki7"}" src="${"332.png"}" alt="${"Logo"}"></div>

    <div class="${"links svelte-z0yki7"}"><a href="${"#Token"}" class="${"svelte-z0yki7"}">Token</a>
        <a href="${"#Market"}" class="${"svelte-z0yki7"}">About</a>
        <a href="${"#Features"}" class="${"svelte-z0yki7"}">Tools</a></div>
</header>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-1465txw{font-family:Arial, Helvetica, sans-serif;display:grid;justify-items:center;align-items:center;padding:0px;margin:0px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-1465txw"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main>${slots.default ? slots.default({}) : ``}</main>

	

</div>`;
});
export {
  Layout as default
};
