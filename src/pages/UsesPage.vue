<script setup>
// Dev
function useDev() {
  return [
    { category: "IDE", name: "JetBrains", url: "https://www.jetbrains.com" },
    { category: "IDE Theme", name: "Darcula", url: "#" },
    {
      category: "Font",
      name: "Operator Mono",
      url: "https://www.typography.com/fonts/operator/styles/operatormonoscreensmart",
    },
    { category: "Web JS", name: "Vue.js", url: "https://vuejs.org" },
    { category: "Web CSS", name: "Tailwind", url: "https://tailwindcss.com" },
    { category: "Backend", name: "Go", url: "https://go.dev" },
    { category: "Terminal", name: "iTerm", url: "https://iterm2.com" },
    { category: "Shell", name: "zsh", url: "https://www.zsh.org" },
    { category: "Hosting", name: "Netlify", url: "https://www.netlify.com" },
  ];
}

// Tech
function useTech() {
  return [
    { category: "Phone", name: "iPhone 11 Pro", url: "#" },
    {
      category: "Computer",
      name: "MacBook Pro (16in M1 Pro)",
      url: "https://www.apple.com/macbook-pro-14-and-16/",
    },
    {
      category: "Keyboard",
      name: "Logitech MX Mechanical Mini",
      url: "https://www.logitech.com/en-us/products/keyboards/mx-mechanical.920-010550.html",
    },
    {
      category: "Mouse",
      name: "Logitech MX Master 3",
      url: "https://www.logitech.com/en-us/products/mice/mx-master-3-mac-wireless-mouse.910-005693.html",
    },
    {
      category: "Game Console",
      name: "Playstation 5 Digital",
      url: "https://www.playstation.com/en-us/ps5/",
    },
    {
      category: "Cloud Storage",
      name: "iCloud",
      url: "https://www.icloud.com/",
    },
    {
      category: "Email",
      name: "iCloud Mail",
      url: "https://www.icloud.com/mail/",
    },
    {
      category: "Password Manager",
      name: "1Password",
      url: "https://1password.com",
    },
    {
      category: "Music Streaming",
      name: "Apple Music",
      url: "https://music.apple.com",
    },
  ];
}

// Woodworking
function useWoodworking() {
  return [
    {
      category: "Table Saw",
      name: "Saw Stop Professional",
      url: "https://www.sawstop.com/product/professional-cabinet-saw-pcs175-pfa30/",
    },
    {
      category: "Mitre Saw",
      name: "Festool Kapex",
      url: "https://www.festoolusa.com/products/sawing/sliding-compound-miter-saws/575306---ks-120-reb-usa",
    },
    {
      category: "Bandsaw",
      name: "Laguna 14bx",
      url: "https://lagunatools.com/classic/bandsaws/14bx-bandsaw/",
    },
    {
      category: "Track Saw",
      name: "Festool TS 55",
      url: "https://www.festoolusa.com/products/sawing/track-saws/576011---ts-55-req-f-plus-us",
    },
    {
      category: "Jointer",
      name: "Laguna JX8 Pro",
      url: "https://lagunatools.com/classic/jointers/jx8-pro/",
    },
    {
      category: "Planer",
      name: "Laguna PX12",
      url: "https://lagunatools.com/classic/planers/px12/",
    },
    {
      category: "Drill Press",
      name: 'Jet 12" Benchtop',
      url: "https://jettools.com/woodworking/drill-presses/716000",
    },
    {
      category: "Joining",
      name: "Festool Domino DF 500",
      url: "https://www.festoolusa.com/products/domino-joining-system/domino-joining-machines/574332---df-500-q-plus-usa",
    },
    {
      category: "Router",
      name: "Festool OF 1400",
      url: "https://www.festoolusa.com/products/routing/routers/576213---of-1400-eq-f-plus-us",
    },
    {
      category: "Sander",
      name: "Festool Rotex RO 125",
      url: "https://www.festoolusa.com/products/sanding/gear-drive-eccentric-sander-rotex/576032---ro-125-feq-plus-us",
    },
    {
      category: "Stationary Dust Collector",
      name: "Laguna PFlux 2",
      url: "https://lagunatools.com/classic/dust-collectors/p-flux-2/",
    },
    {
      category: "Mobile Dust Collector",
      name: "Festool CT 36",
      url: "https://www.festoolusa.com/products/dust-extraction/mobile-dust-extractors/577084---ct-36-e-hepa-us",
    },
  ];
}

const uses = {
  dev: useDev(),
  tech: useTech(),
  wood: useWoodworking(),
};
</script>

<template>
  <h1>Uses</h1>

  <section>
    <h2>Dev</h2>
    <ul>
      <li v-for="d in uses.dev" :key="d.name">
        <a :href="d.url">{{ d.category }} - {{ d.name }}</a>
      </li>
    </ul>
  </section>

  <section>
    <h2>Tech</h2>
    <ul>
      <li v-for="t in uses.tech" :key="t.name">
        <a :href="t.url">{{ t.category }} - {{ t.name }}</a>
      </li>
    </ul>
  </section>

  <section>
    <h2>Wood Working</h2>
    <ul>
      <li v-for="w in uses.wood" :key="w.name">
        <a :href="w.url">{{ w.category }} - {{ w.name }}</a>
      </li>
    </ul>
  </section>
</template>
