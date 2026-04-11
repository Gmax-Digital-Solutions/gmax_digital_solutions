<!-- <!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Gmax Digital - Responsive Mobile Homepage</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "surface-container-low": "#fdf1f3",
              "primary-container": "#585de1",
              "primary-fixed-dim": "#c0c1ff",
              "primary-fixed": "#e1e0ff",
              "surface-dim": "#e3d7da",
              "secondary-fixed-dim": "#ffb3ad",
              "outline-variant": "#c6c5d6",
              "on-primary-fixed-variant": "#2e31b9",
              "background": "#fff8f8",
              "surface-container-lowest": "#ffffff",
              "on-tertiary": "#ffffff",
              "secondary-fixed": "#ffdad7",
              "primary": "#3e42c7",
              "on-secondary-fixed": "#410004",
              "on-primary-fixed": "#04006d",
              "surface-variant": "#ece0e2",
              "on-tertiary-fixed-variant": "#4c4547",
              "outline": "#767686",
              "on-error": "#ffffff",
              "tertiary-container": "#746b6d",
              "surface-tint": "#484dd1",
              "on-primary-container": "#f1efff",
              "inverse-on-surface": "#faeef0",
              "error-container": "#ffdad6",
              "tertiary-fixed": "#ece0e2",
              "on-surface": "#201a1c",
              "tertiary": "#5b5355",
              "error": "#ba1a1a",
              "on-tertiary-container": "#faedf0",
              "on-secondary": "#ffffff",
              "on-surface-variant": "#464554",
              "on-secondary-fixed-variant": "#930012",
              "inverse-primary": "#c0c1ff",
              "on-background": "#201a1c",
              "surface-container-high": "#f1e5e8",
              "surface": "#fff8f8",
              "surface-container-highest": "#ece0e2",
              "secondary-container": "#dd2f33",
              "on-error-container": "#93000a",
              "on-tertiary-fixed": "#201a1c",
              "surface-container": "#f7ebed",
              "secondary": "#b90d1d",
              "inverse-surface": "#352f31",
              "surface-bright": "#fff8f8",
              "on-primary": "#ffffff",
              "tertiary-fixed-dim": "#cfc4c6",
              "on-secondary-container": "#fffbff"
            },
            fontFamily: {
              "headline": ["Inter"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
        }
        .glass-nav {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
        }
        .tonal-gradient-blue {
            background: linear-gradient(180deg, #585DE1 0%, #3e42c7 100%);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-surface font-body text-on-surface antialiased">
<!-- TopAppBar -->
<header class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
<div class="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary" data-icon="grid_view">grid_view</span>
<h1 class="text-xl font-black text-on-background uppercase tracking-tighter">Gmax Digital</h1>
</div>
<button class="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest scale-95 active:scale-90 transition-transform">
                Get a Quote
            </button>
</div>
</header>
<main class="pt-20 pb-24">
<!-- Hero Section (White) -->
<section class="px-6 py-12 flex flex-col gap-8">
<div class="space-y-4">
<span class="text-xs font-bold uppercase tracking-[0.2em] text-secondary">The Growth Catalyst</span>
<h2 class="text-5xl font-extrabold tracking-tighter text-on-background leading-[0.9]">Small Businesses. <span class="text-primary-container">Big Solutions.</span></h2>
<p class="text-lg text-on-surface-variant leading-relaxed opacity-80">We build the digital infrastructure that transforms local ventures into market leaders.</p>
<div class="flex flex-col gap-3 pt-4">
<button class="w-full py-4 bg-primary-container text-white font-bold rounded-md shadow-lg shadow-primary-container/20">Explore Our Blueprint</button>
<button class="w-full py-4 text-primary font-bold border-2 border-primary-container/10 rounded-md">View Case Studies</button>
</div>
</div>
<div class="relative mt-4 aspect-[4/5] bg-surface-container rounded-2xl overflow-hidden">
<img alt="Modern office collaborative workspace" class="w-full h-full object-cover" data-alt="Modern collaborative digital agency workspace environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw3LU_A4ADlX35FJaNgPeST3GKirxp8fMqqyP9hBctjjYaPcV8amIEtrPhL6jSZ2J9y4zIKkpXom_-c2ydhXspAiIsAdVyX6kAg8l8YF03xkI_SMBNk9_G3BWkULpYPgrEet9AWL4BDzGG0dALqKqyBY6BgHs3tzmkkYP2DsevEciXjxG_RNzO831nSQdg8o-jdfY7cebBUKzsktKXdKxn8yHXwDfO3XfgXaLX84jFFLGXqQHZQj8MIZok_n-cfjR6Gv9GqUb1hIQ"/>
<div class="absolute bottom-4 left-4 right-4 p-6 glass-nav rounded-xl border border-white/20">
<div class="flex items-center gap-4">
<div class="h-12 w-12 rounded-full bg-secondary-container flex items-center justify-center text-white">
<span class="material-symbols-outlined" data-icon="trending_up">trending_up</span>
</div>
<div>
<p class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Global Reach</p>
<p class="text-xl font-black text-on-background">+420% ROI Average</p>
</div>
</div>
</div>
</div>
</section>
<!-- The Stat Hook (Charcoal) -->
<section class="bg-on-background text-white px-6 py-20 relative overflow-hidden">
<div class="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full blur-[100px]"></div>
<div class="relative z-10 flex flex-col items-center text-center">
<div class="w-20 h-1 bg-secondary mb-8"></div>
<h3 class="text-7xl font-black tracking-tighter text-secondary mb-2">97%</h3>
<p class="text-xl font-bold uppercase tracking-widest mb-6">Of Startups Fail</p>
<p class="text-white/60 text-lg max-w-xs mx-auto leading-relaxed">Most small businesses lack the "Big Data" infrastructure to survive the first 3 years. We are the bridge to longevity.</p>
</div>
</section>
<!-- Services Section (Tonal Transition) -->
<section class="bg-surface-container-low px-6 py-20">
<div class="mb-12">
<span class="text-xs font-black uppercase tracking-[0.2em] text-primary">Capabilities</span>
<h2 class="text-3xl font-extrabold tracking-tight mt-2 text-on-background">Our Solutions</h2>
</div>
<div class="flex flex-col gap-6">
<!-- Service Card 1 -->
<div class="bg-white p-8 rounded-xl shadow-sm border-b-4 border-primary-container">
<span class="material-symbols-outlined text-4xl text-primary mb-6" data-icon="rocket_launch">rocket_launch</span>
<h4 class="text-xl font-bold text-on-background mb-3">Scale Optimization</h4>
<p class="text-on-surface-variant leading-relaxed">Automated marketing funnels designed to capture and convert high-intent leads while you sleep.</p>
</div>
<!-- Service Card 2 -->
<div class="bg-white p-8 rounded-xl shadow-sm border-b-4 border-secondary">
<span class="material-symbols-outlined text-4xl text-secondary mb-6" data-icon="database">database</span>
<h4 class="text-xl font-bold text-on-background mb-3">Data Infrastructure</h4>
<p class="text-on-surface-variant leading-relaxed">Enterprise-grade analytics for local businesses. Know exactly where every dollar goes.</p>
</div>
<!-- Service Card 3 -->
<div class="bg-white p-8 rounded-xl shadow-sm border-b-4 border-on-background">
<span class="material-symbols-outlined text-4xl text-on-background mb-6" data-icon="brush">brush</span>
<h4 class="text-xl font-bold text-on-background mb-3">Brand Authority</h4>
<p class="text-on-surface-variant leading-relaxed">Visual identities that command premium pricing and foster long-term customer loyalty.</p>
</div>
</div>
</section>
<!-- Gmax Blueprint (White) -->
<section class="bg-white px-6 py-20">
<div class="text-center mb-16">
<h2 class="text-4xl font-black tracking-tighter text-on-background">The Gmax Blueprint</h2>
<div class="w-16 h-1 bg-primary-container mx-auto mt-4"></div>
</div>
<div class="relative pl-8 space-y-12">
<!-- Vertical Line -->
<div class="absolute left-0 top-0 bottom-0 w-px bg-outline-variant/30 ml-3.5"></div>
<!-- Step 1 -->
<div class="relative">
<div class="absolute -left-8 h-8 w-8 rounded-full bg-primary-container flex items-center justify-center text-white ring-8 ring-white">
<span class="text-xs font-bold">01</span>
</div>
<div>
<h5 class="text-lg font-bold text-on-background">Audit &amp; Extraction</h5>
<p class="text-on-surface-variant mt-2">We identify the friction points in your current customer journey through deep data analysis.</p>
</div>
</div>
<!-- Step 2 -->
<div class="relative">
<div class="absolute -left-8 h-8 w-8 rounded-full bg-primary-container flex items-center justify-center text-white ring-8 ring-white">
<span class="text-xs font-bold">02</span>
</div>
<div>
<h5 class="text-lg font-bold text-on-background">System Architecture</h5>
<p class="text-on-surface-variant mt-2">Design of custom digital tools and funnels tailored specifically for your vertical.</p>
</div>
</div>
<!-- Step 3 -->
<div class="relative">
<div class="absolute -left-8 h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-white ring-8 ring-white">
<span class="text-xs font-bold">03</span>
</div>
<div>
<h5 class="text-lg font-bold text-on-background">Aggressive Scaling</h5>
<p class="text-on-surface-variant mt-2">Deploying capital into proven channels to maximize your market dominance quickly.</p>
</div>
</div>
</div>
</section>
<!-- CTA Section (Charcoal Overlay) -->
<section class="m-6 bg-on-background rounded-3xl p-10 relative overflow-hidden text-center">
<div class="absolute inset-0 opacity-20" data-alt="Abstract deep blue network connections background" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnnyKbSEh2iOPfegZ11tUyg47KQoDatGs95-Or-nmb2-Vy_1KnFTkH_sxwwB2IOwNRqMzrcPechKNFqsfMK3SpT3TeGTPxIOsboSAmJroBo2BTU9MmRXCm0ZD_Hm6XCS0HcmH0QlRFHcbM_aL_e5MTK9gLdpDYILLMajd3bKDjx-7Qj9iCTYPxwIQXhqv_WMVF00z7mIc4a4DstJxGVeRD7Ysu1nTill0sd6s42xVxwvM_ixRs4TFKpxoZQf_BwCWPOGEClaOQkbE'); background-size: cover;"></div>
<div class="relative z-10">
<h2 class="text-3xl font-extrabold text-white mb-4 tracking-tight">Ready for a Big Solution?</h2>
<p class="text-white/70 mb-8">Stop surviving. Start dominating your local market today.</p>
<button class="bg-secondary text-white w-full py-4 rounded-xl font-bold text-lg shadow-xl shadow-secondary/30">Get My Growth Audit</button>
</div>
</section>
<!-- Footer -->
<footer class="bg-on-background w-full px-8 py-12 flex flex-col gap-10">
<div class="space-y-6">
<div class="text-lg font-black text-white uppercase tracking-tighter">Gmax Digital</div>
<div class="grid grid-cols-2 gap-4">
<a class="text-white/60 text-sm hover:text-white transition-all" href="#">Privacy Policy</a>
<a class="text-white/60 text-sm hover:text-white transition-all" href="#">Terms of Service</a>
<a class="text-white/60 text-sm hover:text-white transition-all" href="#">Cookie Settings</a>
<a class="text-white/60 text-sm hover:text-white transition-all" href="#">Global Locations</a>
</div>
</div>
<div class="pt-8 border-t border-white/10">
<p class="text-white/40 text-xs leading-relaxed">© 2024 Gmax Digital. Small Businesses. Big Solutions.</p>
</div>
</footer>
</main>
<!-- BottomNavBar (Mobile Only) -->
<nav class="md:hidden fixed bottom-0 left-0 w-full bg-white flex justify-around items-center p-3 pb-safe z-50 border-t border-surface-container shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
<div class="flex flex-col items-center justify-center text-primary-container bg-surface-container-low rounded-xl px-3 py-1">
<span class="material-symbols-outlined text-[20px]" data-icon="lightbulb">lightbulb</span>
<span class="text-[10px] font-bold uppercase tracking-widest mt-1">Solutions</span>
</div>
<div class="flex flex-col items-center justify-center text-on-background/60">
<span class="material-symbols-outlined text-[20px]" data-icon="rocket_launch">rocket_launch</span>
<span class="text-[10px] font-bold uppercase tracking-widest mt-1">Case Studies</span>
</div>
<div class="flex flex-col items-center justify-center text-on-background/60">
<span class="material-symbols-outlined text-[20px]" data-icon="layers">layers</span>
<span class="text-[10px] font-bold uppercase tracking-widest mt-1">Services</span>
</div>
<div class="flex flex-col items-center justify-center text-on-background/60">
<span class="material-symbols-outlined text-[20px]" data-icon="mail">mail</span>
<span class="text-[10px] font-bold uppercase tracking-widest mt-1">Contact</span>
</div>
</nav>
</body></html>

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Gmax Digital - Responsive Tablet Homepage</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "surface-container-low": "#fdf1f3",
              "primary-container": "#585de1",
              "primary-fixed-dim": "#c0c1ff",
              "primary-fixed": "#e1e0ff",
              "surface-dim": "#e3d7da",
              "secondary-fixed-dim": "#ffb3ad",
              "outline-variant": "#c6c5d6",
              "on-primary-fixed-variant": "#2e31b9",
              "background": "#fff8f8",
              "surface-container-lowest": "#ffffff",
              "on-tertiary": "#ffffff",
              "secondary-fixed": "#ffdad7",
              "primary": "#3e42c7",
              "on-secondary-fixed": "#410004",
              "on-primary-fixed": "#04006d",
              "surface-variant": "#ece0e2",
              "on-tertiary-fixed-variant": "#4c4547",
              "outline": "#767686",
              "on-error": "#ffffff",
              "tertiary-container": "#746b6d",
              "surface-tint": "#484dd1",
              "on-primary-container": "#f1efff",
              "inverse-on-surface": "#faeef0",
              "error-container": "#ffdad6",
              "tertiary-fixed": "#ece0e2",
              "on-surface": "#201a1c",
              "tertiary": "#5b5355",
              "error": "#ba1a1a",
              "on-tertiary-container": "#faedf0",
              "on-secondary": "#ffffff",
              "on-surface-variant": "#464554",
              "on-secondary-fixed-variant": "#930012",
              "inverse-primary": "#c0c1ff",
              "on-background": "#201a1c",
              "surface-container-high": "#f1e5e8",
              "surface": "#fff8f8",
              "surface-container-highest": "#ece0e2",
              "secondary-container": "#dd2f33",
              "on-error-container": "#93000a",
              "on-tertiary-fixed": "#201a1c",
              "surface-container": "#f7ebed",
              "secondary": "#b90d1d",
              "inverse-surface": "#352f31",
              "surface-bright": "#fff8f8",
              "on-primary": "#ffffff",
              "tertiary-fixed-dim": "#cfc4c6",
              "on-secondary-container": "#fffbff"
            },
            fontFamily: {
              "headline": ["Inter"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .glass-nav {
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        }
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-surface text-on-surface antialiased">
<!-- TopAppBar -->
<nav class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
<div class="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-[#585DE1]">grid_view</span>
<span class="text-xl font-black text-[#241E20] uppercase tracking-tighter">Gmax Digital</span>
</div>
<div class="hidden md:flex items-center gap-8">
<a class="text-[#585DE1] font-bold border-b-2 border-[#585DE1] pb-1" href="#">Solutions</a>
<a class="text-[#241E20] font-medium hover:text-[#585DE1] transition-colors duration-300" href="#">Case Studies</a>
<a class="text-[#241E20] font-medium hover:text-[#585DE1] transition-colors duration-300" href="#">Services</a>
<a class="text-[#241E20] font-medium hover:text-[#585DE1] transition-colors duration-300" href="#">Contact</a>
</div>
<button class="bg-[#585DE1] text-white px-5 py-2 rounded-xl font-bold tracking-tight scale-95 active:scale-90 transition-transform">
                Get a Quote
            </button>
</div>
</nav>
<main class="pt-20">
<!-- Hero Section: Tablet Side-by-Side -->
<section class="px-8 py-16 md:py-24 bg-white">
<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div class="space-y-6">
<span class="text-[0.75rem] font-bold uppercase tracking-widest text-[#585DE1]">The Architectural Advocate</span>
<h1 class="text-5xl md:text-6xl font-black text-[#241E20] leading-[1.1] tracking-tight">
                        Small Businesses.<br/>
<span class="text-[#585DE1]">Big Solutions.</span>
</h1>
<p class="text-lg text-on-surface-variant leading-relaxed max-w-lg">
                        We build high-performance digital ecosystems for growing companies. Elevate your presence with editorial-grade design and engineering.
                    </p>
<div class="flex gap-4 pt-4">
<button class="bg-[#585DE1] text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-[#585DE1]/20">Start Your Project</button>
<button class="bg-surface-container-low text-[#241E20] px-8 py-4 rounded-lg font-bold border border-outline-variant/30">View Portfolio</button>
</div>
</div>
<div class="relative group">
<div class="absolute -inset-4 bg-surface-container-low rounded-2xl -z-10 transform rotate-2"></div>
<img alt="Digital Strategy Dashboard" class="rounded-xl shadow-2xl w-full object-cover aspect-[4/3]" data-alt="Modern digital marketing analytics dashboard interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1_lsvIGz1qNa_Y1TaqvWQPj76ezN4_RF-Hxf9mktSlN2M0fwNetoZR42WO9mrQcnlp_05Qy-peKdNDSbc8wLEtZzhAyPe7zMH4OWQicxKr3F55eAxJTdv0qiCsHuP8T1-3bnY5x856lqebojEDReYTPkqSa2lxi4jdf9x9w5q6itbRDcoNO1671_2wkiHG0sRFAGcrC2uJ1jUrYxRAkl_yaPnkjF_O3NRdaBt8Y6Vce3IDqxKkwmt30icMPt4XkNJXW1KD-Ux9Kg"/>
<!-- Floating Stat Card (Signature Overlap) -->
<div class="absolute -bottom-6 -left-6 bg-[#241E20] text-white p-6 rounded-xl shadow-xl max-w-[200px]">
<p class="text-3xl font-black text-[#F84343]">142%</p>
<p class="text-xs uppercase tracking-widest font-bold opacity-70">Average ROI Growth</p>
</div>
</div>
</div>
</section>
<!-- Solutions Bento Grid (Charcoal Section) -->
<section class="bg-[#241E20] py-24 px-8 text-white">
<div class="max-w-7xl mx-auto">
<div class="mb-16">
<h2 class="text-4xl font-black tracking-tight mb-4">Strategic Solutions</h2>
<div class="h-1 w-24 bg-[#F84343]"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
<!-- Large Box -->
<div class="md:col-span-8 bg-white/5 backdrop-blur-md rounded-2xl p-10 flex flex-col justify-between border border-white/10 group hover:bg-white/10 transition-all">
<div>
<span class="material-symbols-outlined text-4xl text-[#585DE1] mb-6">rocket_launch</span>
<h3 class="text-3xl font-bold mb-4">Scalable Infrastructure</h3>
<p class="text-white/60 text-lg leading-relaxed max-w-md">Cloud-native solutions designed to grow with your enterprise, ensuring 99.9% uptime and lightning speed.</p>
</div>
<div class="flex items-center gap-2 text-[#585DE1] font-bold cursor-pointer">
<span>Explore Tech Stack</span>
<span class="material-symbols-outlined">arrow_forward</span>
</div>
</div>
<!-- Vertical Small Box -->
<div class="md:col-span-4 bg-[#585DE1] rounded-2xl p-10 flex flex-col justify-end">
<span class="material-symbols-outlined text-4xl text-white mb-6">shield</span>
<h3 class="text-2xl font-bold mb-2">Enterprise Security</h3>
<p class="text-white/80">Bank-level encryption for every small business.</p>
</div>
<!-- Horizontal Small Box -->
<div class="md:col-span-4 bg-white/10 rounded-2xl p-10 border border-white/10">
<span class="material-symbols-outlined text-4xl text-[#F84343] mb-6">ads_click</span>
<h3 class="text-2xl font-bold mb-2">Growth Labs</h3>
<p class="text-white/60">Data-driven marketing automation.</p>
</div>
<!-- Medium Box -->
<div class="md:col-span-8 bg-surface-container-highest/10 rounded-2xl p-10 border border-white/10 flex items-center justify-between gap-8">
<div>
<h3 class="text-2xl font-bold mb-2">Global Integration</h3>
<p class="text-white/60">Seamless APIs for worldwide commerce.</p>
</div>
<div class="flex -space-x-3">
<div class="w-12 h-12 rounded-full bg-white/20 border-2 border-[#241E20]"></div>
<div class="w-12 h-12 rounded-full bg-white/30 border-2 border-[#241E20]"></div>
<div class="w-12 h-12 rounded-full bg-white/40 border-2 border-[#241E20]"></div>
</div>
</div>
</div>
</div>
</section>
<!-- The "Solution Bridge" Section -->
<section class="relative bg-white pt-32 pb-24 px-8">
<!-- Overlap Decoration -->
<div class="absolute top-0 left-0 w-full h-16 bg-[#241E20]"></div>
<div class="max-w-7xl mx-auto">
<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div class="bg-surface-container-low p-12 rounded-2xl shadow-sm border border-outline-variant/20 -mt-32 relative z-10">
<span class="text-[0.75rem] font-bold text-[#F84343] tracking-widest uppercase mb-4 block">Our Methodology</span>
<h2 class="text-3xl font-black text-[#241E20] mb-8">The Blueprint for Authority</h2>
<div class="space-y-8">
<div class="flex gap-6">
<div class="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#585DE1] font-bold">01</div>
<div>
<h4 class="font-bold text-[#241E20]">Architectural Audit</h4>
<p class="text-on-surface-variant text-sm mt-1">We dissect your current digital footprint to find structural leaks.</p>
</div>
</div>
<div class="flex gap-6">
<div class="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#585DE1] font-bold">02</div>
<div>
<h4 class="font-bold text-[#241E20]">Core Engineering</h4>
<p class="text-on-surface-variant text-sm mt-1">Bespoke development focused on speed, SEO, and conversion.</p>
</div>
</div>
<div class="flex gap-6">
<div class="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#585DE1] font-bold">03</div>
<div>
<h4 class="font-bold text-[#241E20]">Expansion Phase</h4>
<p class="text-on-surface-variant text-sm mt-1">Aggressive scaling through targeted digital advocacy.</p>
</div>
</div>
</div>
</div>
<div class="pt-12">
<h3 class="text-4xl font-black text-[#241E20] mb-6 leading-tight">We bridge the gap between where you are and where the giants stand.</h3>
<p class="text-lg text-on-surface-variant mb-8 leading-relaxed">
                            Most agencies focus on aesthetics. We focus on authority. Your digital presence shouldn't just look good—it should command the room. 
                        </p>
<ul class="space-y-4 mb-10">
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-[#F84343]">check_circle</span>
<span class="font-medium">Proprietary Gmax Analytics Engine</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-[#F84343]">check_circle</span>
<span class="font-medium">24/7 Managed Performance Monitoring</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-[#F84343]">check_circle</span>
<span class="font-medium">Editorial Content Strategy Team</span>
</li>
</ul>
<button class="bg-[#241E20] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-3">
                            Secure Your Blueprint
                            <span class="material-symbols-outlined">trending_up</span>
</button>
</div>
</div>
</div>
</section>
<!-- Case Studies (Tonal Depth) -->
<section class="bg-surface-container-low py-24 px-8">
<div class="max-w-7xl mx-auto">
<div class="flex justify-between items-end mb-16">
<div>
<span class="text-[#585DE1] font-bold tracking-[0.2em] text-xs uppercase block mb-2">Success Stories</span>
<h2 class="text-4xl font-black text-[#241E20]">Proven Outcomes</h2>
</div>
<button class="hidden md:flex items-center gap-2 text-[#241E20] font-bold border-b-2 border-[#241E20] pb-1">
                        View All Cases
                    </button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Case Card 1 -->
<div class="bg-white rounded-xl overflow-hidden shadow-sm group">
<div class="relative overflow-hidden aspect-video">
<img alt="Case Study 1" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" data-alt="Modern collaborative workspace with team working on digital project" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_z9U38PbxnsDq6-0eA1dy84aYzBXva5zzgO-O20y65vjxjfuAjDKAn3lepyO4gaICWRt900fughqwuoiLZmK7n3bHburbPbeWBbbufT-tEs2XGW1hsqcpq74DjQzGer6nL8nOs5vJlNB_4TAwA5oj02Bz5dB1Tx8O7UJtQVcpoSD-D-sb7zUwS0UehxhSa-BcPoIO44V4S39QjLuqCGShvpCWhWJ2nbfLPUQZ-Wlur2ruudyZfbOYK4N-x0kgPd3baGBflr8sP64"/>
<div class="absolute top-4 left-4 bg-[#F84343] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">FinTech</div>
</div>
<div class="p-8">
<h4 class="text-2xl font-black text-[#241E20] mb-3">Nebula Systems</h4>
<p class="text-on-surface-variant mb-6">Redefining digital banking for the next generation of European entrepreneurs.</p>
<div class="flex justify-between items-center pt-6 border-t border-surface-container">
<div>
<p class="text-xs uppercase font-bold text-outline">Growth</p>
<p class="text-xl font-black text-[#585DE1]">+210%</p>
</div>
<span class="material-symbols-outlined text-[#241E20] group-hover:translate-x-2 transition-transform">arrow_forward</span>
</div>
</div>
</div>
<!-- Case Card 2 -->
<div class="bg-white rounded-xl overflow-hidden shadow-sm group">
<div class="relative overflow-hidden aspect-video">
<img alt="Case Study 2" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" data-alt="Conceptual image showing connection points and nodes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGRwPJt3GOQI0IqyjML-xyk2QbhDFRzmv4KsIh7jKQIV34txXowpg424QG3hlrbHDfTY-uftwp-vX5NiBaT0oMI-Owbi3xveHRPyGiEnrZCgdvT9MMnvXLfoX6bAUEMRypFIxR6MLG3OsRKaiJ7fuG0a0ff3jtV_ZOnNZSX65Id_3H56l5dTeEPS3ijdApq7JumBkyee0I4XCC4KlFZwkEwZlcUU8rZmXXkWR63mJ0mIHYx-zXs94pqg5-ve7zYckr1U9Fy3GjejY"/>
<div class="absolute top-4 left-4 bg-[#F84343] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">Retail</div>
</div>
<div class="p-8">
<h4 class="text-2xl font-black text-[#241E20] mb-3">Vanguard Goods</h4>
<p class="text-on-surface-variant mb-6">Transitioning a heritage brand into a high-conversion e-commerce powerhouse.</p>
<div class="flex justify-between items-center pt-6 border-t border-surface-container">
<div>
<p class="text-xs uppercase font-bold text-outline">Revenue</p>
<p class="text-xl font-black text-[#585DE1]">$4.2M/yr</p>
</div>
<span class="material-symbols-outlined text-[#241E20] group-hover:translate-x-2 transition-transform">arrow_forward</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="bg-[#585DE1] py-20 px-8">
<div class="max-w-4xl mx-auto text-center">
<h2 class="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Ready for a big solution?</h2>
<p class="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Join the 200+ businesses who transitioned from noise to authority with Gmax Digital.</p>
<div class="flex flex-col md:flex-row gap-4 justify-center">
<button class="bg-[#F84343] text-white px-10 py-5 rounded-lg font-black text-lg shadow-xl shadow-black/10">Get Your Free Strategy Call</button>
<button class="bg-white text-[#241E20] px-10 py-5 rounded-lg font-black text-lg">Download Services Guide</button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-[#241E20] text-white w-full relative">
<div class="w-full px-8 py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 max-w-7xl mx-auto">
<div class="space-y-4">
<div class="text-lg font-black text-white uppercase tracking-tighter">Gmax Digital</div>
<p class="text-white/40 max-w-xs text-sm font-inter leading-relaxed">
                    Small Businesses. Big Solutions. We engineer digital growth through architectural design and strategy.
                </p>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div class="flex flex-col gap-4">
<span class="text-xs font-bold uppercase tracking-widest text-[#F84343]">Company</span>
<a class="text-white/60 hover:text-white transition-all text-sm" href="#">About Us</a>
<a class="text-white/60 hover:text-white transition-all text-sm" href="#">Careers</a>
</div>
<div class="flex flex-col gap-4">
<span class="text-xs font-bold uppercase tracking-widest text-[#F84343]">Resources</span>
<a class="text-white/60 hover:text-white transition-all text-sm" href="#">Blog</a>
<a class="text-white/60 hover:text-white transition-all text-sm" href="#">Guides</a>
</div>
</div>
</div>
<div class="border-t border-white/5 px-8 py-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div class="text-white/40 text-xs">
                © 2024 Gmax Digital. Small Businesses. Big Solutions.
            </div>
<div class="flex gap-6">
<a class="text-white/60 hover:text-white text-xs" href="#">Privacy Policy</a>
<a class="text-white/60 hover:text-white text-xs" href="#">Terms of Service</a>
<a class="text-white/60 hover:text-white text-xs" href="#">Cookie Settings</a>
<a class="text-white/60 hover:text-white text-xs" href="#">Global Locations</a>
</div>
</div>
</footer>
<!-- BottomNavBar (Mobile Only Visibility based on JSON logic but typically hidden for Tablet 1024px) -->
<div class="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center p-3 pb-safe bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 rounded-t-xl">
<div class="flex flex-col items-center justify-center text-[#241E20]/60">
<span class="material-symbols-outlined">lightbulb</span>
<span class="text-[10px] font-bold uppercase tracking-widest mt-1">Solutions</span>
</div>
<div class="flex flex-col items-center justify-center text-[#241E20]/60">
<span class="material-symbols-outlined">rocket_launch</span>
<span class="text-[10px] font-bold uppercase tracking-widest mt-1">Cases</span>
</div>
<div class="flex flex-col items-center justify-center text-[#585DE1] bg-[#FDF1F3] rounded-xl px-3 py-1">
<span class="material-symbols-outlined">layers</span>
<span class="text-[10px] font-bold uppercase tracking-widest mt-1">Services</span>
</div>
<div class="flex flex-col items-center justify-center text-[#241E20]/60">
<span class="material-symbols-outlined">mail</span>
<span class="text-[10px] font-bold uppercase tracking-widest mt-1">Contact</span>
</div>
</div>
</body></html>

About (Why Gmax Digital)

<!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Why Gmax Digital | Built for Businesses That Need More Than Visibility</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "outline-variant": "#c6c5d6",
                "on-secondary-fixed-variant": "#930012",
                "inverse-on-surface": "#faeef0",
                "on-tertiary-fixed": "#201a1c",
                "surface-bright": "#fff8f8",
                "secondary-fixed": "#ffdad7",
                "on-primary-fixed-variant": "#2e31b9",
                "outline": "#767686",
                "surface-tint": "#484dd1",
                "secondary-fixed-dim": "#ffb3ad",
                "inverse-primary": "#c0c1ff",
                "primary": "#3e42c7",
                "secondary": "#b90d1d",
                "surface-container-lowest": "#ffffff",
                "primary-fixed": "#e1e0ff",
                "on-secondary-fixed": "#410004",
                "tertiary-fixed": "#ece0e2",
                "primary-container": "#585de1",
                "on-surface": "#201a1c",
                "on-surface-variant": "#464554",
                "on-secondary": "#ffffff",
                "surface-dim": "#e3d7da",
                "primary-fixed-dim": "#c0c1ff",
                "surface-variant": "#ece0e2",
                "inverse-surface": "#352f31",
                "on-primary": "#ffffff",
                "error-container": "#ffdad6",
                "surface-container-highest": "#ece0e2",
                "surface-container": "#f7ebed",
                "on-secondary-container": "#fffbff",
                "tertiary-fixed-dim": "#cfc4c6",
                "surface-container-low": "#fdf1f3",
                "surface": "#fff8f8",
                "on-tertiary-container": "#faedf0",
                "on-error": "#ffffff",
                "on-tertiary-fixed-variant": "#4c4547",
                "on-primary-fixed": "#04006d",
                "background": "#fff8f8",
                "tertiary-container": "#746b6d",
                "secondary-container": "#dd2f33",
                "tertiary": "#5b5355",
                "on-error-container": "#93000a",
                "surface-container-high": "#f1e5e8",
                "on-primary-container": "#f1efff",
                "on-background": "#201a1c",
                "on-tertiary": "#ffffff",
                "error": "#ba1a1a"
              },
              fontFamily: {
                "headline": ["Inter"],
                "body": ["Inter"],
                "label": ["Inter"]
              },
              borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
            },
          },
        }
    </script>
<style>
        body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .glass-nav { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
        .editorial-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 2rem; }
    </style>
</head>
<body class="bg-surface text-on-surface">
<!-- Top Navigation -->
<nav class="fixed top-0 w-full z-50 bg-white/70 dark:bg-[#241E20]/70 backdrop-blur-xl">
<div class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
<a class="text-xl font-black tracking-tighter text-[#241E20] dark:text-white uppercase" href="#">Gmax Digital</a>
<div class="hidden md:flex gap-10 items-center">
<a class="text-[#241E20] dark:text-white/80 hover:text-[#585DE1] transition-colors font-['Inter'] antialiased tracking-tight" href="#">Solutions</a>
<a class="text-[#241E20] dark:text-white/80 hover:text-[#585DE1] transition-colors font-['Inter'] antialiased tracking-tight" href="#">Case Studies</a>
<a class="text-[#585DE1] font-bold border-b-2 border-[#585DE1] pb-1 font-['Inter'] antialiased tracking-tight" href="#">About</a>
<a class="text-[#241E20] dark:text-white/80 hover:text-[#585DE1] transition-colors font-['Inter'] antialiased tracking-tight" href="#">Insights</a>
</div>
<button class="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 active:scale-95 transition-all duration-300">Get a Quote</button>
</div>
</nav>
<!-- Hero Section -->
<section class="pt-40 pb-32 px-8 max-w-7xl mx-auto">
<div class="max-w-4xl">
<span class="label-md uppercase tracking-[0.2em] text-primary font-bold mb-6 block">Why Gmax Digital</span>
<h1 class="text-6xl md:text-7xl font-bold text-on-background tracking-tighter mb-8 leading-[1.05]">
                Built for businesses that need more than <span class="text-primary italic">visibility.</span>
</h1>
<p class="text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-2xl mb-12">
                Gmax Digital exists to help founders and growing businesses strengthen the foundations that determine whether ideas gain trust, relevance, and market momentum.
            </p>
<button class="bg-primary-container text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center group transition-all">
                Start a Conversation
                <span class="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</section>
<!-- Why Businesses Choose Section -->
<section class="bg-on-background py-32 px-8">
<div class="max-w-7xl mx-auto">
<h2 class="text-white text-4xl font-bold mb-20 tracking-tight">Why businesses choose Gmax Digital</h2>
<div class="grid md:grid-cols-3 gap-8">
<!-- Card 1 -->
<div class="bg-[#2a2326] p-10 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
<div class="text-primary-container mb-6">
<span class="material-symbols-outlined text-4xl">insights</span>
</div>
<h3 class="text-white text-2xl font-bold mb-4">Strategic Thinking First</h3>
<p class="text-white/60 leading-relaxed">
                        We look beyond common marketing metrics to identify the structural growth barriers holding your business back.
                    </p>
</div>
<!-- Card 2 -->
<div class="bg-[#2a2326] p-10 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
<div class="text-primary-container mb-6">
<span class="material-symbols-outlined text-4xl">travel_explore</span>
</div>
<h3 class="text-white text-2xl font-bold mb-4">Real Market Conditions</h3>
<p class="text-white/60 leading-relaxed">
                        Strategy built for the world as it exists today, not as it appears in generic business templates or textbook models.
                    </p>
</div>
<!-- Card 3 -->
<div class="bg-[#2a2326] p-10 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
<div class="text-primary-container mb-6">
<span class="material-symbols-outlined text-4xl">hub</span>
</div>
<h3 class="text-white text-2xl font-bold mb-4">Multi-Disciplinary</h3>
<p class="text-white/60 leading-relaxed">
                        A synthesis of marketing, engineering, psychology, and design to solve complex business challenges holistically.
                    </p>
</div>
</div>
</div>
</section>
<!-- Our Perspective Section -->
<section class="py-32 px-8 bg-surface-container-low">
<div class="max-w-7xl mx-auto">
<div class="flex flex-col md:flex-row gap-20">
<div class="md:w-1/3">
<h2 class="text-4xl font-bold tracking-tight sticky top-32">What we believe about growth</h2>
</div>
<div class="md:w-2/3 space-y-16">
<div class="border-l-4 border-primary pl-10">
<h4 class="text-3xl font-bold mb-4">Strong products fail without clear value.</h4>
<p class="text-lg text-on-surface-variant">Engineering excellence is only half the battle. If the market cannot perceive your value instantly, your product remains invisible.</p>
</div>
<div class="border-l-4 border-primary pl-10">
<h4 class="text-3xl font-bold mb-4">Trust becomes opportunity.</h4>
<p class="text-lg text-on-surface-variant">In a saturated digital world, trust is the highest form of currency. We build digital assets that earn it through consistency and clarity.</p>
</div>
<div class="border-l-4 border-primary pl-10">
<h4 class="text-3xl font-bold mb-4">Visibility without positioning is waste.</h4>
<p class="text-lg text-on-surface-variant">Spending on traffic before defining your position is an expensive way to learn that people don't understand what you do.</p>
</div>
<div class="border-l-4 border-primary pl-10">
<h4 class="text-3xl font-bold mb-4">Digital presence should reduce doubt.</h4>
<p class="text-lg text-on-surface-variant">Your website and marketing should answer the questions your customers haven't even asked yet, removing friction from the decision.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Team Section -->
<section class="py-32 px-8 bg-white">
<div class="max-w-7xl mx-auto">
<div class="mb-20">
<h2 class="text-4xl font-bold mb-6">The people behind Gmax Digital</h2>
<p class="text-xl text-on-surface-variant max-w-2xl">A growing team combining strategic thinking, digital execution, and market understanding.</p>
</div>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
<!-- Founder -->
<div class="group">
<div class="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="Portrait of a male founder in professional attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_3hugsQfilDgFj_KzKvVOfwL1x681d1hj9m6ZYHK9WBYI0lVWlBGGB-_3U5oChrzIKzbnmd_lNUq8PLP0LE1JkP5ZYW46WQDMR8gc7Q-JFOlAu5XQld5p3scmeDvZ2TDE_Mm7409XHXvYfGYATVM4jz208O_QP9KRyxxCUGWauf8aUzCGTIZT6QfDst8Af3UwT7NzsVdvU-BJU9XzjIooAa4nJ43VyZ2NstcHw4A53g3kkD_w77TiXuXtPT9TIwrLHxQqklc3GPA"/>
</div>
<h3 class="text-xl font-bold">Strategic Lead</h3>
<p class="text-primary font-medium mb-2">Founder</p>
<p class="text-on-surface-variant text-sm">Focused on bridging the gap between technical complexity and market relevance.</p>
</div>
<!-- Core Collaborator 1 -->
<div class="group">
<div class="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="Portrait of a female professional executive" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjFsV7QuVQSUwfY1T6hb7FxBpqF4Q-I82w2vrE6aFmPWBMRUBDAWj7SdIywArO_kJHw1P1Pecoa22qAO9qwQcgoZ5DF01UMP2WwOR8nTGJTFvbES7QlypJQo8EUsPLWTiwt2CRwZACAYPsghjEtQa4uMDPlP9fwInEI0b_U1-ITIEqO1vjRAwwIDLI6NWITKc72w69Ah4QIqj_ba0byf7Z4Ms3_eTc8XEXLH_uzCPMJoJUJpGQLKrNu5BpF7OWUjTyrM3jn-lugYI"/>
</div>
<h3 class="text-xl font-bold">Growth Strategy</h3>
<p class="text-primary font-medium mb-2">Core Collaborator</p>
<p class="text-on-surface-variant text-sm">Expertise in multi-channel scaling and audience psychology.</p>
</div>
<!-- Core Collaborator 2 -->
<div class="group">
<div class="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="Portrait of a male design director" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK3TLCsrvlfEFyt-FM2GMvmPiKtZK4yZlo1PRi32HXuA9AJcAzI9SwWhSG8qeFg5XPZUZIcf3N3ZPEEbG9rko-O-T8y_LViz-ezHvXpzOhclUsWyatG0d_R91tCkj3f8s6Wm6UrGY0whdfT-IwJl6gk2ZEpDNQwmTl-39yBJ83uB3zxi-uhNTYCpfn_zGEt8ErwbjMfmZwXEx6rNTVCQEBVxRwDruZ9-s9iRTHpoWSNZ8EFnlHwT8cXADmk0N9Sw_WoUXOswC3ZWQ"/>
</div>
<h3 class="text-xl font-bold">Technical Design</h3>
<p class="text-primary font-medium mb-2">Core Collaborator</p>
<p class="text-on-surface-variant text-sm">Specializing in high-performance digital architecture and user flow.</p>
</div>
</div>
</div>
</section>
<!-- Who We Work With Section (Bento Grid) -->
<section class="py-32 px-8 bg-surface-container-low">
<div class="max-w-7xl mx-auto">
<h2 class="text-4xl font-bold mb-16 tracking-tight text-center">Who we work with</h2>
<div class="grid md:grid-cols-3 gap-6">
<div class="bg-surface p-12 rounded-2xl flex flex-col justify-between min-h-[320px] shadow-sm">
<span class="material-symbols-outlined text-secondary text-5xl mb-8">rocket_launch</span>
<div>
<h3 class="text-2xl font-bold mb-4">Founders building software products</h3>
<p class="text-on-surface-variant">Translating complex features into compelling market narratives.</p>
</div>
</div>
<div class="bg-primary text-white p-12 rounded-2xl flex flex-col justify-between min-h-[320px]">
<span class="material-symbols-outlined text-4xl mb-8">architecture</span>
<div>
<h3 class="text-2xl font-bold mb-4 text-white">Startups refining market direction</h3>
<p class="text-white/80">Defining the "Why" before spending on the "How."</p>
</div>
</div>
<div class="bg-on-background text-white p-12 rounded-2xl flex flex-col justify-between min-h-[320px]">
<span class="material-symbols-outlined text-secondary-container text-5xl mb-8">corporate_fare</span>
<div>
<h3 class="text-2xl font-bold mb-4 text-white">Growing businesses needing foundations</h3>
<p class="text-white/60">Modernizing digital presence to match professional reputations.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Working Philosophy Section -->
<section class="py-32 px-8">
<div class="max-w-7xl mx-auto">
<div class="text-center mb-20">
<h2 class="text-4xl font-bold mb-4">Working Philosophy</h2>
<div class="h-1 w-20 bg-primary mx-auto"></div>
</div>
<div class="grid md:grid-cols-4 gap-12 text-center">
<div>
<span class="text-5xl font-black text-primary/10 block mb-6">01</span>
<h4 class="font-bold text-lg mb-4 uppercase tracking-widest">Understand</h4>
<p class="text-sm text-on-surface-variant">We understand before recommending. No generic solutions.</p>
</div>
<div>
<span class="text-5xl font-black text-primary/10 block mb-6">02</span>
<h4 class="font-bold text-lg mb-4 uppercase tracking-widest">Position</h4>
<p class="text-sm text-on-surface-variant">We position before promoting. Clarity is non-negotiable.</p>
</div>
<div>
<span class="text-5xl font-black text-primary/10 block mb-6">03</span>
<h4 class="font-bold text-lg mb-4 uppercase tracking-widest">Build</h4>
<p class="text-sm text-on-surface-variant">We build for trust. Every interaction matters.</p>
</div>
<div>
<span class="text-5xl font-black text-primary/10 block mb-6">04</span>
<h4 class="font-bold text-lg mb-4 uppercase tracking-widest">Focus</h4>
<p class="text-sm text-on-surface-variant">We focus on long-term relevance, not just quick wins.</p>
</div>
</div>
</div>
</section>
<!-- Strategic Outcomes (Signature Component: The Solution Bridge) -->
<section class="relative py-32 overflow-hidden">
<div class="absolute inset-0 z-0">
<div class="h-1/2 bg-white"></div>
<div class="h-1/2 bg-on-background"></div>
</div>
<div class="max-w-7xl mx-auto px-8 relative z-10">
<div class="bg-surface-container-highest p-12 md:p-20 rounded-xl shadow-2xl border border-white/20">
<h2 class="text-4xl font-bold mb-12 tracking-tight">What stronger foundations make possible</h2>
<div class="grid md:grid-cols-2 gap-x-20 gap-y-10">
<div class="flex items-start gap-4">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<div>
<h4 class="font-bold text-lg">Better clarity</h4>
<p class="text-on-surface-variant text-sm">Internal alignment and external messaging that works.</p>
</div>
</div>
<div class="flex items-start gap-4">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<div>
<h4 class="font-bold text-lg">Stronger market confidence</h4>
<p class="text-on-surface-variant text-sm">Showing up with authority that competitors can't fake.</p>
</div>
</div>
<div class="flex items-start gap-4">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<div>
<h4 class="font-bold text-lg">Improved digital credibility</h4>
<p class="text-on-surface-variant text-sm">Assets that function as your best 24/7 sales representatives.</p>
</div>
</div>
<div class="flex items-start gap-4">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<div>
<h4 class="font-bold text-lg">Clearer value communication</h4>
<p class="text-on-surface-variant text-sm">Removing the burden of explanation from your sales team.</p>
</div>
</div>
<div class="flex items-start gap-4">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<div>
<h4 class="font-bold text-lg">Better growth readiness</h4>
<p class="text-on-surface-variant text-sm">A platform built to scale without breaking your brand.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="bg-on-background py-32 px-8">
<div class="max-w-4xl mx-auto text-center">
<h2 class="text-white text-5xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight">The right strategy often starts with the right conversation</h2>
<p class="text-white/60 text-xl mb-12">Clarity often comes before momentum.</p>
<div class="flex flex-col md:flex-row gap-6 justify-center items-center">
<button class="bg-primary text-white px-10 py-5 rounded-lg font-bold text-lg w-full md:w-auto hover:bg-primary-container transition-all">
                    Book a Strategy Call
                </button>
<button class="border border-white/20 text-white px-10 py-5 rounded-lg font-bold text-lg w-full md:w-auto hover:bg-white/5 transition-all">
                    Send a Message
                </button>
</div>
<p class="mt-8 text-white/40 text-sm tracking-widest uppercase">No pressure — just a focused discussion.</p>
</div>
</section>
</body></html>

another page

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Services | Gmax Digital</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "on-secondary-fixed": "#410004",
              "surface-container-high": "#f1e5e8",
              "secondary-fixed": "#ffdad7",
              "on-secondary-container": "#fffbff",
              "on-secondary": "#ffffff",
              "on-primary-fixed-variant": "#2e31b9",
              "background": "#fff8f8",
              "primary": "#3e42c7",
              "tertiary-fixed": "#ece0e2",
              "surface-tint": "#484dd1",
              "surface-container": "#f7ebed",
              "on-secondary-fixed-variant": "#930012",
              "outline-variant": "#c6c5d6",
              "primary-fixed-dim": "#c0c1ff",
              "on-error": "#ffffff",
              "on-tertiary-fixed-variant": "#4c4547",
              "on-tertiary-container": "#faedf0",
              "inverse-surface": "#352f31",
              "surface": "#fff8f8",
              "secondary-container": "#dd2f33",
              "inverse-on-surface": "#faeef0",
              "error": "#ba1a1a",
              "on-primary": "#ffffff",
              "on-tertiary": "#ffffff",
              "surface-bright": "#fff8f8",
              "on-surface": "#201a1c",
              "tertiary-fixed-dim": "#cfc4c6",
              "surface-container-low": "#fdf1f3",
              "outline": "#767686",
              "surface-container-highest": "#ece0e2",
              "primary-container": "#585de1",
              "on-primary-fixed": "#04006d",
              "surface-variant": "#ece0e2",
              "secondary-fixed-dim": "#ffb3ad",
              "tertiary-container": "#746b6d",
              "on-error-container": "#93000a",
              "surface-dim": "#e3d7da",
              "error-container": "#ffdad6",
              "tertiary": "#5b5355",
              "on-tertiary-fixed": "#201a1c",
              "primary-fixed": "#e1e0ff",
              "on-primary-container": "#f1efff",
              "secondary": "#b90d1d",
              "on-surface-variant": "#464554",
              "surface-container-lowest": "#ffffff",
              "on-background": "#201a1c",
              "inverse-primary": "#c0c1ff"
            },
            fontFamily: {
              "headline": ["Inter"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; }
        .glass-nav {
            background-color: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
        }
        .text-tight { letter-spacing: -0.02em; }
        .label-caps { text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.75rem; font-weight: 600; }
    </style>
</head>
<body class="bg-surface text-on-surface">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 glass-nav shadow-sm">
<div class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
<div class="text-xl font-black tracking-tighter text-[#241E20] dark:text-white">Gmax Digital</div>
<div class="hidden md:flex space-x-10 items-center">
<a class="text-[#241E20] dark:text-gray-300 hover:text-[#585DE1] transition-colors font-medium tracking-tight" href="#">Solutions</a>
<a class="text-[#241E20] dark:text-gray-300 hover:text-[#585DE1] transition-colors font-medium tracking-tight" href="#">Process</a>
<a class="text-[#241E20] dark:text-gray-300 hover:text-[#585DE1] transition-colors font-medium tracking-tight" href="#">Case Studies</a>
<a class="text-[#241E20] dark:text-gray-300 hover:text-[#585DE1] transition-colors font-medium tracking-tight" href="#">About</a>
</div>
<button class="bg-[#585DE1] text-white px-6 py-2.5 rounded-md font-medium text-sm hover:opacity-80 transition-all active:scale-95 duration-200">Get a Quote</button>
</div>
</nav>
<main class="pt-20">
<!-- Hero Section -->
<section class="relative min-h-[819px] flex items-center px-8 overflow-hidden bg-surface">
<div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div class="z-10">
<span class="label-caps text-primary mb-6 block">Our Expertise</span>
<h1 class="text-5xl md:text-[3.5rem] font-black text-on-surface leading-[1.1] text-tight mb-8">
                        Services built around what businesses need before growth happens
                    </h1>
<p class="text-lg text-on-surface-variant leading-relaxed max-w-xl mb-10">
                        Strong growth rarely begins with execution alone. It begins with positioning, trust, and systems designed to support visibility and confidence.
                    </p>
<div class="flex flex-col sm:flex-row gap-4">
<button class="bg-primary-container text-white px-8 py-4 rounded-md font-bold text-lg hover:opacity-90 transition-all shadow-lg active:scale-95">Book a Strategy Call</button>
</div>
</div>
<div class="relative hidden md:block">
<div class="aspect-square bg-surface-container rounded-full relative overflow-hidden flex items-center justify-center">
<div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
<img alt="Abstract digital composition" class="w-full h-full object-cover opacity-80 mix-blend-multiply" data-alt="Minimal premium abstract digital geometric composition with blue tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEjK0bMrvywdeoCOrEWfjUgfxi4zqFtpCwxQCOpJTdeI1p4EqVwIqh8YWcVJzZLvYCphZHvEEORMKBz0hqh3o3JMgSm5XJ3fDdSRaB_IWoUPafqVGkzXjilwGVJosV4ZTqLotg1wOCWodbOb33mg43qRjcH22Fr5RPbHlhoFGb9iPyXfxBFXIjUW1aBR4a5-lg9N-6oct_RBjOljk3cKJJz-nJtsg-0XjUTSJrZp42rGeOegzZVIgVaVkPjTDridptieSJX4ByVtk"/>
<div class="absolute inset-0 flex items-center justify-center">
<div class="w-64 h-64 border border-primary/20 rounded-full animate-pulse"></div>
<div class="absolute w-48 h-48 border border-secondary/20 rounded-full animate-ping"></div>
</div>
</div>
</div>
</div>
</section>
<!-- Core Services Section (Bento Grid Style) -->
<section class="py-24 bg-surface-container-low px-8">
<div class="max-w-7xl mx-auto">
<div class="mb-16">
<span class="label-caps text-secondary mb-4 block">Core Competencies</span>
<h2 class="text-3xl md:text-[2rem] font-bold text-on-surface text-tight">What We Help Businesses Strengthen</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
<div class="md:col-span-2 bg-white p-10 rounded-xl shadow-sm border-l-4 border-primary">
<span class="material-symbols-outlined text-primary text-4xl mb-6" data-icon="account_balance">account_balance</span>
<h3 class="text-2xl font-bold mb-4">Strategic Positioning</h3>
<p class="text-on-surface-variant">Defining where you win in the market and how your brand is perceived against competitors.</p>
</div>
<div class="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
<span class="material-symbols-outlined text-primary text-4xl mb-6" data-icon="hub">hub</span>
<h3 class="text-xl font-bold mb-4">Digital Infrastructure</h3>
<p class="text-on-surface-variant">Robust systems built for scale and seamless user experience.</p>
</div>
<div class="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
<span class="material-symbols-outlined text-primary text-4xl mb-6" data-icon="visibility">visibility</span>
<h3 class="text-xl font-bold mb-4">Growth Visibility</h3>
<p class="text-on-surface-variant">Ensuring your solutions reach the right people at the right moment.</p>
</div>
<div class="md:col-span-4 bg-[#241E20] text-white p-12 rounded-xl flex flex-col md:flex-row justify-between items-center gap-8">
<div>
<span class="material-symbols-outlined text-secondary text-4xl mb-4" data-icon="rocket_launch">rocket_launch</span>
<h3 class="text-2xl font-bold mb-2">Founder Product Marketing</h3>
<p class="text-gray-400 max-w-lg">Direct alignment between vision and execution. We turn founder intuition into market-ready assets.</p>
</div>
<button class="border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-md transition-all">Learn more about Founder support</button>
</div>
</div>
</div>
</section>
<!-- Detailed Service Breakdown -->
<section class="py-24 px-8 bg-surface">
<div class="max-w-7xl mx-auto">
<div class="text-center mb-20">
<h2 class="text-3xl md:text-[2rem] font-bold text-on-surface text-tight mb-4">How each service creates value</h2>
<p class="text-on-surface-variant max-w-2xl mx-auto">Strategic depth is at the core of our delivery. We don't just execute tasks; we solve for long-term business resilience.</p>
</div>
<div class="space-y-12">
<!-- Service Row 1 -->
<div class="grid md:grid-cols-3 gap-8 py-12 border-b border-outline-variant/30 items-start">
<div>
<h4 class="text-xl font-bold text-primary mb-2">Strategic Positioning</h4>
<p class="text-sm font-semibold label-caps text-on-surface-variant opacity-70">Strategic Foundation</p>
</div>
<div class="md:col-span-1">
<p class="text-on-surface leading-relaxed">Defining your unique market advantage. We analyze competitors and audience intent to craft a narrative that cuts through noise.</p>
</div>
<div class="bg-surface-container p-6 rounded-lg">
<p class="text-xs font-bold label-caps mb-4 text-primary">Strategic Outcomes</p>
<ul class="space-y-2">
<li class="flex items-center gap-2 text-sm font-medium"><span class="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Clearer messaging</li>
<li class="flex items-center gap-2 text-sm font-medium"><span class="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Stronger market trust</li>
<li class="flex items-center gap-2 text-sm font-medium"><span class="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Targeted reach</li>
</ul>
</div>
</div>
<!-- Service Row 2 -->
<div class="grid md:grid-cols-3 gap-8 py-12 border-b border-outline-variant/30 items-start">
<div>
<h4 class="text-xl font-bold text-primary mb-2">Digital Infrastructure</h4>
<p class="text-sm font-semibold label-caps text-on-surface-variant opacity-70">Systemic Integrity</p>
</div>
<div class="md:col-span-1">
<p class="text-on-surface leading-relaxed">Building the digital architecture your business deserves. High-performance websites and internal tools that eliminate growth friction.</p>
</div>
<div class="bg-surface-container p-6 rounded-lg">
<p class="text-xs font-bold label-caps mb-4 text-primary">Strategic Outcomes</p>
<ul class="space-y-2">
<li class="flex items-center gap-2 text-sm font-medium"><span class="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Improved digital presentation</li>
<li class="flex items-center gap-2 text-sm font-medium"><span class="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Scalable architecture</li>
<li class="flex items-center gap-2 text-sm font-medium"><span class="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Seamless CX</li>
</ul>
</div>
</div>
<!-- Service Row 3 -->
<div class="grid md:grid-cols-3 gap-8 py-12 items-start">
<div>
<h4 class="text-xl font-bold text-primary mb-2">Founder Product Marketing</h4>
<p class="text-sm font-semibold label-caps text-on-surface-variant opacity-70">Executive Readiness</p>
</div>
<div class="md:col-span-1">
<p class="text-on-surface leading-relaxed">Bridging the gap between vision and market execution. We help founders translate complex ideas into persuasive marketing assets.</p>
</div>
<div class="bg-surface-container p-6 rounded-lg">
<p class="text-xs font-bold label-caps mb-4 text-primary">Strategic Outcomes</p>
<ul class="space-y-2">
<li class="flex items-center gap-2 text-sm font-medium"><span class="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Better launch readiness</li>
<li class="flex items-center gap-2 text-sm font-medium"><span class="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> High-value perception</li>
<li class="flex items-center gap-2 text-sm font-medium"><span class="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Strategic alignment</li>
</ul>
</div>
</div>
</div>
</div>
</section>
<!-- Gmax Service Process -->
<section class="py-24 px-8 bg-[#241E20] text-white">
<div class="max-w-7xl mx-auto">
<div class="mb-20 text-center">
<span class="label-caps text-secondary-fixed-dim mb-4 block">The Methodology</span>
<h2 class="text-3xl md:text-[2rem] font-bold text-tight">How services are delivered</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-white/10">
<div class="pt-8 pr-8 border-r border-white/10 pb-12 md:pb-0">
<span class="text-5xl font-black text-white/10 block mb-6">01</span>
<h4 class="text-xl font-bold mb-4">Discover</h4>
<p class="text-gray-400 text-sm leading-relaxed">Uncovering the hidden friction points and unarticulated needs of your business model.</p>
</div>
<div class="pt-8 px-8 border-r border-white/10 pb-12 md:pb-0">
<span class="text-5xl font-black text-white/10 block mb-6">02</span>
<h4 class="text-xl font-bold mb-4">Define</h4>
<p class="text-gray-400 text-sm leading-relaxed">Establishing clear benchmarks, positioning statements, and the roadmap for execution.</p>
</div>
<div class="pt-8 px-8 border-r border-white/10 pb-12 md:pb-0">
<span class="text-5xl font-black text-white/10 block mb-6">03</span>
<h4 class="text-xl font-bold mb-4">Execute</h4>
<p class="text-gray-400 text-sm leading-relaxed">High-precision delivery of digital assets, systems, and messaging frameworks.</p>
</div>
<div class="pt-8 pl-8 pb-12 md:pb-0">
<span class="text-5xl font-black text-white/10 block mb-6">04</span>
<h4 class="text-xl font-bold mb-4">Strengthen</h4>
<p class="text-gray-400 text-sm leading-relaxed">Continuous refinement based on market feedback to ensure long-term resilience.</p>
</div>
</div>
</div>
</section>
<!-- Pricing Section -->
<section class="py-24 px-8 bg-surface-container-low">
<div class="max-w-7xl mx-auto">
<div class="text-center mb-16">
<h2 class="text-3xl md:text-[2rem] font-bold text-on-surface text-tight mb-6">Engagement models designed around business needs</h2>
<p class="text-on-surface-variant max-w-3xl mx-auto">Every business has different growth conditions. Pricing is structured around scope, complexity, and strategic depth rather than one-size-fits-all packages.</p>
</div>
<div class="grid md:grid-cols-3 gap-8">
<!-- Model 1 -->
<div class="bg-white p-10 rounded-xl flex flex-col border border-outline-variant/20">
<h3 class="text-xl font-bold mb-4">Strategic Consultation</h3>
<p class="text-on-surface-variant text-sm mb-8">Focused advisory, growth assessment, and high-level positioning alignment.</p>
<div class="mt-auto">
<div class="mb-6">
<span class="text-xs font-bold label-caps opacity-50">Starting from</span>
<div class="text-2xl font-black text-on-surface">£150</div>
</div>
<button class="w-full py-4 border-2 border-primary text-primary font-bold rounded-md hover:bg-primary hover:text-white transition-all">Request Consultation</button>
</div>
</div>
<!-- Model 2 -->
<div class="bg-white p-10 rounded-xl flex flex-col shadow-xl ring-2 ring-primary relative scale-105 z-10">
<div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold label-caps px-4 py-1 rounded-full">Most Common</div>
<h3 class="text-xl font-bold mb-4">Project-Based Engagement</h3>
<p class="text-on-surface-variant text-sm mb-8">Custom scope, fixed deliverables, and a tailored proposal for your specific needs.</p>
<div class="mt-auto">
<div class="mb-6">
<span class="text-xs font-bold label-caps opacity-50">Starting from</span>
<div class="text-2xl font-black text-on-surface">Custom Proposal</div>
</div>
<button class="w-full py-4 bg-primary text-white font-bold rounded-md hover:opacity-90 transition-all">Request Proposal</button>
</div>
</div>
<!-- Model 3 -->
<div class="bg-white p-10 rounded-xl flex flex-col border border-outline-variant/20">
<h3 class="text-xl font-bold mb-4">Ongoing Strategic Support</h3>
<p class="text-on-surface-variant text-sm mb-8">Continuous refinement, growth support, and long-term visibility strategy.</p>
<div class="mt-auto">
<div class="mb-6">
<span class="text-xs font-bold label-caps opacity-50">Starting from</span>
<div class="text-2xl font-black text-on-surface">Tailored Monthly</div>
</div>
<button class="w-full py-4 border-2 border-primary text-primary font-bold rounded-md hover:bg-primary hover:text-white transition-all">Discuss Partnership</button>
</div>
</div>
</div>
</div>
</section>
<!-- Trust Section -->
<section class="py-24 px-8 bg-white">
<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div class="md:w-1/2">
<h2 class="text-3xl font-bold text-tight mb-8">What stronger service foundations make possible</h2>
<div class="space-y-6">
<div class="flex gap-4">
<span class="material-symbols-outlined text-secondary" data-icon="lightbulb">lightbulb</span>
<div>
<p class="font-bold">Better business clarity</p>
<p class="text-sm text-on-surface-variant">Knowing exactly who you serve and why you are the better choice.</p>
</div>
</div>
<div class="flex gap-4">
<span class="material-symbols-outlined text-secondary" data-icon="verified_user">verified_user</span>
<div>
<p class="font-bold">Stronger trust signals</p>
<p class="text-sm text-on-surface-variant">Immediate credibility established through premium digital presence.</p>
</div>
</div>
<div class="flex gap-4">
<span class="material-symbols-outlined text-secondary" data-icon="track_changes">track_changes</span>
<div>
<p class="font-bold">Improved positioning</p>
<p class="text-sm text-on-surface-variant">Moving from a commodity provider to a high-value strategic partner.</p>
</div>
</div>
<div class="flex gap-4">
<span class="material-symbols-outlined text-secondary" data-icon="groups">groups</span>
<div>
<p class="font-bold">Clearer customer understanding</p>
<p class="text-sm text-on-surface-variant">Aligned messaging that resonates with high-intent decision makers.</p>
</div>
</div>
<div class="flex gap-4">
<span class="material-symbols-outlined text-secondary" data-icon="shield">shield</span>
<div>
<p class="font-bold">Stronger digital confidence</p>
<p class="text-sm text-on-surface-variant">The certainty that your online assets are working as hard as you are.</p>
</div>
</div>
</div>
</div>
<div class="md:w-1/2 relative">
<div class="bg-surface-container-high rounded-2xl p-4 overflow-hidden shadow-2xl">
<img alt="Professional meeting" class="rounded-xl grayscale hover:grayscale-0 transition-all duration-700" data-alt="Close up of professional strategic discussion in a modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL0gT80VlBfVzIcM1r_xEosNuCfJGzo734URpBd4riQMuZUMY0DU1XGUWD_K1o-aRMo6LRU8zDvIn-SH-SR-Wkqg-4S9flW7s_Ky2VpqayP0UQRgeiLietZxz52Z3iG2b7JfmO1mKQeru9C_NsY5ZlcrFpQ8yRp-mu8lUag108Yor_kzqizR6JnS2qOp5wQ6DXljISVjvX_MfxQDnW1DmsYmAh4V3Bntgx_DHo6Ok3sw8cA9LlWotXTwlM9oCv6_uTH91__ppizA8"/>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="py-24 px-8 bg-[#241E20] text-white">
<div class="max-w-4xl mx-auto text-center">
<h2 class="text-4xl md:text-5xl font-black text-tight mb-8">The right service starts with understanding what matters most now</h2>
<p class="text-xl text-gray-400 mb-12">A focused conversation helps determine what your business needs before deciding how to move.</p>
<div class="flex flex-col sm:flex-row justify-center gap-6 mb-12">
<button class="bg-[#F84343] hover:bg-[#d93a3a] text-white px-10 py-5 rounded-md font-bold text-lg transition-all shadow-lg active:scale-95">Book a Strategy Call</button>
<button class="bg-transparent border-2 border-white/20 hover:bg-white/10 text-white px-10 py-5 rounded-md font-bold text-lg transition-all">Send a Message</button>
</div>
<p class="text-sm font-medium text-gray-500 italic">No pressure — just strategic clarity around your current priorities.</p>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full pt-20 pb-10 bg-[#241E20] dark:bg-black border-t border-white/10 px-12">
<div class="flex flex-col md:flex-row justify-between items-center">
<div class="mb-8 md:mb-0">
<div class="text-lg font-bold text-white mb-2">Gmax Digital</div>
<p class="font-['Inter'] text-xs uppercase tracking-widest text-gray-400">Architectural Advocacy for Small Business.</p>
</div>
<div class="flex space-x-8">
<a class="font-['Inter'] text-sm uppercase tracking-widest text-gray-400 hover:text-[#F84343] transition-colors" href="#">Privacy Policy</a>
<a class="font-['Inter'] text-sm uppercase tracking-widest text-gray-400 hover:text-[#F84343] transition-colors" href="#">Terms of Service</a>
<a class="font-['Inter'] text-sm uppercase tracking-widest text-gray-400 hover:text-[#F84343] transition-colors" href="#">LinkedIn</a>
<a class="font-['Inter'] text-sm uppercase tracking-widest text-gray-400 hover:text-[#F84343] transition-colors" href="#">Contact</a>
</div>
</div>
<div class="mt-12 text-center">
<p class="font-['Inter'] text-[10px] uppercase tracking-widest text-gray-500 opacity-50">© 2024 Gmax Digital. Architectural Advocacy for Small Business.</p>
</div>
</footer>
</body></html> -->

Services section

<!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Services | Gmax Digital</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "on-primary-container": "#f1efff",
              "surface-bright": "#fff8f8",
              "surface-tint": "#484dd1",
              "on-primary-fixed": "#04006d",
              "inverse-surface": "#352f31",
              "secondary-fixed-dim": "#ffb3ad",
              "tertiary": "#5b5355",
              "on-secondary-fixed-variant": "#930012",
              "on-background": "#201a1c",
              "surface-variant": "#ece0e2",
              "error": "#ba1a1a",
              "on-primary": "#ffffff",
              "surface-container-high": "#f1e5e8",
              "tertiary-fixed": "#ece0e2",
              "surface-container-low": "#fdf1f3",
              "primary-fixed-dim": "#c0c1ff",
              "on-primary-fixed-variant": "#2e31b9",
              "on-surface": "#201a1c",
              "surface-container-highest": "#ece0e2",
              "tertiary-container": "#746b6d",
              "on-secondary": "#ffffff",
              "outline": "#767686",
              "on-tertiary-container": "#faedf0",
              "primary-container": "#585de1",
              "on-error-container": "#93000a",
              "inverse-primary": "#c0c1ff",
              "surface-dim": "#e3d7da",
              "error-container": "#ffdad6",
              "surface-container-lowest": "#ffffff",
              "surface": "#fff8f8",
              "primary-fixed": "#e1e0ff",
              "on-tertiary-fixed": "#201a1c",
              "inverse-on-surface": "#faeef0",
              "background": "#fff8f8",
              "surface-container": "#f7ebed",
              "primary": "#3e42c7",
              "on-surface-variant": "#464554",
              "on-secondary-fixed": "#410004",
              "on-secondary-container": "#fffbff",
              "tertiary-fixed-dim": "#cfc4c6",
              "outline-variant": "#c6c5d6",
              "on-tertiary-fixed-variant": "#4c4547",
              "secondary-fixed": "#ffdad7",
              "secondary-container": "#dd2f33",
              "secondary": "#b90d1d",
              "on-tertiary": "#ffffff",
              "on-error": "#ffffff"
            },
            fontFamily: {
              "headline": ["Inter"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      }
      .glass-nav {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(12px);
      }
    </style>
</head>
<body class="bg-surface text-on-surface font-body antialiased">
<!-- Top Navigation -->
<nav class="fixed top-0 w-full z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-sm dark:shadow-none">
<div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between font-['Inter'] antialiased tracking-tight">
<div class="text-xl font-black tracking-tighter text-zinc-900 dark:text-white">Gmax Digital</div>
<div class="hidden md:flex items-center space-x-8">
<a class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">What We Do</a>
<a class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">Why Gmax</a>
<a class="text-[#585DE1] font-bold border-b-2 border-[#585DE1] pb-1" href="#">Services</a>
</div>
<button class="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-semibold active:scale-95 duration-150 transition-all hover:bg-primary/90">
                Book a Call
            </button>
</div>
<div class="bg-zinc-100 dark:bg-zinc-800 h-[1px] w-full absolute bottom-0 opacity-20"></div>
</nav>
<!-- Hero Section -->
<section class="relative pt-40 pb-24 px-6 bg-surface overflow-hidden">
<div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div class="relative z-10">
<span class="inline-block text-secondary font-bold tracking-widest text-[0.75rem] uppercase mb-6 bg-secondary/5 px-3 py-1 rounded">London Strategic Consultancy</span>
<h1 class="text-5xl md:text-6xl font-black text-on-background leading-[1.1] tracking-tight mb-8">
                    Services designed to help businesses become <span class="text-primary">easier to trust</span>, understand, and choose.
                </h1>
<p class="text-xl text-on-surface-variant leading-relaxed max-w-xl mb-10">
                    Strong businesses often need more than execution — they need clarity, stronger digital foundations, and strategic visibility built intentionally.
                </p>
<div class="flex flex-wrap gap-4">
<button class="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all active:scale-95">
                        Book a Strategy Call
                    </button>
</div>
</div>
<div class="relative">
<div class="aspect-square bg-surface-container-high rounded-full overflow-hidden flex items-center justify-center p-12">
<img alt="Abstract digital network pattern" class="w-full h-full object-cover rounded-full opacity-80 mix-blend-multiply" data-alt="Abstract blue and white digital data network" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjXVJN4lrxyxfcR8GRG0wfojBysBc53eGzXgRBDB00uGxcfwTOTYGAZ-CNQVUL3BzbpFuWxYamtyELU5p9NQnNhB_0clUFs7iIdzWtAArZoXCzvWox3KMXgU9B9FtHZ7CxZfCIIqq8jysrbauFtwUTapd2X07abt3F97UJMGW6LTuihUMfEQUtsOZ85vgOp-_LhJQPwBTqw3MBZgAI2vDnLegIG4ea2LK_9M3vN-bjzj2t4XQ7Wq2qhifrIKa8HL0gBIURmPtAOUY"/>
</div>
<!-- Floating Decorative Element -->
<div class="absolute -bottom-6 -left-6 bg-white p-8 rounded-xl shadow-2xl border border-surface-container max-w-[240px]">
<div class="flex items-center gap-2 mb-4">
<span class="material-symbols-outlined text-primary" data-icon="verified">verified</span>
<span class="font-bold text-sm uppercase tracking-wider text-on-surface">Proven Outcomes</span>
</div>
<p class="text-sm text-on-surface-variant">Strategically led digital growth for service-based founders.</p>
</div>
</div>
</div>
</section>
<!-- Services Grid: What We Do -->
<section class="py-24 px-6 bg-on-background text-white">
<div class="max-w-7xl mx-auto">
<div class="mb-20 text-center md:text-left">
<h2 class="text-4xl font-bold mb-4">What We Do</h2>
<div class="h-1 w-20 bg-secondary"></div>
</div>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
<!-- Card 1 -->
<div class="group p-10 bg-zinc-900 border border-zinc-800 hover:border-primary transition-all duration-300">
<span class="material-symbols-outlined text-primary text-4xl mb-6 block" data-icon="devices">devices</span>
<h3 class="text-2xl font-bold mb-4">Website Design &amp; Digital Presence</h3>
<p class="text-zinc-400 mb-8 leading-relaxed">High-conversion business websites and landing pages focused on building immediate digital trust.</p>
<div class="pt-6 border-t border-zinc-800 text-sm font-medium">
<span class="text-primary uppercase tracking-tighter mr-2">Outcome:</span>
<span class="text-zinc-300">Help businesses look credible.</span>
</div>
</div>
<!-- Card 2 -->
<div class="group p-10 bg-zinc-900 border border-zinc-800 hover:border-primary transition-all duration-300">
<span class="material-symbols-outlined text-primary text-4xl mb-6 block" data-icon="architecture">architecture</span>
<h3 class="text-2xl font-bold mb-4">Brand Positioning &amp; Messaging</h3>
<p class="text-zinc-400 mb-8 leading-relaxed">Messaging refinement and offer clarity that eliminates market noise and aligns with customer needs.</p>
<div class="pt-6 border-t border-zinc-800 text-sm font-medium">
<span class="text-primary uppercase tracking-tighter mr-2">Outcome:</span>
<span class="text-zinc-300">Reduce confusion.</span>
</div>
</div>
<!-- Card 3 -->
<div class="group p-10 bg-zinc-900 border border-zinc-800 hover:border-primary transition-all duration-300">
<span class="material-symbols-outlined text-primary text-4xl mb-6 block" data-icon="rocket_launch">rocket_launch</span>
<h3 class="text-2xl font-bold mb-4">Software Product Marketing</h3>
<p class="text-zinc-400 mb-8 leading-relaxed">Specialized SaaS messaging and launch positioning designed specifically for technical founders.</p>
<div class="pt-6 border-t border-zinc-800 text-sm font-medium">
<span class="text-primary uppercase tracking-tighter mr-2">Outcome:</span>
<span class="text-zinc-300">Make software easier to choose.</span>
</div>
</div>
<!-- Card 4 -->
<div class="group p-10 bg-zinc-900 border border-zinc-800 hover:border-primary transition-all duration-300">
<span class="material-symbols-outlined text-primary text-4xl mb-6 block" data-icon="insights">insights</span>
<h3 class="text-2xl font-bold mb-4">Marketing Strategy &amp; Visibility</h3>
<p class="text-zinc-400 mb-8 leading-relaxed">Campaign direction and audience strategy focused on building sustainable long-term visibility.</p>
<div class="pt-6 border-t border-zinc-800 text-sm font-medium">
<span class="text-primary uppercase tracking-tighter mr-2">Outcome:</span>
<span class="text-zinc-300">Support sustainable visibility.</span>
</div>
</div>
<!-- Card 5 -->
<div class="group p-10 bg-zinc-900 border border-zinc-800 hover:border-primary transition-all duration-300">
<span class="material-symbols-outlined text-primary text-4xl mb-6 block" data-icon="verified_user">verified_user</span>
<h3 class="text-2xl font-bold mb-4">Digital Trust &amp; Conversion</h3>
<p class="text-zinc-400 mb-8 leading-relaxed">Optimizing trust design and CTA structures to remove friction and reduce user hesitation.</p>
<div class="pt-6 border-t border-zinc-800 text-sm font-medium">
<span class="text-primary uppercase tracking-tighter mr-2">Outcome:</span>
<span class="text-zinc-300">Reduce hesitation.</span>
</div>
</div>
<!-- Card 6 -->
<div class="group p-10 bg-zinc-900 border border-zinc-800 hover:border-primary transition-all duration-300">
<span class="material-symbols-outlined text-primary text-4xl mb-6 block" data-icon="partner_exchange">partner_exchange</span>
<h3 class="text-2xl font-bold mb-4">Strategic Consultation</h3>
<p class="text-zinc-400 mb-8 leading-relaxed">Clarity sessions and growth reviews to help founders make stronger, data-informed decisions.</p>
<div class="pt-6 border-t border-zinc-800 text-sm font-medium">
<span class="text-primary uppercase tracking-tighter mr-2">Outcome:</span>
<span class="text-zinc-300">Help businesses make stronger decisions.</span>
</div>
</div>
</div>
</div>
</section>
<!-- Process Section -->
<section class="py-24 px-6 bg-surface">
<div class="max-w-7xl mx-auto">
<div class="grid md:grid-cols-4 gap-12">
<div class="relative">
<div class="text-6xl font-black text-surface-container-highest mb-6">01</div>
<h4 class="text-xl font-bold mb-2">Understand</h4>
<p class="text-on-surface-variant text-sm">Deep dive into current bottlenecks and core business objectives.</p>
<div class="hidden md:block absolute top-8 -right-6 text-primary/20">
<span class="material-symbols-outlined text-4xl" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
<div class="relative">
<div class="text-6xl font-black text-surface-container-highest mb-6">02</div>
<h4 class="text-xl font-bold mb-2">Clarify</h4>
<p class="text-on-surface-variant text-sm">Simplifying messaging and aligning strategy with market truth.</p>
<div class="hidden md:block absolute top-8 -right-6 text-primary/20">
<span class="material-symbols-outlined text-4xl" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
<div class="relative">
<div class="text-6xl font-black text-surface-container-highest mb-6">03</div>
<h4 class="text-xl font-bold mb-2">Build</h4>
<p class="text-on-surface-variant text-sm">Executing digital assets and campaigns with precision.</p>
<div class="hidden md:block absolute top-8 -right-6 text-primary/20">
<span class="material-symbols-outlined text-4xl" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
<div>
<div class="text-6xl font-black text-surface-container-highest mb-6">04</div>
<h4 class="text-xl font-bold mb-2">Strengthen</h4>
<p class="text-on-surface-variant text-sm">Optimizing based on feedback to ensure long-term stability.</p>
</div>
</div>
</div>
</section>
<!-- Engagement Models Section -->
<section class="py-24 px-6 bg-surface-container-low">
<div class="max-w-7xl mx-auto">
<div class="mb-16 text-center">
<h2 class="text-4xl font-bold mb-4">Engagement Models</h2>
<p class="text-on-surface-variant max-w-2xl mx-auto">Pricing is structured around project scope, business complexity, and strategic depth to ensure the highest ROI for your unique situation.</p>
</div>
<div class="grid md:grid-cols-3 gap-8">
<!-- Model 1 -->
<div class="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-primary/20">
<h3 class="text-2xl font-bold mb-6">Strategic Consultation</h3>
<p class="text-on-surface-variant mb-10 h-20">One-off sessions focused on solving immediate strategic bottlenecks and gaining rapid clarity.</p>
<button class="w-full py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
                        Request Consultation
                    </button>
</div>
<!-- Model 2 (Featured) -->
<div class="bg-white p-10 rounded-xl shadow-xl border-t-4 border-secondary scale-105 z-10">
<div class="inline-block bg-secondary text-white text-[0.7rem] font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">Recommended</div>
<h3 class="text-2xl font-bold mb-6">Project Engagement</h3>
<p class="text-on-surface-variant mb-10 h-20">Comprehensive execution for websites, brand messaging, or product launches with defined timelines.</p>
<button class="w-full py-4 bg-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                        Request Proposal
                    </button>
</div>
<!-- Model 3 -->
<div class="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-primary/20">
<h3 class="text-2xl font-bold mb-6">Ongoing Support</h3>
<p class="text-on-surface-variant mb-10 h-20">Retainer-based partnership providing continuous strategic direction and marketing oversight.</p>
<button class="w-full py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
                        Discuss Partnership
                    </button>
</div>
</div>
</div>
</section>
<!-- Trust / Outcomes Section -->
<section class="py-24 px-6 bg-white border-y border-surface-container">
<div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 class="text-3xl font-bold mb-8 text-on-background">What these services help improve</h2>
<div class="space-y-6">
<div class="flex gap-4">
<div class="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary text-sm" data-icon="check" data-weight="fill">check</span>
</div>
<p class="text-lg font-medium text-on-surface">Stronger professional credibility in your industry.</p>
</div>
<div class="flex gap-4">
<div class="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary text-sm" data-icon="check" data-weight="fill">check</span>
</div>
<p class="text-lg font-medium text-on-surface">Clearer market understanding and positioning.</p>
</div>
<div class="flex gap-4">
<div class="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary text-sm" data-icon="check" data-weight="fill">check</span>
</div>
<p class="text-lg font-medium text-on-surface">Better digital presentation across all touchpoints.</p>
</div>
<div class="flex gap-4">
<div class="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary text-sm" data-icon="check" data-weight="fill">check</span>
</div>
<p class="text-lg font-medium text-on-surface">Improved user trust and conversion metrics.</p>
</div>
<div class="flex gap-4">
<div class="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary text-sm" data-icon="check" data-weight="fill">check</span>
</div>
<p class="text-lg font-medium text-on-surface">Stronger overall growth readiness for the future.</p>
</div>
</div>
</div>
<div class="bg-surface-container p-12 rounded-2xl relative overflow-hidden">
<!-- Signature "Solution Bridge" Pattern -->
<div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
<div class="relative z-10">
<p class="text-2xl italic font-light text-on-surface-variant mb-8 leading-relaxed">
                        "Gmax Digital didn't just build us a website; they gave us a strategic foundation that made our expertise obvious to potential clients who were previously overlooking us."
                    </p>
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full bg-primary-container"></div>
<div>
<p class="font-bold">Software Founder</p>
<p class="text-sm text-on-surface-variant">London, UK</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Final CTA Section -->
<section class="py-32 px-6 bg-surface overflow-hidden relative">
<div class="max-w-4xl mx-auto text-center relative z-10">
<h2 class="text-4xl md:text-5xl font-black mb-10 tracking-tight leading-tight">
                The right service starts with understanding what matters most now.
            </h2>
<div class="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
<button class="w-full md:w-auto px-10 py-5 bg-primary text-on-primary font-bold rounded-lg shadow-lg hover:translate-y-[-2px] transition-all">
                    Book a Strategy Call
                </button>
<button class="w-full md:w-auto px-10 py-5 bg-white border border-outline-variant text-on-background font-bold rounded-lg hover:bg-surface-container transition-all">
                    Send a Message
                </button>
</div>
<p class="text-on-surface-variant font-medium">No pressure — just strategic clarity around your goals.</p>
</div>
<!-- Decorative abstract background shape -->
<div class="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
<div class="absolute -top-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
</section>
<!-- Footer -->
<footer class="bg-zinc-900 dark:bg-black w-full py-12 px-6 border-t border-zinc-800 font-['Inter'] text-sm leading-relaxed">
<div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div class="text-lg font-bold text-white uppercase tracking-widest">Gmax Digital</div>
<div class="flex gap-8">
<a class="text-zinc-500 hover:text-zinc-300 hover:underline decoration-[#F84343] underline-offset-4 transition-colors" href="#">Privacy Policy</a>
<a class="text-zinc-500 hover:text-zinc-300 hover:underline decoration-[#F84343] underline-offset-4 transition-colors" href="#">Terms of Service</a>
<a class="text-zinc-500 hover:text-zinc-300 hover:underline decoration-[#F84343] underline-offset-4 transition-colors" href="#">Case Studies</a>
<a class="text-zinc-500 hover:text-zinc-300 hover:underline decoration-[#F84343] underline-offset-4 transition-colors" href="#">Contact</a>
</div>
<div class="text-zinc-500">
                © 2024 Gmax Digital. Small Businesses. Big Solutions.
            </div>
</div>
</footer>
</body></html>

Insights section design

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Insights | Gmax Digital</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary-fixed-dim": "#c0c1ff",
              "on-surface": "#201a1c",
              "on-error-container": "#93000a",
              "on-primary-container": "#f1efff",
              "on-surface-variant": "#464554",
              "outline": "#767686",
              "on-error": "#ffffff",
              "surface": "#fff8f8",
              "on-primary": "#ffffff",
              "on-secondary": "#ffffff",
              "surface-bright": "#fff8f8",
              "on-background": "#201a1c",
              "inverse-on-surface": "#faeef0",
              "surface-container-high": "#f1e5e8",
              "secondary-fixed": "#ffdad7",
              "tertiary-fixed": "#ece0e2",
              "primary-container": "#585de1",
              "background": "#fff8f8",
              "on-tertiary-container": "#faedf0",
              "primary-fixed": "#e1e0ff",
              "inverse-primary": "#c0c1ff",
              "tertiary": "#5b5355",
              "on-tertiary-fixed-variant": "#4c4547",
              "secondary": "#b90d1d",
              "on-tertiary": "#ffffff",
              "primary": "#3e42c7",
              "on-tertiary-fixed": "#201a1c",
              "tertiary-fixed-dim": "#cfc4c6",
              "tertiary-container": "#746b6d",
              "surface-tint": "#484dd1",
              "surface-container-low": "#fdf1f3",
              "error": "#ba1a1a",
              "surface-variant": "#ece0e2",
              "surface-container": "#f7ebed",
              "on-secondary-fixed-variant": "#930012",
              "error-container": "#ffdad6",
              "on-primary-fixed-variant": "#2e31b9",
              "outline-variant": "#c6c5d6",
              "on-secondary-container": "#fffbff",
              "surface-container-highest": "#ece0e2",
              "on-secondary-fixed": "#410004",
              "secondary-fixed-dim": "#ffb3ad",
              "on-primary-fixed": "#04006d",
              "inverse-surface": "#352f31",
              "surface-container-lowest": "#ffffff",
              "secondary-container": "#dd2f33",
              "surface-dim": "#e3d7da"
            },
            fontFamily: {
              "headline": ["Inter"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
        body { font-family: 'Inter', sans-serif; background-color: #fff8f8; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .glass-nav { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
        .text-editorial-balance { text-wrap: balance; }
    </style>
</head>
<body class="text-on-background antialiased overflow-x-hidden">
<!-- Top Navigation Shell -->
<nav class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm font-['Inter'] antialiased tracking-tight">
<div class="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
<div class="text-xl font-black tracking-tighter text-zinc-900">Gmax Digital</div>
<div class="hidden md:flex items-center gap-8">
<a class="text-zinc-600 font-medium hover:text-zinc-900 transition-colors" href="#">Solutions</a>
<a class="text-zinc-600 font-medium hover:text-zinc-900 transition-colors" href="#">Process</a>
<a class="text-zinc-600 font-medium hover:text-zinc-900 transition-colors" href="#">Case Studies</a>
<a class="text-zinc-600 font-medium hover:text-zinc-900 transition-colors" href="#">About</a>
</div>
<button class="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ease-in-out active:scale-95">
                Get a Quote
            </button>
</div>
</nav>
<main class="pt-20">
<!-- Hero Section -->
<section class="relative min-h-[716px] flex items-center px-6 overflow-hidden">
<div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div class="lg:col-span-8">
<span class="inline-block py-1 px-3 bg-surface-container text-primary text-xs font-bold tracking-widest uppercase mb-6 rounded">Editorial &amp; Strategy</span>
<h1 class="text-5xl md:text-7xl font-black text-on-surface tracking-tighter leading-[0.9] mb-8 text-editorial-balance">
                        Insights for founders building products that need trust, relevance, and market clarity
                    </h1>
<p class="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
                        Perspectives on positioning and digital credibility. We decode the mechanics of how small businesses transform into market authorities.
                    </p>
<div class="flex flex-wrap gap-4">
<button class="bg-secondary text-on-primary px-8 py-4 rounded-lg font-bold transition-transform hover:-translate-y-1 active:scale-95">
                            Subscribe for Insights
                        </button>
</div>
</div>
<div class="lg:col-span-4 relative hidden lg:block">
<div class="aspect-square bg-surface-container-high rounded-full overflow-hidden flex items-center justify-center border-8 border-white shadow-2xl">
<div class="w-full h-full bg-gradient-to-br from-primary-container/20 to-secondary-container/20" data-alt="Abstract minimalist geometric pattern with soft gradients"></div>
</div>
<div class="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-xl max-w-[200px]">
<p class="text-sm font-medium italic">"Strategy is the art of sacrifice for the sake of clarity."</p>
</div>
</div>
</div>
</section>
<!-- Featured Perspective: Solution Bridge Pattern -->
<section class="py-24 px-6 bg-inverse-surface">
<div class="max-w-7xl mx-auto">
<div class="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-0">
<div class="h-full min-h-[400px] bg-zinc-800 relative overflow-hidden order-2 lg:order-1">
<img alt="Founders discussing strategy" class="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" data-alt="Black and white high contrast image of people in a meeting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJuNpC4AG9HHOVSXgWPy833239F84eOq5dNgrbTfhN2VIey9b_DyMAFu07Ar-WvcycNlie4eTQ5C8yA0TL4gEhrFzYjUapt6_0EMsI7UrcrBShv3nWUQJFX5l8iYKiPK35wLbb7GpgYhAOertbWJp1E2SLjqHKSWU4wDyc5-8SOVPnlkYxzrSqThbbGHQC37uYojK3o88fxaN4ck165achKqA6dz4J2S1nfrWXHo_KVf2Cip_PTdsQpBToL7OuDDRIW7e4tdGlKXA"/>
</div>
<div class="bg-surface-container-lowest p-12 lg:p-20 order-1 lg:order-2 lg:-ml-12 relative z-10 shadow-2xl">
<span class="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Long Form Insight</span>
<h2 class="text-3xl md:text-5xl font-black tracking-tight text-on-surface mb-6 leading-tight">
                            90% of startups fail — often because markets never clearly understand their value
                        </h2>
<p class="text-on-surface-variant text-lg leading-relaxed mb-8">
                            Technical excellence is no longer a moat. In a crowded digital landscape, the winner isn't the one with the best code, but the one who communicates relevance fastest. We explore why clarity is the ultimate competitive advantage.
                        </p>
<a class="inline-flex items-center gap-2 text-primary font-bold group" href="#">
                            Read Insight
                            <span class="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
<!-- Latest Insights Grid -->
<section class="py-24 px-6 bg-surface">
<div class="max-w-7xl mx-auto">
<div class="flex justify-between items-end mb-16">
<div>
<h2 class="text-4xl font-black tracking-tight mb-2">The Archive</h2>
<p class="text-on-surface-variant">Continuous perspective on digital market authority.</p>
</div>
<div class="hidden md:block">
<span class="text-sm font-medium text-zinc-400">Sort by: Date</span>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<!-- Card 1 -->
<div class="group bg-surface-container-lowest p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
<div>
<span class="text-[10px] uppercase tracking-widest text-secondary font-black mb-4 block">Trust Mechanics</span>
<h3 class="text-xl font-bold leading-snug mb-4 group-hover:text-primary transition-colors">Why strong software products still struggle to gain trust</h3>
<p class="text-on-surface-variant text-sm line-clamp-3 mb-6">Founders often focus on feature lists, forgetting that trust is built through consistent narrative and social proof architecture.</p>
</div>
<a class="text-xs font-bold uppercase tracking-tighter border-b-2 border-transparent group-hover:border-primary inline-block w-fit pb-1 transition-all" href="#">Read More</a>
</div>
<!-- Card 2 -->
<div class="group bg-surface-container-lowest p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
<div>
<span class="text-[10px] uppercase tracking-widest text-secondary font-black mb-4 block">Market Readiness</span>
<h3 class="text-xl font-bold leading-snug mb-4 group-hover:text-primary transition-colors">Positioning mistakes founders make before launch</h3>
<p class="text-on-surface-variant text-sm line-clamp-3 mb-6">The danger of "generic excellence" and how to niche down without losing your future scalability.</p>
</div>
<a class="text-xs font-bold uppercase tracking-tighter border-b-2 border-transparent group-hover:border-primary inline-block w-fit pb-1 transition-all" href="#">Read More</a>
</div>
<!-- Card 3 -->
<div class="group bg-surface-container-lowest p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
<div>
<span class="text-[10px] uppercase tracking-widest text-secondary font-black mb-4 block">Growth Strategy</span>
<h3 class="text-xl font-bold leading-snug mb-4 group-hover:text-primary transition-colors">Why digital credibility matters before traffic</h3>
<p class="text-on-surface-variant text-sm line-clamp-3 mb-6">Spending on ads before fixing your landing page's authority signals is a fast way to burn capital.</p>
</div>
<a class="text-xs font-bold uppercase tracking-tighter border-b-2 border-transparent group-hover:border-primary inline-block w-fit pb-1 transition-all" href="#">Read More</a>
</div>
<!-- Card 4 -->
<div class="group bg-surface-container-lowest p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
<div>
<span class="text-[10px] uppercase tracking-widest text-secondary font-black mb-4 block">Product Design</span>
<h3 class="text-xl font-bold leading-snug mb-4 group-hover:text-primary transition-colors">Designing for the 'Enterprise Skeptic'</h3>
<p class="text-on-surface-variant text-sm line-clamp-3 mb-6">Tactics for moving upmarket and convincing high-stakes decision makers through UI clarity.</p>
</div>
<a class="text-xs font-bold uppercase tracking-tighter border-b-2 border-transparent group-hover:border-primary inline-block w-fit pb-1 transition-all" href="#">Read More</a>
</div>
<!-- Card 5 -->
<div class="group bg-surface-container-lowest p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
<div>
<span class="text-[10px] uppercase tracking-widest text-secondary font-black mb-4 block">Digital Trust</span>
<h3 class="text-xl font-bold leading-snug mb-4 group-hover:text-primary transition-colors">The Invisible Leak: Is your brand losing users at checkout?</h3>
<p class="text-on-surface-variant text-sm line-clamp-3 mb-6">Analyzing micro-moments of friction that destroy the credibility you worked so hard to build.</p>
</div>
<a class="text-xs font-bold uppercase tracking-tighter border-b-2 border-transparent group-hover:border-primary inline-block w-fit pb-1 transition-all" href="#">Read More</a>
</div>
<!-- Card 6 -->
<div class="group bg-surface-container-lowest p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
<div>
<span class="text-[10px] uppercase tracking-widest text-secondary font-black mb-4 block">Founder Marketing</span>
<h3 class="text-xl font-bold leading-snug mb-4 group-hover:text-primary transition-colors">Building Authority without being an Influencer</h3>
<p class="text-on-surface-variant text-sm line-clamp-3 mb-6">Founders don't need to post daily selfies to build a credible professional digital presence.</p>
</div>
<a class="text-xs font-bold uppercase tracking-tighter border-b-2 border-transparent group-hover:border-primary inline-block w-fit pb-1 transition-all" href="#">Read More</a>
</div>
</div>
</div>
</section>
<!-- Categories Section -->
<section class="py-24 px-6 bg-surface-container-low">
<div class="max-w-7xl mx-auto">
<h2 class="text-sm font-black uppercase tracking-[0.3em] mb-12 text-center text-on-surface-variant">Focus Domains</h2>
<div class="flex flex-wrap justify-center gap-4">
<div class="px-8 py-10 bg-white shadow-sm border border-outline-variant/10 min-w-[240px] flex-1 text-center hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
<span class="material-symbols-outlined text-4xl mb-4" data-icon="layers">layers</span>
<h4 class="font-bold">Product Positioning</h4>
</div>
<div class="px-8 py-10 bg-white shadow-sm border border-outline-variant/10 min-w-[240px] flex-1 text-center hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
<span class="material-symbols-outlined text-4xl mb-4" data-icon="record_voice_over">record_voice_over</span>
<h4 class="font-bold">Founder Marketing</h4>
</div>
<div class="px-8 py-10 bg-white shadow-sm border border-outline-variant/10 min-w-[240px] flex-1 text-center hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
<span class="material-symbols-outlined text-4xl mb-4" data-icon="verified">verified</span>
<h4 class="font-bold">Digital Trust</h4>
</div>
<div class="px-8 py-10 bg-white shadow-sm border border-outline-variant/10 min-w-[240px] flex-1 text-center hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
<span class="material-symbols-outlined text-4xl mb-4" data-icon="trending_up">trending_up</span>
<h4 class="font-bold">Growth Strategy</h4>
</div>
<div class="px-8 py-10 bg-white shadow-sm border border-outline-variant/10 min-w-[240px] flex-1 text-center hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
<span class="material-symbols-outlined text-4xl mb-4" data-icon="rocket_launch">rocket_launch</span>
<h4 class="font-bold">Market Readiness</h4>
</div>
</div>
</div>
</section>
<!-- Strategic Quote -->
<section class="py-32 px-6 bg-zinc-900 text-white relative overflow-hidden">
<div class="max-w-4xl mx-auto text-center relative z-10">
<span class="material-symbols-outlined text-6xl text-secondary mb-8 opacity-50" data-icon="format_quote">format_quote</span>
<p class="text-3xl md:text-5xl font-light italic leading-tight mb-12 text-editorial-balance">
                    "Growth often slows long before businesses notice it — usually where clarity, trust, and relevance were never fully built."
                </p>
<div class="w-24 h-1 bg-secondary mx-auto mb-6"></div>
<p class="text-sm tracking-widest uppercase font-bold text-zinc-500">Gmax Digital Perspective</p>
</div>
<!-- Ambient Pattern -->
<div class="absolute inset-0 opacity-10 pointer-events-none">
<div class="absolute -top-1/2 -left-1/4 w-full h-full bg-primary-container rounded-full blur-[120px]"></div>
<div class="absolute -bottom-1/2 -right-1/4 w-full h-full bg-secondary-container rounded-full blur-[120px]"></div>
</div>
</section>
<!-- Newsletter -->
<section class="py-24 px-6">
<div class="max-w-4xl mx-auto bg-primary p-12 lg:p-16 rounded-2xl shadow-2xl relative overflow-hidden">
<div class="relative z-10 flex flex-col md:flex-row items-center gap-10">
<div class="flex-1 text-center md:text-left">
<h2 class="text-3xl font-black text-white mb-4">Get strategic insights directly</h2>
<p class="text-on-primary-container/80 text-lg">No spam. Only high-conviction perspectives for builders.</p>
</div>
<form class="flex-1 w-full flex flex-col sm:flex-row gap-3">
<input class="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 px-6 py-4 rounded-lg focus:ring-2 focus:ring-white/30 focus:border-white transition-all" placeholder="Email Address" type="email"/>
<button class="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-secondary hover:text-white transition-all" type="submit">Subscribe</button>
</form>
</div>
<!-- Glass accents -->
<div class="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
</div>
</section>
<!-- Final CTA Section -->
<section class="py-32 px-6 border-t border-outline-variant/10">
<div class="max-w-7xl mx-auto text-center">
<h2 class="text-4xl md:text-6xl font-black tracking-tighter text-on-surface mb-8">Need strategic clarity for your business?</h2>
<p class="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">Let's discuss how we can build your brand's authority and market relevance through structured digital strategy.</p>
<div class="flex flex-col sm:flex-row justify-center gap-6">
<button class="bg-secondary text-on-primary px-10 py-5 rounded-lg font-bold text-lg shadow-xl hover:shadow-secondary/20 hover:-translate-y-1 transition-all">
                        Book a Strategy Call
                    </button>
<button class="bg-zinc-100 text-zinc-900 px-10 py-5 rounded-lg font-bold text-lg hover:bg-zinc-200 transition-all border border-zinc-200">
                        Send a Message
                    </button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-[#241E20] w-full py-12 px-6 mt-auto font-['Inter'] text-sm tracking-wide">
<div class="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
<div class="text-lg font-bold text-white">Gmax Digital</div>
<div class="flex gap-8">
<a class="text-zinc-400 hover:text-[#F84343] transition-colors hover:underline decoration-[#F84343] underline-offset-4" href="#">Privacy Policy</a>
<a class="text-zinc-400 hover:text-[#F84343] transition-colors hover:underline decoration-[#F84343] underline-offset-4" href="#">Terms of Service</a>
<a class="text-zinc-400 hover:text-[#F84343] transition-colors hover:underline decoration-[#F84343] underline-offset-4" href="#">LinkedIn</a>
<a class="text-zinc-400 hover:text-[#F84343] transition-colors hover:underline decoration-[#F84343] underline-offset-4" href="#">Contact</a>
</div>
<div class="text-zinc-400">
                © 2024 Gmax Digital. Architectural Advocacy for Small Businesses.
            </div>
</div>
</footer>
</body></html>

Contact page:

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Contact Gmax Digital | Strategic Digital Agency</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "on-surface": "#201a1c",
              "inverse-on-surface": "#faeef0",
              "inverse-primary": "#c0c1ff",
              "surface-tint": "#484dd1",
              "on-primary-fixed": "#04006d",
              "on-secondary-fixed-variant": "#930012",
              "error-container": "#ffdad6",
              "surface-container": "#f7ebed",
              "primary": "#3e42c7",
              "surface-container-lowest": "#ffffff",
              "secondary-fixed-dim": "#ffb3ad",
              "on-surface-variant": "#464554",
              "on-primary-fixed-variant": "#2e31b9",
              "background": "#fff8f8",
              "surface-container-high": "#f1e5e8",
              "surface-bright": "#fff8f8",
              "outline-variant": "#c6c5d6",
              "on-secondary-container": "#fffbff",
              "secondary-fixed": "#ffdad7",
              "surface-container-highest": "#ece0e2",
              "on-tertiary-fixed": "#201a1c",
              "tertiary-container": "#746b6d",
              "inverse-surface": "#352f31",
              "surface-variant": "#ece0e2",
              "primary-container": "#585de1",
              "outline": "#767686",
              "on-tertiary": "#ffffff",
              "on-secondary-fixed": "#410004",
              "tertiary-fixed": "#ece0e2",
              "on-primary-container": "#f1efff",
              "on-background": "#201a1c",
              "tertiary": "#5b5355",
              "on-secondary": "#ffffff",
              "secondary-container": "#dd2f33",
              "on-error-container": "#93000a",
              "tertiary-fixed-dim": "#cfc4c6",
              "surface-container-low": "#fdf1f3",
              "on-primary": "#ffffff",
              "on-tertiary-container": "#faedf0",
              "primary-fixed": "#e1e0ff",
              "primary-fixed-dim": "#c0c1ff",
              "on-error": "#ffffff",
              "error": "#ba1a1a",
              "secondary": "#b90d1d",
              "surface": "#fff8f8",
              "on-tertiary-fixed-variant": "#4c4547",
              "surface-dim": "#e3d7da"
            },
            fontFamily: {
              "headline": ["Inter"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .editorial-shadow {
            box-shadow: 0 8px 60px -12px rgba(32, 26, 28, 0.06);
        }
        .glass-nav {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary-container selection:text-white">
<!-- TopAppBar Navigation -->
<nav class="fixed top-0 w-full z-50 glass-nav shadow-sm dark:shadow-none">
<div class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
<div class="text-xl font-black tracking-tighter text-[#241E20] dark:text-white">
                Gmax Digital
            </div>
<div class="hidden md:flex items-center space-x-8 font-['Inter'] font-medium tracking-tight">
<a class="text-zinc-500 hover:text-[#585DE1] transition-colors" href="#">Solutions</a>
<a class="text-zinc-500 hover:text-[#585DE1] transition-colors" href="#">Case Studies</a>
<a class="text-zinc-500 hover:text-[#585DE1] transition-colors" href="#">Process</a>
<a class="text-zinc-500 hover:text-[#585DE1] transition-colors" href="#">About</a>
<a class="text-[#585DE1] border-b-2 border-[#585DE1] pb-1" href="#">Contact</a>
</div>
<button class="bg-primary-container text-white px-6 py-2.5 font-bold rounded hover:opacity-80 active:scale-95 transition-all duration-200">
                Get a Quote
            </button>
</div>
</nav>
<main class="pt-24">
<!-- Section 1: Hero Section -->
<section class="relative px-8 py-24 md:py-32 overflow-hidden bg-white">
<div class="max-w-7xl mx-auto relative z-10">
<div class="max-w-3xl">
<span class="inline-block px-3 py-1 mb-6 text-[10px] uppercase tracking-[0.2em] font-bold bg-surface-container text-primary border-l-2 border-primary">Strategic Advisory</span>
<h1 class="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-[1.05] mb-8">
                        Start the conversation that may clarify what your business needs next
                    </h1>
<p class="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl font-light">
                        Whether refining an idea, improving digital credibility, or strengthening market visibility, some decisions become easier with the right perspective.
                    </p>
<div class="flex flex-wrap gap-4">
<button class="bg-primary text-white px-8 py-4 font-bold rounded shadow-sm hover:bg-primary-container transition-all active:scale-95 flex items-center gap-2">
                            Book a Strategy Call
                            <span class="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
<!-- Decorative background element -->
<div class="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -skew-x-12 translate-x-1/2 opacity-50 hidden lg:block"></div>
</section>
<!-- Section 2: Contact Form & Section 3: Direct Contact (Solution Bridge Pattern) -->
<section class="bg-surface-container-low py-24 px-8">
<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
<!-- Left: Direct Contact & Info -->
<div class="lg:col-span-4 space-y-12">
<div>
<h2 class="text-3xl font-bold tracking-tight mb-6">Prefer direct contact?</h2>
<div class="space-y-6">
<a class="group flex items-start gap-4" href="mailto:hello@gmaxdigital.com">
<div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary editorial-shadow group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined" data-icon="mail">mail</span>
</div>
<div>
<p class="text-sm font-bold uppercase tracking-wider text-outline mb-1">Email</p>
<p class="text-lg font-medium">hello@gmaxdigital.com</p>
</div>
</a>
<div class="flex items-start gap-4">
<div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary editorial-shadow">
<span class="material-symbols-outlined" data-icon="public">public</span>
</div>
<div>
<p class="text-sm font-bold uppercase tracking-wider text-outline mb-1">Global Presence</p>
<p class="text-on-surface-variant leading-relaxed">Serving clients globally, with strategic focus on founders and growing businesses.</p>
</div>
</div>
</div>
</div>
<!-- Who This Is For Section -->
<div class="pt-8 border-t border-outline-variant/30">
<h3 class="text-xs font-black uppercase tracking-[0.2em] text-outline mb-8">We usually hear from</h3>
<div class="space-y-4">
<div class="p-6 bg-white rounded-lg border-l-4 border-primary editorial-shadow">
<h4 class="font-bold text-lg mb-1">Founders building software products</h4>
<p class="text-sm text-on-surface-variant">Translating vision into scalable technical architecture.</p>
</div>
<div class="p-6 bg-white rounded-lg border-l-4 border-secondary editorial-shadow">
<h4 class="font-bold text-lg mb-1">Startups refining market direction</h4>
<p class="text-sm text-on-surface-variant">Aligning digital presence with commercial strategy.</p>
</div>
<div class="p-6 bg-white rounded-lg border-l-4 border-on-surface editorial-shadow">
<h4 class="font-bold text-lg mb-1">Businesses improving visibility</h4>
<p class="text-sm text-on-surface-variant">Strengthening digital authority in competitive markets.</p>
</div>
</div>
</div>
</div>
<!-- Right: The "Solution Bridge" Form Card -->
<div class="lg:col-span-8 bg-white p-8 md:p-12 editorial-shadow rounded-xl">
<h2 class="text-3xl font-bold tracking-tight mb-4">Tell us what you are working on</h2>
<p class="text-on-surface-variant mb-10 font-light">Your message helps us understand where your business is and what may be worth discussing first.</p>
<form class="space-y-8">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="relative">
<label class="text-xs font-bold uppercase tracking-widest text-outline absolute -top-2.5 left-0 bg-white px-1">Full Name</label>
<input class="w-full bg-transparent border-b-2 border-surface-container py-4 focus:outline-none focus:border-primary transition-colors text-on-surface" placeholder="e.g. Julian Anderson" type="text"/>
</div>
<div class="relative">
<label class="text-xs font-bold uppercase tracking-widest text-outline absolute -top-2.5 left-0 bg-white px-1">Email Address</label>
<input class="w-full bg-transparent border-b-2 border-surface-container py-4 focus:outline-none focus:border-primary transition-colors text-on-surface" placeholder="e.g. julian@company.com" type="email"/>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="relative">
<label class="text-xs font-bold uppercase tracking-widest text-outline absolute -top-2.5 left-0 bg-white px-1">Company / Project Name</label>
<input class="w-full bg-transparent border-b-2 border-surface-container py-4 focus:outline-none focus:border-primary transition-colors text-on-surface" placeholder="e.g. Gmax Labs" type="text"/>
</div>
<div class="relative">
<label class="text-xs font-bold uppercase tracking-widest text-outline absolute -top-2.5 left-0 bg-white px-1">What do you need help with?</label>
<select class="w-full bg-transparent border-b-2 border-surface-container py-4 focus:outline-none focus:border-primary transition-colors text-on-surface appearance-none">
<option>Strategic Consultation</option>
<option>Product Development</option>
<option>Market Positioning</option>
<option>Scaling Infrastructure</option>
</select>
</div>
</div>
<div class="relative">
<label class="text-xs font-bold uppercase tracking-widest text-outline absolute -top-2.5 left-0 bg-white px-1">Message</label>
<textarea class="w-full bg-transparent border-b-2 border-surface-container py-4 focus:outline-none focus:border-primary transition-colors text-on-surface resize-none" placeholder="Tell us about your current challenges and goals..." rows="4"></textarea>
</div>
<div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
<p class="text-xs text-on-surface-variant italic max-w-xs">
                                All conversations are treated with professional discretion and strategic confidentiality.
                            </p>
<button class="bg-primary text-white px-12 py-4 font-bold rounded hover:bg-primary-container transition-all active:scale-95">
                                Send Message
                            </button>
</div>
</form>
</div>
</div>
</section>
<!-- Section 6: Response Expectation -->
<section class="py-24 px-8 bg-white">
<div class="max-w-7xl mx-auto">
<h2 class="text-3xl font-bold tracking-tight mb-16 text-center">What happens after you reach out</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/30 rounded-xl overflow-hidden">
<div class="p-12 bg-white flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-outline-variant/30">
<span class="text-6xl font-black text-surface-container mb-6">01</span>
<h4 class="text-xl font-bold mb-4">We review your message</h4>
<p class="text-on-surface-variant font-light">A strategist reviews your input to understand the context and urgency of your project.</p>
</div>
<div class="p-12 bg-surface-container-low flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-outline-variant/30">
<span class="text-6xl font-black text-surface-container-highest mb-6">02</span>
<h4 class="text-xl font-bold mb-4">We understand what you may need</h4>
<p class="text-on-surface-variant font-light">We identify potential blockers and opportunities before our first conversation.</p>
</div>
<div class="p-12 bg-white flex flex-col items-center text-center">
<span class="text-6xl font-black text-surface-container mb-6">03</span>
<h4 class="text-xl font-bold mb-4">We suggest the best next conversation</h4>
<p class="text-on-surface-variant font-light">We propose a focused call or a specific workshop to move your priorities forward.</p>
</div>
</div>
</div>
</section>
<!-- Section 7: Strategic Quote -->
<section class="bg-[#241E20] py-32 px-8 text-center">
<div class="max-w-4xl mx-auto">
<span class="material-symbols-outlined text-primary text-5xl mb-8" data-icon="format_quote">format_quote</span>
<blockquote class="text-3xl md:text-5xl font-extralight text-white leading-tight tracking-tight italic">
                    "Good decisions often begin when the right questions are asked early."
                </blockquote>
</div>
</section>
<!-- Section 4: Consultation Section (Call to Action) -->
<section class="py-24 px-8 bg-surface">
<div class="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-primary to-[#585DE1] p-1 md:p-1.5 shadow-2xl">
<div class="bg-white rounded-[1.4rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
<div class="flex-1">
<h2 class="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Book a focused strategy conversation</h2>
<p class="text-lg text-on-surface-variant mb-8 font-light">
                            A short conversation can help identify what matters most before deciding how to move. No pressure — just clarity around your current priorities.
                        </p>
<button class="bg-secondary text-white px-8 py-4 font-bold rounded shadow-lg hover:opacity-90 transition-all flex items-center gap-3">
<span class="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
                            Schedule a Call
                        </button>
</div>
<div class="hidden md:block w-72 h-72 bg-surface-container rounded-2xl overflow-hidden relative">
<img alt="Consultant in meeting" class="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply opacity-80" data-alt="Professional strategic consultant looking at data" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-31eM1tez-y8TDpKbBTe1puQOYeFmuFhR85x3MeEYzTLxLtIPvOcnj_XhaQjlThpFynGLTkyNdQhx4No0nThOQ8Wid0hs28hU240gv4afuLTaXOlDGagY7nPIdMAFLEDJmM6RN7jXWod3xpIL4Kf1EXwsdREFSd0Aqm6LKXWhNSrK7xjbFW63i0FosUalFgojEJoiy6HiQif8npZRbLEHyEJb2L0VYeSgfuT6lWtoX3SguGAjAtXNpWqvUv7u_0u_3-jRGXv506E"/>
<div class="absolute inset-0 bg-primary/10"></div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-[#241E20] text-white">
<div class="max-w-7xl mx-auto px-8 py-20">
<div class="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<h2 class="text-2xl font-black tracking-tighter mb-4">Gmax Digital</h2>
<p class="text-zinc-400 max-w-xs font-light">Small Businesses. Big Solutions. Strategic consulting for the modern era.</p>
</div>
<div class="grid grid-cols-2 gap-12">
<div>
<h4 class="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-zinc-500">Navigation</h4>
<ul class="space-y-4 text-sm">
<li><a class="text-zinc-400 hover:text-white transition-colors" href="#">Solutions</a></li>
<li><a class="text-zinc-400 hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a class="text-zinc-400 hover:text-white transition-colors" href="#">Process</a></li>
<li><a class="text-white font-bold" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 class="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-zinc-500">Connect</h4>
<ul class="space-y-4 text-sm">
<li><a class="text-zinc-400 hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a class="text-zinc-400 hover:text-white transition-colors" href="#">Twitter</a></li>
<li><a class="text-zinc-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a class="text-zinc-400 hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
</div>
<div class="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-xs font-['Inter'] tracking-wide uppercase">
<p>© 2024 Gmax Digital. Small Businesses. Big Solutions.</p>
<div class="flex gap-6">
<a class="hover:text-[#F84343] transition-all" href="#">Privacy Policy</a>
<a class="hover:text-[#F84343] transition-all" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</body></html>

<!-- Case studies -->

<!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Case Studies | Gmax Digital</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "tertiary-container": "#746b6d",
              "tertiary-fixed": "#ece0e2",
              "primary-fixed-dim": "#c0c1ff",
              "primary": "#3e42c7",
              "on-primary-fixed": "#04006d",
              "secondary-container": "#dd2f33",
              "on-tertiary-container": "#faedf0",
              "on-error": "#ffffff",
              "on-secondary-container": "#fffbff",
              "on-primary-fixed-variant": "#2e31b9",
              "inverse-surface": "#352f31",
              "surface-bright": "#fff8f8",
              "secondary": "#b90d1d",
              "background": "#fff8f8",
              "surface-container-high": "#f1e5e8",
              "on-secondary-fixed-variant": "#930012",
              "outline": "#767686",
              "on-primary": "#ffffff",
              "on-surface-variant": "#464554",
              "surface-container-highest": "#ece0e2",
              "surface-container": "#f7ebed",
              "surface": "#fff8f8",
              "outline-variant": "#c6c5d6",
              "inverse-on-surface": "#faeef0",
              "on-tertiary": "#ffffff",
              "inverse-primary": "#c0c1ff",
              "tertiary": "#5b5355",
              "tertiary-fixed-dim": "#cfc4c6",
              "on-tertiary-fixed": "#201a1c",
              "surface-variant": "#ece0e2",
              "surface-tint": "#484dd1",
              "primary-container": "#585de1",
              "on-background": "#201a1c",
              "secondary-fixed-dim": "#ffb3ad",
              "on-primary-container": "#f1efff",
              "secondary-fixed": "#ffdad7",
              "on-surface": "#201a1c",
              "on-secondary-fixed": "#410004",
              "primary-fixed": "#e1e0ff",
              "on-error-container": "#93000a",
              "surface-container-lowest": "#ffffff",
              "surface-dim": "#e3d7da",
              "on-secondary": "#ffffff",
              "error-container": "#ffdad6",
              "error": "#ba1a1a",
              "surface-container-low": "#fdf1f3",
              "on-tertiary-fixed-variant": "#4c4547"
            },
            fontFamily: {
              "headline": ["Inter"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .editorial-mask {
            mask-image: linear-gradient(to bottom, black 0%, black 80%, transparent 100%);
        }
    </style>
</head>
<body class="bg-surface font-body text-on-surface antialiased">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-white/70 dark:bg-[#241E20]/70 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(32,26,28,0.06)]">
<div class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
<div class="text-xl font-bold tracking-tighter text-[#241E20] dark:text-white uppercase">
                Gmax Digital
            </div>
<div class="hidden md:flex items-center space-x-10 font-['Inter'] font-medium tracking-tight">
<a class="text-[#241E20] dark:text-gray-300 hover:text-[#585DE1] transition-colors" href="#">Solutions</a>
<a class="text-[#585DE1] border-b-2 border-[#585DE1] pb-1" href="#">Case Studies</a>
<a class="text-[#241E20] dark:text-gray-300 hover:text-[#585DE1] transition-colors" href="#">Process</a>
<a class="text-[#241E20] dark:text-gray-300 hover:text-[#585DE1] transition-colors" href="#">Insights</a>
</div>
<button class="bg-[#585DE1] text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-80 transition-all duration-300 scale-95 active:scale-90">
                Get a Quote
            </button>
</div>
</nav>
<!-- Hero Section -->
<section class="relative pt-40 pb-24 overflow-hidden">
<div class="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div class="lg:col-span-7 space-y-8">
<span class="inline-block text-xs uppercase tracking-[0.2em] font-bold text-primary-container px-4 py-1.5 bg-surface-container-low rounded-full">Strategic Analysis</span>
<h1 class="text-5xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight text-on-background">
                    How strategic <span class="text-primary-container">clarity</span> can change business outcomes
                </h1>
<p class="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                    Selected examples showing how positioning, trust, and digital structure influence business growth decisions.
                </p>
<div class="pt-4">
<button class="bg-primary-container text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center group transition-transform active:scale-95">
                        Discuss Your Project
                        <span class="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
<div class="lg:col-span-5 relative">
<div class="aspect-square bg-surface-container-low rounded-full absolute -top-12 -right-12 w-64 h-64 -z-10 blur-3xl opacity-50"></div>
<div class="relative bg-surface-container border border-outline-variant/10 rounded-xl overflow-hidden shadow-2xl">
<img class="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" data-alt="Modern minimalist office interior with clean lines, architectural lighting, and a focused professional atmosphere for a consultancy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9DTt4DoviZbB5vKDSgltDzBuJ7DaywMQGUW2FTHCXaHiea1zz2SUomgpwHJ9RaVyp4Ed_i2tkTa31fUsAQGe5vfMQJzskyzOdco04LPx370S7QormweHYO3CcM2NU4KyLWo5ABIa6CUkqMuldCsNCSvjAz6qeGQ-ZcV_00nOlVGytZdyYDyahiGMIrwwN6cwErUAkFHp8HcFuYBJj6I4xy9clbSsSuKgsPmnL9wi_ZPU4TrazlNG4qJvD8ds07Rk6qzIHe9du49Q"/>
</div>
</div>
</div>
</section>
<!-- Featured Case Study Section -->
<section class="py-24 bg-on-background text-white overflow-hidden">
<div class="max-w-7xl mx-auto px-8">
<div class="flex items-center space-x-4 mb-16">
<div class="h-px w-12 bg-secondary-container"></div>
<h2 class="text-sm uppercase tracking-widest font-bold text-secondary-container">Featured Case</h2>
</div>
<div class="relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/5">
<div class="bg-zinc-900 p-12 lg:p-20 flex flex-col justify-center space-y-8">
<h3 class="text-3xl lg:text-4xl font-bold leading-tight">
                        Helping a software business strengthen trust before scaling visibility.
                    </h3>
<p class="text-lg text-gray-400 leading-relaxed">
                        A strategic review of how digital clarity, messaging, and credibility can improve early market response.
                    </p>
<div class="pt-4">
<a class="inline-flex items-center text-secondary-container font-bold group" href="#">
                            View Case Study
                            <span class="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">north_east</span>
</a>
</div>
</div>
<div class="relative min-h-[400px]">
<img class="absolute inset-0 w-full h-full object-cover opacity-80" data-alt="Abstract visualization of data and architecture with deep blue and charcoal tones, reflecting technical precision and growth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx7swuKT_pVoMqWk2cudyevaIqgw84zzkdyngWi2PLjhoyqofpRV6BN5s6AflYPdLDVjs_GwA8J1nS6sHD9FI13k5HfDHbggDz0cq_cEdJMqMwnoVBLfgN6VywZL82rTB7qQ2iwZXi_m1Tb0KGsFdzTl0c7GWvpfBzyQEijtrcmqWfXtSNrp9eGaZOQZPgomHMJPeXPcqPg8nRJsdM9F-j9vxpq5FNFfTXFR7GcfyEg7jQ8NiED8oTZCYR1-HdQxH0qBodV5iA0WQ"/>
<div class="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent"></div>
</div>
</div>
</div>
</section>
<!-- Case Study Grid Section -->
<section class="py-24 bg-surface">
<div class="max-w-7xl mx-auto px-8">
<div class="mb-16">
<h2 class="text-3xl font-bold tracking-tight text-on-background">Selected Strategic Work</h2>
<div class="h-1 w-20 bg-primary-container mt-4"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Card 1 -->
<div class="group bg-surface-container-low rounded-xl p-8 hover:bg-white transition-all duration-500 hover:shadow-xl border border-transparent hover:border-outline-variant/20">
<div class="mb-6 overflow-hidden rounded-lg aspect-video">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" data-alt="A clean professional desk setup with high-end stationery and a focus on clarity and organization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk57sNxxrvWJtYjagiXxj3AhJk2WKV8EfrrjVubzlCGwunZCY0Sluat0x4Al1_E5P78Ua7M6Lqw4Jh5M81fexZX4emY2u1mtaXh4iSJ_yQal2JTj5inEhujYzePN1LQDu0mFaZjIubGQRb0FtblffILtFhZbo8GcXjZ4v2hnGoQRCbFdUhzX8GVh4oEzhA9SPfuBHvChpkmYsrVNsn43j9KqE-4e1m2q_9CxFAONJVrwQsoz0bHfKy9SDk2tvvuvunvEdfxe9y36E"/>
</div>
<h3 class="text-xl font-bold mb-3 group-hover:text-primary-container transition-colors">Positioning a product for stronger first-market perception</h3>
<p class="text-on-surface-variant mb-6 leading-relaxed">Focusing on product clarity, refined communication strategies, and ensuring direct market relevance for early traction.</p>
<a class="text-sm font-bold uppercase tracking-wider text-primary-container inline-flex items-center group/link" href="#">
                        Read Case Study
                        <span class="material-symbols-outlined ml-1 text-[18px] group-hover/link:translate-x-1 transition-transform">chevron_right</span>
</a>
</div>
<!-- Card 2 -->
<div class="group bg-surface-container-low rounded-xl p-8 hover:bg-white transition-all duration-500 hover:shadow-xl border border-transparent hover:border-outline-variant/20">
<div class="mb-6 overflow-hidden rounded-lg aspect-video">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" data-alt="Close up of architectural details reflecting structure and stability in professional business environments" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0SafVpCippFvDvVIiifRBcZk_68vOt0TRnF87VMH9lnYNpXGVuSlnXpks0y_nB-IdhF6N3LEQgHG-PlzFYv25yDHZM202iIKEujrb32IkV453_7GZRq8arjbTu2bervtIEEkmSRiouucYt9eDeDYEWQhH6sP0-rDZUdVMBoRoZY1UONfSvQ5Y458-r3dNc3_XjyLKBmvpr4OLIkKXkCeJFD5i6E_saKOPDRBd-MAqLYR-tMAnrmSiUy2MS7pyG90aQlWNscKWeQA"/>
</div>
<h3 class="text-xl font-bold mb-3 group-hover:text-primary-container transition-colors">Improving digital credibility before growth campaigns</h3>
<p class="text-on-surface-variant mb-6 leading-relaxed">Enhancing website trust through perception-driven design and building decision confidence for prospective clients.</p>
<a class="text-sm font-bold uppercase tracking-wider text-primary-container inline-flex items-center group/link" href="#">
                        Read Case Study
                        <span class="material-symbols-outlined ml-1 text-[18px] group-hover/link:translate-x-1 transition-transform">chevron_right</span>
</a>
</div>
<!-- Card 3 -->
<div class="group bg-surface-container-low rounded-xl p-8 hover:bg-white transition-all duration-500 hover:shadow-xl border border-transparent hover:border-outline-variant/20">
<div class="mb-6 overflow-hidden rounded-lg aspect-video">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" data-alt="Collaborative work environment with natural lighting, symbolizing strategic communication and clarity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEgwYUeArhbvA7ocARDp8sRbAx_j-81Nxt_O0o9SZyTetm0AbNhyv3gNQSwVnQCA49yt10MF89fP2bolEXv0v--xUQJt9nrGfeFD9OYDEwvLhfuKtHJXwvl8cV251hh7kUVnhYVsJsaXNlrMHC6MjO2d1IayDLAhT4wMIkrfMZ92G8y-RYWw5J2UOOuWzo9548xXE6kGNoQwmfuVeBQQROViFIZ1mZ0tzLgsOAodhOlJ5yetRHQOhKZFcSsfnD1Q8h_H0MS0omoW4"/>
</div>
<h3 class="text-xl font-bold mb-3 group-hover:text-primary-container transition-colors">Clarifying service value for early-stage growth</h3>
<p class="text-on-surface-variant mb-6 leading-relaxed">Defining offer clarity and strategic messaging to ensure conversion readiness before significant investment.</p>
<a class="text-sm font-bold uppercase tracking-wider text-primary-container inline-flex items-center group/link" href="#">
                        Read Case Study
                        <span class="material-symbols-outlined ml-1 text-[18px] group-hover/link:translate-x-1 transition-transform">chevron_right</span>
</a>
</div>
<!-- Card 4 -->
<div class="group bg-surface-container-low rounded-xl p-8 hover:bg-white transition-all duration-500 hover:shadow-xl border border-transparent hover:border-outline-variant/20">
<div class="mb-6 overflow-hidden rounded-lg aspect-video">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" data-alt="A modern corporate lobby showing structural transparency and professional excellence" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYbPAKrPl4DCZbKrW3vdXMuW9lax6_4W3imqL6m9tseyHQOMCPlXr7lN5TiMiBdywB-waMHSNUYADjUOqHS0_oIxAnFy3lA40wvNNqpZuk0WGqjfij_9uVGaz_mtV9SbpVcWquN2RsSxf50NoXZgrO86n81x-zBAYziS_KENSmBQimoShb3JoZs3NhhsEvTb2LzU41drolUDHRTxQkiE4kk3Ci27Okpr4wjjf-XMvZbzvpELUzrc6n3VxEs16_GzuuOLFtEwXEbfw"/>
</div>
<h3 class="text-xl font-bold mb-3 group-hover:text-primary-container transition-colors">Strengthening how businesses present value online</h3>
<p class="text-on-surface-variant mb-6 leading-relaxed">Building trust architecture and solid digital structure to professionalize a brand's online presence.</p>
<a class="text-sm font-bold uppercase tracking-wider text-primary-container inline-flex items-center group/link" href="#">
                        Read Case Study
                        <span class="material-symbols-outlined ml-1 text-[18px] group-hover/link:translate-x-1 transition-transform">chevron_right</span>
</a>
</div>
</div>
</div>
</section>
<!-- Inside the Process Section (The Solution Bridge) -->
<section class="py-24 relative overflow-hidden">
<div class="absolute inset-0 bg-on-background h-1/2"></div>
<div class="absolute inset-0 bg-white translate-y-1/2"></div>
<div class="relative max-w-7xl mx-auto px-8">
<div class="mb-12">
<h2 class="text-3xl font-bold text-white">What each engagement usually examines</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- Step 01 -->
<div class="bg-surface-container-highest p-10 rounded-xl shadow-lg transform translate-y-4 hover:-translate-y-0 transition-transform duration-500">
<div class="text-primary-container font-black text-4xl mb-6 opacity-40">01</div>
<h4 class="text-lg font-bold mb-4 text-on-surface leading-tight">Understanding where trust breaks</h4>
<p class="text-on-surface-variant text-sm leading-relaxed">Identifying the specific moments in the user journey where credibility is lost or questioned.</p>
</div>
<!-- Step 02 -->
<div class="bg-surface-container-highest p-10 rounded-xl shadow-lg transform -translate-y-4 hover:translate-y-0 transition-transform duration-500">
<div class="text-primary-container font-black text-4xl mb-6 opacity-40">02</div>
<h4 class="text-lg font-bold mb-4 text-on-surface leading-tight">Identifying positioning gaps</h4>
<p class="text-on-surface-variant text-sm leading-relaxed">Analyzing how the business compares to market expectations and where the messaging falls short.</p>
</div>
<!-- Step 03 -->
<div class="bg-surface-container-highest p-10 rounded-xl shadow-lg transform translate-y-4 hover:-translate-y-0 transition-transform duration-500">
<div class="text-primary-container font-black text-4xl mb-6 opacity-40">03</div>
<h4 class="text-lg font-bold mb-4 text-on-surface leading-tight">Structuring stronger digital clarity</h4>
<p class="text-on-surface-variant text-sm leading-relaxed">Reorganizing the digital architecture to ensure the core value proposition is impossible to miss.</p>
</div>
<!-- Step 04 -->
<div class="bg-surface-container-highest p-10 rounded-xl shadow-lg transform -translate-y-4 hover:translate-y-0 transition-transform duration-500">
<div class="text-primary-container font-black text-4xl mb-6 opacity-40">04</div>
<h4 class="text-lg font-bold mb-4 text-on-surface leading-tight">Defining practical next moves</h4>
<p class="text-on-surface-variant text-sm leading-relaxed">Creating an actionable roadmap for growth that prioritizes high-impact strategic adjustments.</p>
</div>
</div>
</div>
</section>
<!-- Outcomes Section -->
<section class="py-24 bg-surface-container-low">
<div class="max-w-7xl mx-auto px-8">
<div class="text-center max-w-3xl mx-auto mb-16">
<h2 class="text-3xl font-bold text-on-background">What strong strategic work often improves</h2>
<div class="h-1 w-20 bg-secondary-container mx-auto mt-4"></div>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div class="bg-white p-8 rounded-xl border-b-4 border-primary-container">
<div class="mb-6 flex justify-center">
<span class="material-symbols-outlined text-primary-container text-4xl">communication</span>
</div>
<p class="text-center font-bold text-on-surface">Clearer market communication</p>
</div>
<div class="bg-white p-8 rounded-xl border-b-4 border-primary-container">
<div class="mb-6 flex justify-center">
<span class="material-symbols-outlined text-primary-container text-4xl">verified_user</span>
</div>
<p class="text-center font-bold text-on-surface">Stronger digital credibility</p>
</div>
<div class="bg-white p-8 rounded-xl border-b-4 border-primary-container">
<div class="mb-6 flex justify-center">
<span class="material-symbols-outlined text-primary-container text-4xl">psychology</span>
</div>
<p class="text-center font-bold text-on-surface">Better decision confidence</p>
</div>
<div class="bg-white p-8 rounded-xl border-b-4 border-primary-container">
<div class="mb-6 flex justify-center">
<span class="material-symbols-outlined text-primary-container text-4xl">trending_up</span>
</div>
<p class="text-center font-bold text-on-surface">Improved readiness for growth</p>
</div>
</div>
</div>
</section>
<!-- Strategic Note Section -->
<section class="py-32 bg-on-background relative overflow-hidden">
<div class="absolute inset-0 opacity-10">
<img class="w-full h-full object-cover" data-alt="Minimalist architectural shapes in low light, representing the foundational structure of a business" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0I31HqjepypZoiOXQWUNH7-9ZgbgRBjGV8HGQwbF96IHuvXFc4Vm8pSsrDlMARy-XoPJDqnJTxBf5_q926qxInb3C1-W2gMUTRCbT8oRajJwSaAAIRskKP2NqBG1zmpIlu9b7-SM2y0QEKGI5tAsIxlMl_Hjl1A_qD1ayyD3MUzdLQuiLUcVpdVgTwxXoBFAYK1r4OJG8tVUxUL1PL0bf_wk6zbdhEL_Sl416mBhBoXXRIZV2_0FXEH9GaGT2TRAytsuXJooiUwI"/>
</div>
<div class="max-w-5xl mx-auto px-8 relative z-10 text-center">
<span class="material-symbols-outlined text-6xl text-secondary-container mb-8">format_quote</span>
<blockquote class="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight italic">
                "Sometimes growth improves when businesses become easier to <span class="text-secondary-container font-semibold">understand</span>, <span class="text-secondary-container font-semibold">trust</span>, and <span class="text-secondary-container font-semibold">remember</span>."
            </blockquote>
</div>
</section>
<!-- Footer -->
<footer class="bg-[#241E20] dark:bg-[#1a1617] w-full py-12 px-8">
<div class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-6 md:space-y-0">
<div class="text-lg font-black text-white uppercase">Gmax Digital</div>
<div class="flex space-x-8 font-['Inter'] text-sm tracking-wide uppercase font-semibold">
<a class="text-gray-400 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a class="text-gray-400 hover:text-white transition-colors" href="#">Terms of Service</a>
<a class="text-gray-400 hover:text-white transition-colors" href="#">LinkedIn</a>
<a class="text-gray-400 hover:text-white transition-colors" href="#">Contact</a>
</div>
<div class="text-[#F84343] font-['Inter'] text-sm tracking-wide uppercase font-semibold">
                © 2024 Gmax Digital. Architecture for Growth.
            </div>
</div>
</footer>
</body></html>

<!-- faq page -->

<!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>FAQ | Gmax Digital - Strategic Growth Agency</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "secondary-fixed-dim": "#ffb3ad",
              "on-tertiary-fixed-variant": "#4c4547",
              "on-surface": "#201a1c",
              "tertiary-fixed-dim": "#cfc4c6",
              "surface-container-high": "#f1e5e8",
              "on-tertiary": "#ffffff",
              "secondary-container": "#dd2f33",
              "on-secondary-fixed-variant": "#930012",
              "primary-fixed": "#e1e0ff",
              "on-secondary-container": "#fffbff",
              "on-primary-fixed-variant": "#2e31b9",
              "primary-container": "#585de1",
              "on-primary": "#ffffff",
              "error-container": "#ffdad6",
              "on-error": "#ffffff",
              "outline-variant": "#c6c5d6",
              "on-tertiary-fixed": "#201a1c",
              "tertiary": "#5b5355",
              "surface-tint": "#484dd1",
              "tertiary-fixed": "#ece0e2",
              "surface-container-highest": "#ece0e2",
              "on-primary-container": "#f1efff",
              "error": "#ba1a1a",
              "primary-fixed-dim": "#c0c1ff",
              "inverse-on-surface": "#faeef0",
              "inverse-primary": "#c0c1ff",
              "surface-dim": "#e3d7da",
              "surface-container": "#f7ebed",
              "on-error-container": "#93000a",
              "surface-variant": "#ece0e2",
              "surface": "#fff8f8",
              "secondary": "#b90d1d",
              "on-background": "#201a1c",
              "surface-container-low": "#fdf1f3",
              "background": "#fff8f8",
              "tertiary-container": "#746b6d",
              "on-secondary-fixed": "#410004",
              "surface-container-lowest": "#ffffff",
              "primary": "#3e42c7",
              "outline": "#767686",
              "on-secondary": "#ffffff",
              "on-surface-variant": "#464554",
              "on-primary-fixed": "#04006d",
              "secondary-fixed": "#ffdad7",
              "on-tertiary-container": "#faedf0",
              "inverse-surface": "#352f31",
              "surface-bright": "#fff8f8"
            },
            fontFamily: {
              "headline": ["Inter"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .editorial-shadow {
            box-shadow: 0 8px 40px -12px rgba(32, 26, 28, 0.06);
        }
    </style>
</head>
<body class="bg-surface font-body text-on-surface">
<!-- Top Navigation Bar -->
<header class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl transition-all duration-300 ease-in-out shadow-[0_8px_40px_-12px_rgba(32,26,28,0.06)]">
<nav class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
<div class="text-xl font-black tracking-tighter text-zinc-900">Gmax Digital</div>
<div class="hidden md:flex gap-8 items-center">
<a class="font-['Inter'] tracking-tight font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Solutions</a>
<a class="font-['Inter'] tracking-tight font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Case Studies</a>
<a class="font-['Inter'] tracking-tight font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Process</a>
<a class="font-['Inter'] tracking-tight font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Insights</a>
</div>
<button class="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-md font-medium hover:brightness-110 transition-all">Get a Quote</button>
</nav>
</header>
<main class="pt-20">
<!-- Hero Section -->
<section class="relative overflow-hidden pt-24 pb-16 px-8 max-w-7xl mx-auto">
<div class="relative z-10 flex flex-col items-start gap-6 max-w-4xl">
<span class="inline-block text-secondary font-bold tracking-[0.05em] uppercase text-[0.75rem]">FAQ</span>
<h1 class="text-[3.5rem] leading-[1.1] font-extrabold tracking-[-0.02em] text-on-background">
                    Questions businesses often ask before moving forward
                </h1>
<p class="text-[1.25rem] leading-relaxed text-on-surface-variant max-w-2xl">
                    Strategic work usually begins with clarity, and these answers help explain how engagements are approached.
                </p>
</div>
<div class="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container to-transparent blur-3xl"></div>
</section>
<!-- FAQ Accordion Section -->
<section class="bg-surface-container-low py-24">
<div class="max-w-4xl mx-auto px-8">
<div class="space-y-4">
<!-- FAQ Item 1 -->
<div class="group bg-surface-container-lowest p-8 rounded-lg editorial-shadow transition-all hover:bg-white">
<div class="flex justify-between items-center cursor-pointer">
<h3 class="text-xl font-bold tracking-tight">When is the right time to seek strategic digital guidance?</h3>
<span class="material-symbols-outlined text-primary-container transition-transform group-hover:rotate-180">expand_more</span>
</div>
<div class="mt-4 text-on-surface-variant leading-relaxed">
                            Typically, businesses seek our guidance when internal growth plateaus or when entering a new market phase. If your digital efforts feel fragmented or if you're making decisions based on guesswork rather than architecture, it's time for a strategic reset.
                        </div>
</div>
<!-- FAQ Item 2 -->
<div class="group bg-surface-container-lowest p-8 rounded-lg editorial-shadow transition-all hover:bg-white">
<div class="flex justify-between items-center cursor-pointer">
<h3 class="text-xl font-bold tracking-tight">Do you work with early-stage businesses?</h3>
<span class="material-symbols-outlined text-primary-container">expand_more</span>
</div>
<div class="mt-4 text-on-surface-variant leading-relaxed">
                            Yes, provided there is a clear product-market fit or a foundational business model. We specialize in building the "Growth Infrastructure" for companies that are ready to scale professionally rather than just experiment.
                        </div>
</div>
<!-- FAQ Item 3 -->
<div class="group bg-surface-container-lowest p-8 rounded-lg editorial-shadow transition-all hover:bg-white">
<div class="flex justify-between items-center cursor-pointer">
<h3 class="text-xl font-bold tracking-tight">Is every engagement execution-heavy?</h3>
<span class="material-symbols-outlined text-primary-container">expand_more</span>
</div>
<div class="mt-4 text-on-surface-variant leading-relaxed">
                            No. Some clients engage us purely for high-level advisory and roadmap architecture, while others require full-funnel execution. We tailor the intensity of implementation to your internal team's capabilities.
                        </div>
</div>
<!-- FAQ Item 4 -->
<div class="group bg-surface-container-lowest p-8 rounded-lg editorial-shadow transition-all hover:bg-white">
<div class="flex justify-between items-center cursor-pointer">
<h3 class="text-xl font-bold tracking-tight">What usually changes first in a strategic review?</h3>
<span class="material-symbols-outlined text-primary-container">expand_more</span>
</div>
<div class="mt-4 text-on-surface-variant leading-relaxed">
                            The first shift is often narrative and measurement. We usually find that businesses are either telling the wrong story to the right audience or tracking metrics that don't actually correlate to profit. We tighten the positioning first.
                        </div>
</div>
<!-- FAQ Item 5 -->
<div class="group bg-surface-container-lowest p-8 rounded-lg editorial-shadow transition-all hover:bg-white">
<div class="flex justify-between items-center cursor-pointer">
<h3 class="text-xl font-bold tracking-tight">How do projects typically begin?</h3>
<span class="material-symbols-outlined text-primary-container">expand_more</span>
</div>
<div class="mt-4 text-on-surface-variant leading-relaxed">
                            Every engagement starts with a "Deep Audit" phase—a 2-week period where we dissect your existing data, competitor landscape, and internal bottlenecks before proposing a single line of code or creative.
                        </div>
</div>
<!-- FAQ Item 6 -->
<div class="group bg-surface-container-lowest p-8 rounded-lg editorial-shadow transition-all hover:bg-white">
<div class="flex justify-between items-center cursor-pointer">
<h3 class="text-xl font-bold tracking-tight">Do you focus only on websites?</h3>
<span class="material-symbols-outlined text-primary-container">expand_more</span>
</div>
<div class="mt-4 text-on-surface-variant leading-relaxed">
                            Websites are just the storefront. We design the entire ecosystem: customer acquisition loops, retention automation, CRM integration, and performance marketing strategies that feed into the site.
                        </div>
</div>
<!-- FAQ Item 7 -->
<div class="group bg-surface-container-lowest p-8 rounded-lg editorial-shadow transition-all hover:bg-white">
<div class="flex justify-between items-center cursor-pointer">
<h3 class="text-xl font-bold tracking-tight">Can a business engage before launch?</h3>
<span class="material-symbols-outlined text-primary-container">expand_more</span>
</div>
<div class="mt-4 text-on-surface-variant leading-relaxed">
                            Absolutely. Engaging before launch is often the most cost-effective path, as it prevents "technical debt" and branding misalignments that are expensive to fix later. We help build the launchpad.
                        </div>
</div>
<!-- FAQ Item 8 -->
<div class="group bg-surface-container-lowest p-8 rounded-lg editorial-shadow transition-all hover:bg-white">
<div class="flex justify-between items-center cursor-pointer">
<h3 class="text-xl font-bold tracking-tight">What if growth has already started but results feel weak?</h3>
<span class="material-symbols-outlined text-primary-container">expand_more</span>
</div>
<div class="mt-4 text-on-surface-variant leading-relaxed">
                            This is the "Scaling Plateau." It usually indicates that the initial tactics that got you to $1M won't get you to $10M. We audit the friction points and optimize the conversion flow to restore efficiency.
                        </div>
</div>
</div>
</div>
</section>
<!-- Strategic Note Section -->
<section class="py-32 bg-on-background relative overflow-hidden">
<div class="max-w-7xl mx-auto px-8 relative z-10">
<div class="flex flex-col items-center text-center max-w-3xl mx-auto">
<span class="material-symbols-outlined text-secondary text-5xl mb-8" data-weight="fill">format_quote</span>
<blockquote class="text-[2.5rem] leading-[1.2] font-extrabold tracking-tight text-white mb-8">
                        “Most growth problems become clearer when the right questions are asked early.”
                    </blockquote>
<div class="w-16 h-1 bg-secondary rounded-full"></div>
</div>
</div>
<div class="absolute inset-0 -z-0">
<div class="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_20%_30%,_#585DE1_0%,_transparent_50%)]"></div>
</div>
</section>
<!-- Signature Component: Solution Bridge / CTA -->
<section class="relative bg-surface py-24 px-8 overflow-visible">
<div class="max-w-7xl mx-auto">
<div class="relative flex flex-col md:flex-row items-center justify-between p-12 bg-surface-container-highest rounded-xl editorial-shadow -mt-40 z-20">
<div class="md:w-2/3 mb-8 md:mb-0">
<h2 class="text-3xl font-black text-on-background mb-4">Ready for a Strategic Conversation?</h2>
<p class="text-lg text-on-surface-variant">Skip the uncertainty. Let's look at your current architecture and define the path to your next milestone.</p>
</div>
<div class="md:w-1/3 flex justify-end">
<button class="bg-primary-container text-white px-10 py-5 rounded-md text-lg font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary-container/20">
                            Contact Gmax Digital
                        </button>
</div>
</div>
</div>
</section>
<!-- Secondary Image/Visual Section (Asymmetric Bento) -->
<section class="max-w-7xl mx-auto px-8 pb-24">
<div class="grid grid-cols-1 md:grid-cols-12 gap-8">
<div class="md:col-span-7 h-[400px] relative rounded-xl overflow-hidden group">
<img alt="modern minimalist office with large windows" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="modern minimalist glass office interior with high-end furniture, soft morning natural light, professional consulting atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpg_0Tb0hdYPwaX7VFNAFFOeQEsGTxuosrtw4qha7C5ZM8YLDEnh0GYNKnp2CITXTGchVGsrLP3AHrv_2bUeVIvZJAslV74kjPoYj0TCNplzL014qqodApAIa9zgRwhsWASw-Dl-Cp9BJyK7XLAycLVJdcTQpCzG2b7bOHzipiTn_URHvRM_ezGdUuVJlffPM9TvZrHGActp54yL4ZcymaXQQLB7u9MFdTJ-0Hz4nGmHm7Cl4HY9CQHRakJg54oh2oxs9CNVvGXUQ"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
<p class="text-white text-xl font-bold">Refined Environments. Defined Results.</p>
</div>
</div>
<div class="md:col-span-5 flex flex-col gap-8">
<div class="flex-1 bg-surface-container p-10 rounded-xl">
<h4 class="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Direct Impact</h4>
<p class="text-2xl font-bold leading-tight">Average 40% efficiency gain in first 90 days.</p>
</div>
<div class="flex-1 bg-on-background p-10 rounded-xl text-white">
<h4 class="text-primary-container font-bold text-sm uppercase tracking-widest mb-4">Availability</h4>
<p class="text-2xl font-bold leading-tight">Currently accepting 2 strategic partners for Q4.</p>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-zinc-900 dark:bg-zinc-950 w-full py-16">
<div class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-8">
<div class="text-lg font-bold text-white">Gmax Digital</div>
<div class="flex flex-wrap justify-center gap-8">
<a class="font-['Inter'] text-sm tracking-wide text-zinc-400 hover:text-[#585DE1] transition-colors hover:underline decoration-[#585DE1] underline-offset-4" href="#">Privacy Policy</a>
<a class="font-['Inter'] text-sm tracking-wide text-zinc-400 hover:text-[#585DE1] transition-colors hover:underline decoration-[#585DE1] underline-offset-4" href="#">Terms of Service</a>
<a class="font-['Inter'] text-sm tracking-wide text-zinc-400 hover:text-[#585DE1] transition-colors hover:underline decoration-[#585DE1] underline-offset-4" href="#">Cookie Policy</a>
<a class="font-['Inter'] text-sm tracking-wide text-zinc-400 hover:text-[#585DE1] transition-colors hover:underline decoration-[#585DE1] underline-offset-4" href="#">Contact Support</a>
</div>
<div class="font-['Inter'] text-sm tracking-wide text-zinc-400">
                © 2024 Gmax Digital. Architecting Growth for Small Business.
            </div>
</div>
</footer>
</body></html>

<!-- subscribe to newsletter section -->
<!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Gmax Digital | Strategic Insights</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "on-surface": "#201a1c",
              "surface-container": "#f7ebed",
              "error": "#ba1a1a",
              "surface-bright": "#fff8f8",
              "secondary-fixed-dim": "#ffb3ad",
              "primary-container": "#585de1",
              "on-surface-variant": "#464554",
              "tertiary-fixed-dim": "#cfc4c6",
              "on-primary-fixed": "#04006d",
              "inverse-on-surface": "#faeef0",
              "surface-variant": "#ece0e2",
              "on-primary": "#ffffff",
              "background": "#fff8f8",
              "secondary": "#b90d1d",
              "on-secondary-container": "#fffbff",
              "on-primary-container": "#f1efff",
              "on-error-container": "#93000a",
              "primary-fixed-dim": "#c0c1ff",
              "primary-fixed": "#e1e0ff",
              "surface": "#fff8f8",
              "inverse-surface": "#352f31",
              "secondary-fixed": "#ffdad7",
              "outline-variant": "#c6c5d6",
              "secondary-container": "#dd2f33",
              "inverse-primary": "#c0c1ff",
              "on-tertiary-fixed-variant": "#4c4547",
              "surface-container-low": "#fdf1f3",
              "error-container": "#ffdad6",
              "on-background": "#201a1c",
              "on-tertiary": "#ffffff",
              "tertiary": "#5b5355",
              "surface-container-highest": "#ece0e2",
              "on-tertiary-fixed": "#201a1c",
              "tertiary-container": "#746b6d",
              "tertiary-fixed": "#ece0e2",
              "outline": "#767686",
              "surface-tint": "#484dd1",
              "surface-container-high": "#f1e5e8",
              "surface-dim": "#e3d7da",
              "on-primary-fixed-variant": "#2e31b9",
              "on-secondary-fixed-variant": "#930012",
              "on-tertiary-container": "#faedf0",
              "surface-container-lowest": "#ffffff",
              "on-secondary-fixed": "#410004",
              "on-secondary": "#ffffff",
              "primary": "#3e42c7",
              "on-error": "#ffffff"
            },
            fontFamily: {
              "headline": ["Inter"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      }
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
</head>
<body class="bg-surface font-body text-on-surface antialiased">
<!-- TopNavBar Navigation Shell -->
<header class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
<nav class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
<div class="text-xl font-black tracking-tighter text-zinc-900">Gmax Digital</div>
<div class="hidden md:flex space-x-10 items-center">
<a class="text-zinc-600 font-medium tracking-tight hover:text-[#585DE1] transition-colors duration-300" href="#">Solutions</a>
<a class="text-zinc-600 font-medium tracking-tight hover:text-[#585DE1] transition-colors duration-300" href="#">Case Studies</a>
<a class="text-zinc-600 font-medium tracking-tight hover:text-[#585DE1] transition-colors duration-300" href="#">Authority</a>
<a class="text-zinc-600 font-medium tracking-tight hover:text-[#585DE1] transition-colors duration-300" href="#">Agency</a>
<button class="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:scale-95 transition-transform duration-200">Get a Quote</button>
</div>
<!-- Mobile Menu Icon (Placeholder) -->
<div class="md:hidden">
<span class="material-symbols-outlined text-on-surface">menu</span>
</div>
</nav>
</header>
<main class="pt-24">
<!-- Content Bridge / Hero Section Spacer -->
<section class="py-24 px-8 max-w-7xl mx-auto">
<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div class="space-y-8">
<span class="label-md uppercase tracking-widest font-bold text-primary">Strategic Growth</span>
<h1 class="text-6xl md:text-7xl font-extrabold tracking-tighter leading-none text-on-surface">
                        Architecture for <br/><span class="text-primary-container">Authority.</span>
</h1>
<p class="text-xl text-on-surface-variant leading-relaxed max-w-lg">
                        Gmax Digital specializes in transforming small business potential into market-leading authority through intentional digital strategy.
                    </p>
</div>
<div class="relative group">
<div class="absolute -inset-4 bg-surface-container-highest rounded-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
<img alt="Gmax Authority" class="relative rounded-lg shadow-2xl w-full h-[500px] object-cover" data-alt="Modern high-end office interior with glass walls, minimalist furniture, and soft morning light casting long shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs7wzRLiQqrDc9cyracTylxiPqL33bkZS23Bkk7jHBcHxXLdLpbXb9ofTPr1g_eMSIk2o488Ahfdnlt5z6WhZjkUr0UtcFTiI7x3jXV4HwrzSBs_buDBGUaTGCeVe6sltFbVaz8B4GIGh85e6V8YQmWlFboo15jZWYLZ6Sa7RrfQjltfVubGWWnzoW2GhRqkv0rHQgIF_tQ666WbHEBA4r6FukavndWvbgxV6gzrcau_akIPTRDAisOIdWO3VtInrLLIpNoCmj_8w"/>
</div>
</div>
</section>
<!-- Newsletter Subscription Section (The Task) -->
<!-- Editorial Authority Design System Implementation -->
<section class="relative bg-white pt-32 pb-48 overflow-hidden">
<!-- Asymmetric Background Elements -->
<div class="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low/50 -skew-x-12 translate-x-1/2"></div>
<div class="max-w-7xl mx-auto px-8 relative z-10">
<div class="flex flex-col md:flex-row items-start justify-between gap-20">
<!-- Left Column: Copy -->
<div class="md:w-3/5 space-y-12">
<div class="space-y-6">
<span class="text-xs uppercase tracking-[0.2em] font-extrabold text-primary flex items-center gap-3">
<span class="h-px w-8 bg-primary"></span>
                                The Digest
                            </span>
<h2 class="text-5xl md:text-6xl font-black tracking-tighter text-on-surface leading-[1.1]">
                                Strategic ideas worth receiving <br/>
<span class="text-zinc-400 font-light italic">occasionally</span>
</h2>
<p class="text-2xl text-on-surface-variant font-light leading-relaxed max-w-xl">
                                Occasional thinking on trust, positioning, digital perception, and growth for businesses building carefully.
                            </p>
</div>
</div>
<!-- Right Column: Subscription Module -->
<div class="md:w-2/5 w-full">
<div class="bg-surface-container-low p-10 md:p-14 rounded-xl space-y-10 relative overflow-hidden">
<!-- Background texture / subtle tonal shift -->
<div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, #241E20 1px, transparent 0); background-size: 24px 24px;"></div>
<div class="relative space-y-8">
<div class="space-y-4">
<label class="block text-sm font-bold uppercase tracking-wider text-on-surface-variant" for="email-address">
                                        Professional Email
                                    </label>
<div class="relative">
<input class="w-full bg-transparent border-b-2 border-outline-variant py-4 px-0 text-xl focus:outline-none focus:border-primary transition-colors placeholder:text-outline/50" id="email-address" placeholder="name@company.com" type="email"/>
</div>
</div>
<button class="w-full bg-primary-container text-on-primary py-5 px-8 rounded-lg text-lg font-bold tracking-tight flex items-center justify-between group hover:shadow-xl transition-all duration-300">
<span>Join the List</span>
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary-container shrink-0" style="font-variation-settings: 'opsz' 20;">verified</span>
<p class="text-sm text-on-surface-variant font-medium leading-tight">
                                        No noise. Only thoughtful insights when genuinely useful.
                                    </p>
</div>
</div>
</div>
<!-- Floating Detail -->
<div class="mt-8 flex items-center justify-end gap-4 text-outline/40">
<span class="text-xs font-bold uppercase tracking-widest">Gmax Digital Private List</span>
<span class="h-px w-12 bg-outline/20"></span>
</div>
</div>
</div>
</div>
<!-- Solution Bridge Overlap Visual -->
<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent opacity-20"></div>
</section>
<!-- Final CTA: The "Solution Bridge" Pattern -->
<section class="relative h-96">
<div class="absolute inset-0 flex flex-col">
<div class="h-1/2 bg-white"></div>
<div class="h-1/2 bg-zinc-900"></div>
</div>
<div class="absolute inset-0 flex items-center justify-center px-8">
<div class="bg-surface-container-highest max-w-4xl w-full p-12 md:p-16 rounded-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12">
<div class="space-y-4">
<h3 class="text-3xl font-bold tracking-tight text-on-surface">Ready to define your authority?</h3>
<p class="text-on-surface-variant">Let's discuss how your business moves forward.</p>
</div>
<button class="bg-[#F84343] text-white px-10 py-5 rounded-lg font-black uppercase tracking-widest hover:brightness-110 transition-all shrink-0">
                        Get a Quote
                    </button>
</div>
</div>
</section>
</main>
<!-- Footer Shell -->
<footer class="bg-zinc-900 w-full pt-16 pb-8">
<div class="flex flex-col md:flex-row justify-between items-center px-12 w-full max-w-7xl mx-auto">
<div class="mb-8 md:mb-0">
<div class="text-lg font-bold text-white mb-2">Gmax Digital</div>
<p class="text-zinc-400 text-sm font-['Inter'] leading-relaxed">© 2024 Gmax Digital. Small Businesses. Big Solutions.</p>
</div>
<div class="flex flex-wrap justify-center gap-8">
<a class="text-zinc-400 text-sm hover:text-[#F84343] transition-all opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a class="text-zinc-400 text-sm hover:text-[#F84343] transition-all opacity-80 hover:opacity-100" href="#">Terms of Service</a>
<a class="text-zinc-400 text-sm hover:text-[#F84343] transition-all opacity-80 hover:opacity-100" href="#">LinkedIn</a>
<a class="text-zinc-400 text-sm hover:text-[#F84343] transition-all opacity-80 hover:opacity-100" href="#">Contact Us</a>
</div>
</div>
</footer>
</body></html>

<!-- case_study  -->

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Gmax Digital | Scaling Hyper-Growth Case Study</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "tertiary-fixed": "#ece0e2",
                        "tertiary-container": "#746b6d",
                        "primary-fixed-dim": "#c0c1ff",
                        "surface": "#fff8f8",
                        "primary-fixed": "#e1e0ff",
                        "surface-variant": "#ece0e2",
                        "tertiary": "#5b5355",
                        "on-secondary-fixed": "#410004",
                        "inverse-primary": "#c0c1ff",
                        "tertiary-fixed-dim": "#cfc4c6",
                        "on-surface": "#201a1c",
                        "on-error-container": "#93000a",
                        "outline-variant": "#c6c5d6",
                        "secondary-fixed": "#ffdad7",
                        "on-secondary-fixed-variant": "#930012",
                        "surface-container": "#f7ebed",
                        "on-error": "#ffffff",
                        "on-tertiary": "#ffffff",
                        "error": "#ba1a1a",
                        "on-tertiary-container": "#faedf0",
                        "on-secondary-container": "#fffbff",
                        "error-container": "#ffdad6",
                        "on-background": "#201a1c",
                        "primary": "#3e42c7",
                        "inverse-surface": "#352f31",
                        "surface-dim": "#e3d7da",
                        "on-tertiary-fixed-variant": "#4c4547",
                        "on-surface-variant": "#464554",
                        "secondary": "#b90d1d",
                        "on-secondary": "#ffffff",
                        "outline": "#767686",
                        "secondary-fixed-dim": "#ffb3ad",
                        "on-primary-fixed": "#04006d",
                        "on-primary-container": "#f1efff",
                        "surface-container-highest": "#ece0e2",
                        "on-primary-fixed-variant": "#2e31b9",
                        "on-tertiary-fixed": "#201a1c",
                        "background": "#fff8f8",
                        "surface-tint": "#484dd1",
                        "primary-container": "#585de1",
                        "surface-bright": "#fff8f8",
                        "inverse-on-surface": "#faeef0",
                        "on-primary": "#ffffff",
                        "surface-container-high": "#f1e5e8",
                        "surface-container-low": "#fdf1f3",
                        "secondary-container": "#dd2f33",
                        "surface-container-lowest": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "fontFamily": {
                        "headline": ["Inter"],
                        "body": ["Inter"],
                        "label": ["Inter"]
                    }
                }
            }
        }
    </script>
<style>
        body { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
    </style>
</head>
<body class="bg-background text-on-background selection:bg-primary-container selection:text-white">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl">
<div class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
<div class="text-xl font-black tracking-tighter text-[#241E20]">Gmax Digital</div>
<!-- Desktop Navigation -->
<div class="hidden md:flex items-center gap-8">
<a class="text-[#201A1C] hover:text-[#585DE1] transition-colors duration-300 font-['Inter'] tracking-tight text-sm font-medium" href="#">Solutions</a>
<a class="text-[#585DE1] border-b-2 border-[#585DE1] pb-1 font-['Inter'] tracking-tight text-sm font-medium" href="#">Case Studies</a>
<a class="text-[#201A1C] hover:text-[#585DE1] transition-colors duration-300 font-['Inter'] tracking-tight text-sm font-medium" href="#">Authority</a>
<a class="text-[#201A1C] hover:text-[#585DE1] transition-colors duration-300 font-['Inter'] tracking-tight text-sm font-medium" href="#">Agency</a>
</div>
<div class="flex items-center gap-4">
<button class="hidden lg:block text-[#201A1C] font-['Inter'] text-sm font-medium px-4 py-2">Login</button>
<button class="bg-primary-container text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-tight hover:opacity-90 active:scale-95 transition-all">Get a Quote</button>
</div>
</div>
</nav>
<main class="pt-32">
<!-- Hero Section -->
<section class="max-w-7xl mx-auto px-8 mb-24">
<div class="max-w-3xl">
<span class="inline-block bg-surface-container-low text-primary font-bold text-xs uppercase tracking-[0.1em] px-3 py-1 rounded-sm mb-6">Fintech Case Study</span>
<h1 class="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#241E20] leading-[1.05] mb-8">
                    Scaling Hyper-Growth: The FinTech Infrastructure Overhaul
                </h1>
<p class="text-xl text-on-surface-variant leading-relaxed mb-12">
                    How Gmax Digital architected a resilient, high-throughput ecosystem for a global payment provider facing critical performance bottlenecks and security vulnerability gaps.
                </p>
</div>
<!-- Results Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="bg-[#241E20] p-10 flex flex-col justify-between group">
<span class="text-white/40 text-xs font-bold uppercase tracking-widest">Growth Velocity</span>
<div class="mt-12">
<div class="text-6xl font-black text-white mb-2">+142%</div>
<div class="text-[#F84343] font-bold text-lg uppercase tracking-tight">ROI Achieved</div>
</div>
</div>
<div class="bg-surface-container-low p-10 flex flex-col justify-between">
<span class="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Efficiency Gap</span>
<div class="mt-12">
<div class="text-6xl font-black text-[#241E20] mb-2">-38%</div>
<div class="text-primary font-bold text-lg uppercase tracking-tight">OpEx Reduction</div>
</div>
</div>
<div class="bg-white p-10 border border-outline-variant/20 flex flex-col justify-between">
<span class="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Reliability Score</span>
<div class="mt-12">
<div class="text-6xl font-black text-[#241E20] mb-2">99.9%</div>
<div class="text-primary font-bold text-lg uppercase tracking-tight">System Uptime</div>
</div>
</div>
</div>
</section>
<!-- Main Visual Hero -->
<section class="w-full h-[614px] overflow-hidden mb-24 relative">
<div class="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
<img class="w-full h-full object-cover grayscale brightness-50" data-alt="Modern server room with glowing blue led lights and dark metallic surfaces representing premium digital infrastructure and high-end technology" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvkYZwqIAHMO9wEsaQncBwNCr0tokZ55wxCe9ThGhdCISwp_ic3pW-oWEI7BPL9dZMN_qIZwAyr4lF95yCuUi3e6wIIVab1fgNRQqQi-gMVDrq6pC45FANfOexeBRpW2CooPocKiywPeDKM4-OhRpQtcQLPjjiAR0hlLWEmSa3870mp7REX0Nbq9hmBlm1UIbumOyO4UzxBmkw4QVBAwDPipjHDdF_PicjFoi1y2bF2eNZJG-LxXxjR6KAb8bKo_9JFG-n1ZPr7ao"/>
<div class="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-center">
<div class="flex items-center gap-4 text-white/60">
<span class="h-px w-12 bg-white/30"></span>
<span class="text-xs uppercase tracking-[0.2em]">Strategic Technical Blueprint</span>
<span class="h-px w-12 bg-white/30"></span>
</div>
</div>
</section>
<!-- Content Narrative Section -->
<section class="max-w-7xl mx-auto px-8 mb-32">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
<!-- Sidebar Insights -->
<aside class="lg:col-span-4 space-y-12">
<div class="bg-surface-container-low p-8 sticky top-32">
<h3 class="text-sm font-black uppercase tracking-widest mb-6 border-b border-outline-variant pb-4">Strategic Insights</h3>
<ul class="space-y-6">
<li>
<span class="block text-primary font-bold mb-1">Decoupled Scaling</span>
<p class="text-sm text-on-surface-variant">Architecture must be built for the traffic you want, not the traffic you have.</p>
</li>
<li>
<span class="block text-primary font-bold mb-1">Security by Design</span>
<p class="text-sm text-on-surface-variant">Financial trust is a binary state. One breach is a total failure.</p>
</li>
<li>
<span class="block text-primary font-bold mb-1">Operational Agility</span>
<p class="text-sm text-on-surface-variant">Automating the mundane unlocks your elite engineers for the extraordinary.</p>
</li>
</ul>
<div class="mt-12 pt-8 border-t border-outline-variant">
<h3 class="text-sm font-black uppercase tracking-widest mb-4">Strategic Deliverables</h3>
<div class="flex flex-wrap gap-2">
<span class="text-[10px] bg-white px-3 py-1 border border-outline-variant font-bold uppercase tracking-tighter">Market Positioning</span>
<span class="text-[10px] bg-white px-3 py-1 border border-outline-variant font-bold uppercase tracking-tighter">Scalable Infrastructure</span>
<span class="text-[10px] bg-white px-3 py-1 border border-outline-variant font-bold uppercase tracking-tighter">Growth Ecosystems</span>
</div>
</div>
</div>
</aside>
<!-- Narrative Body -->
<div class="lg:col-span-8 space-y-24">
<!-- 01 The Challenge -->
<div class="relative pl-12 border-l border-outline-variant">
<span class="absolute -left-3 top-0 bg-white text-[#241E20] font-black text-xs px-2 py-1 border border-[#241E20]">01</span>
<h2 class="text-3xl font-extrabold text-[#241E20] mb-6">The Challenge</h2>
<div class="space-y-6 text-lg text-on-surface-variant leading-relaxed">
<p>Our client, a rapidly expanding FinTech startup, was hitting a hard ceiling. Their legacy monolithic architecture, built for rapid market entry, was now crumbling under the weight of 10x user growth. </p>
<p>Significant latency spikes were occurring during peak trading hours, leading to a <span class="text-[#241E20] font-bold">12% customer churn rate</span> within a single quarter. Technical debt was no longer an internal frustration—it was a critical business risk.</p>
</div>
</div>
<!-- 02 The Strategy -->
<div class="relative pl-12 border-l border-outline-variant">
<span class="absolute -left-3 top-0 bg-white text-[#241E20] font-black text-xs px-2 py-1 border border-[#241E20]">02</span>
<h2 class="text-3xl font-extrabold text-[#241E20] mb-6">The Strategy</h2>
<div class="space-y-6 text-lg text-on-surface-variant leading-relaxed">
<p>We implemented our signature <span class="text-primary font-bold">"Architectural Advocate"</span> approach. This wasn't a simple patch job; it was a fundamental decoupling of services to ensure that failure in one node could never trigger a systemic collapse.</p>
<p>The strategy focused on "Stateless Growth"—moving away from hardware-dependent sessions toward a cloud-native, auto-scaling mesh that could breathe with the market's volatility.</p>
</div>
</div>
<!-- Solution Bridge Pattern -->
<div class="py-12">
<div class="relative">
<div class="h-32 bg-[#241E20] w-full"></div>
<div class="h-32 bg-white w-full"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 bg-surface-container-highest p-12 shadow-2xl">
<h4 class="text-xs font-black tracking-widest text-[#F84343] uppercase mb-4 text-center">Core Transformation</h4>
<p class="text-2xl font-bold text-[#241E20] text-center italic leading-tight">"From a fragile monolith to a resilient network of distributed growth systems."</p>
</div>
</div>
</div>
<!-- 03 The Execution -->
<div class="relative pl-12 border-l border-outline-variant">
<span class="absolute -left-3 top-0 bg-white text-[#241E20] font-black text-xs px-2 py-1 border border-[#241E20]">03</span>
<h2 class="text-3xl font-extrabold text-[#241E20] mb-6">The Execution</h2>
<div class="space-y-6 text-lg text-on-surface-variant leading-relaxed">
<p>Over a rigorous 14-week sprint, Gmax Digital oversaw the complete refactoring of the core transaction engine. We migrated 4TB of legacy data without a single second of downtime using a 'Blue-Green' deployment strategy.</p>
<p>Security hardening was paramount. We integrated zero-trust architecture at every endpoint, ensuring that every internal request was authenticated with the same rigor as an external gateway entry.</p>
</div>
</div>
<!-- 04 The Results -->
<div class="relative pl-12 border-l border-outline-variant">
<span class="absolute -left-3 top-0 bg-white text-[#241E20] font-black text-xs px-2 py-1 border border-[#241E20]">04</span>
<h2 class="text-3xl font-extrabold text-[#241E20] mb-6">The Results</h2>
<!-- Before/After Comparison Chart -->
<div class="bg-surface-container mt-12 overflow-hidden">
<div class="grid grid-cols-2">
<div class="p-8 border-r border-outline-variant/30">
<span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-4">Before Gmax</span>
<div class="space-y-4">
<div class="h-2 bg-error/20 w-full rounded-full">
<div class="h-full bg-error w-3/4 rounded-full"></div>
</div>
<div class="text-xs font-bold text-error uppercase">3.2s Average Latency</div>
<div class="h-2 bg-error/20 w-full rounded-full">
<div class="h-full bg-error w-1/2 rounded-full"></div>
</div>
<div class="text-xs font-bold text-error uppercase">Manual Server Scaling</div>
</div>
</div>
<div class="p-8 bg-primary/5">
<span class="text-[10px] font-bold text-primary uppercase tracking-widest block mb-4">After Transformation</span>
<div class="space-y-4">
<div class="h-2 bg-primary/20 w-full rounded-full">
<div class="h-full bg-primary w-[5%] rounded-full"></div>
</div>
<div class="text-xs font-bold text-primary uppercase">140ms Average Latency</div>
<div class="h-2 bg-primary/20 w-full rounded-full">
<div class="h-full bg-primary w-[95%] rounded-full"></div>
</div>
<div class="text-xs font-bold text-primary uppercase">100% Automated Mesh</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Testimonial Block -->
<section class="bg-[#241E20] py-32 overflow-hidden relative">
<div class="absolute top-0 right-0 opacity-10 pointer-events-none">
<span class="material-symbols-outlined text-[20rem] font-thin">format_quote</span>
</div>
<div class="max-w-4xl mx-auto px-8 relative z-10 text-center">
<h2 class="text-white text-3xl md:text-5xl font-light italic leading-snug mb-12">
                    "Gmax Digital didn't just fix our code; they reimagined our business model through the lens of technical infrastructure. We are now prepared for the next decade of growth, not just the next quarter."
                </h2>
<div class="flex flex-col items-center">
<div class="w-16 h-16 rounded-full bg-primary-container mb-4 flex items-center justify-center text-white font-bold text-xl">MT</div>
<div class="text-white font-bold text-lg">Marcus Thorne</div>
<div class="text-[#F84343] font-bold text-xs uppercase tracking-widest">CTO, Vanguard Payments</div>
</div>
</div>
</section>
<!-- Next Case Study Preview -->
<section class="max-w-7xl mx-auto px-8 py-24 border-b border-outline-variant/30">
<div class="flex justify-between items-end mb-12">
<div>
<h3 class="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant mb-4">Up Next</h3>
<h2 class="text-4xl font-extrabold text-[#241E20]">Sustainable Energy Logistix</h2>
</div>
<a class="group flex items-center gap-2 text-primary font-bold" href="#">
                    View Case Study 
                    <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
<div class="h-[400px] w-full bg-surface-container-low overflow-hidden relative group">
<img class="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" data-alt="Modern wind turbines on a green rolling hill with clear blue sky and a sleek architectural minimalist house in the distance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRJEH3HbIJ8eN-6i5ldm_jo7cBve1BUXYpHimu2KbY-3yXBuODhxKlVwLQa51rAK5aCqkEeNaflKoBNHLTlfNrQTzcuAwg657G1_t4CWe31pjEKgxDM_1Ybo9lUNkIQPpg1NdT0BIMoyBQdi5LKh5GrO4N-1inUKVPgU4X6aAzMujp73QEBc4GwYureRYwMhGz5K7ChGsS2GUh5g3FS4ejcsmAyJir0Mdl1WSxWtn2ythwRXcaIgiVin3ep8Q8_-BWOYyJFbtHEAk"/>
</div>
</section>
<!-- Footer CTA -->
<section class="max-w-4xl mx-auto px-8 py-32 text-center">
<h2 class="text-4xl md:text-5xl font-black text-[#241E20] tracking-tighter mb-8 leading-none">Want similar growth for your business?</h2>
<div class="flex flex-col md:flex-row gap-6 justify-center">
<button class="bg-[#F84343] text-white px-10 py-5 rounded-lg text-lg font-bold tracking-tight hover:brightness-110 active:scale-95 transition-all">Book a Strategy Call</button>
<button class="border-2 border-[#241E20] text-[#241E20] px-10 py-5 rounded-lg text-lg font-bold tracking-tight hover:bg-[#241E20] hover:text-white active:scale-95 transition-all">View More Results</button>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-[#241E20] py-16">
<div class="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
<div class="flex flex-col items-center md:items-start">
<div class="text-lg font-bold text-white mb-2">Gmax Digital</div>
<p class="font-['Inter'] text-xs uppercase tracking-[0.05em] text-white/60">© 2024 Gmax Digital. Small Businesses. Big Solutions.</p>
</div>
<div class="flex gap-8">
<a class="font-['Inter'] text-xs uppercase tracking-[0.05em] text-white/60 hover:text-[#F84343] transition-all" href="#">Privacy Policy</a>
<a class="font-['Inter'] text-xs uppercase tracking-[0.05em] text-white/60 hover:text-[#F84343] transition-all" href="#">Terms of Service</a>
<a class="font-['Inter'] text-xs uppercase tracking-[0.05em] text-white/60 hover:text-[#F84343] transition-all" href="#">Cookie Policy</a>
<a class="font-['Inter'] text-xs uppercase tracking-[0.05em] text-white/60 hover:text-[#F84343] transition-all" href="#">LinkedIn</a>
</div>
</div>
</footer>
</body></html>
