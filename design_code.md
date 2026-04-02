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
