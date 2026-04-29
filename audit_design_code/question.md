<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AI Audit Progress | Gmax Strategy AI</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-bright": "#fff8f8",
                    "on-tertiary-fixed": "#201a1c",
                    "inverse-surface": "#352f31",
                    "error-container": "#ffdad6",
                    "surface-tint": "#484dd1",
                    "tertiary-container": "#746b6d",
                    "surface-container-lowest": "#ffffff",
                    "on-background": "#201a1c",
                    "inverse-primary": "#c0c1ff",
                    "tertiary-fixed-dim": "#cfc4c6",
                    "surface-container-low": "#fdf1f3",
                    "surface-dim": "#e3d7da",
                    "background": "#fff8f8",
                    "secondary-container": "#dd2f33",
                    "primary-container": "#585de1",
                    "on-secondary-fixed-variant": "#930012",
                    "on-primary-container": "#f1efff",
                    "secondary": "#b90d1d",
                    "primary-fixed": "#e1e0ff",
                    "on-surface-variant": "#464554",
                    "error": "#ba1a1a",
                    "surface-variant": "#ece0e2",
                    "on-primary-fixed-variant": "#2e31b9",
                    "outline-variant": "#c6c5d6",
                    "tertiary-fixed": "#ece0e2",
                    "on-tertiary-container": "#faedf0",
                    "on-primary": "#ffffff",
                    "on-primary-fixed": "#04006d",
                    "surface-container": "#f7ebed",
                    "on-surface": "#201a1c",
                    "on-secondary-fixed": "#410004",
                    "on-error-container": "#93000a",
                    "on-error": "#ffffff",
                    "outline": "#767686",
                    "surface-container-high": "#f1e5e8",
                    "primary-fixed-dim": "#c0c1ff",
                    "on-tertiary-fixed-variant": "#4c4547",
                    "on-secondary-container": "#fffbff",
                    "secondary-fixed": "#ffdad7",
                    "inverse-on-surface": "#faeef0",
                    "tertiary": "#5b5355",
                    "surface-container-highest": "#ece0e2",
                    "secondary-fixed-dim": "#ffb3ad",
                    "surface": "#fff8f8",
                    "on-secondary": "#ffffff",
                    "on-tertiary": "#ffffff",
                    "primary": "#3e42c7"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "fontFamily": {
                    "headline": ["Inter"],
                    "display": ["Inter"],
                    "body": ["Inter"],
                    "label": ["Inter"]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: #ffffff;
            color: #241E20;
        }
    </style>
</head>
<body class="flex flex-col min-h-screen antialiased">
<!-- TopNavBar Shared Component -->
<header class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-[0_8px_40px_rgba(32,26,28,0.04)]">
<nav class="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center font-['Inter'] tracking-tight leading-relaxed antialiased">
<div class="text-lg font-black tracking-tighter text-[#241E20] uppercase">
                Gmax Strategy AI
            </div>
<div class="hidden md:flex items-center gap-10">
<a class="text-[#585DE1] border-b-2 border-[#585DE1] pb-1 font-semibold transition-all duration-300" href="#">Audit Progress</a>
<a class="text-[#241E20]/50 font-medium hover:text-[#585DE1] transition-all duration-300" href="#">01 Discovery</a>
<a class="text-[#241E20]/50 font-medium hover:text-[#585DE1] transition-all duration-300" href="#">02 Infrastructure</a>
<a class="text-[#241E20]/50 font-medium hover:text-[#585DE1] transition-all duration-300" href="#">03 Strategy</a>
</div>
<div class="flex items-center gap-4">
<button class="px-6 py-2 bg-primary-container text-white rounded-lg font-semibold active:scale-95 transition-transform">
                    Save Progress
                </button>
<div class="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
<img alt="Agency Consultant Profile" class="w-full h-full object-cover" data-alt="professional portrait of a confident male consultant in business attire against a neutral office background with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCishDQTgFM58yK5nOD4yfCFeD4fjlLe289KMJfBrv-3Dk1rHZkmDUUXR7ruz4L7pSsJr0cmBelb3PYkNuyW9lE_coclMcFADgafxzvmNhi0u1NR1Y7RRJlBf0oqFccEwgZrELqrWKWeQmOBGvW1qJUr7Nmo73L63VjK_k9-UkY6EY6MJYlBAkHYd_M1VXC32NN_SNe2V3omsfsahXlemg_j4X_IQYc4y1z_3yO9E2xXwf8fNXs7fCojj_e7dV0ZxjJjj6iQ3aFmOs"/>
</div>
</div>
</nav>
</header>
<main class="flex-grow pt-32 pb-24 px-8 max-w-5xl mx-auto w-full">
<!-- Step Indicator -->
<div class="mb-12">
<div class="flex justify-between items-end mb-4">
<div>
<span class="text-xs font-bold tracking-[0.05em] uppercase text-on-surface-variant">Module 01: Visibility Audit</span>
<h2 class="text-sm font-semibold text-primary mt-1">Step 02 of 08</h2>
</div>
<span class="text-xs font-medium text-on-surface-variant">25% Completed</span>
</div>
<div class="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-[#585DE1] w-1/4 rounded-full"></div>
</div>
</div>
<!-- Question Header -->
<div class="mb-12">
<h1 class="text-[2rem] md:text-[2.5rem] font-extrabold text-[#241E20] leading-tight tracking-tight max-w-3xl">
                How does your brand currently appear in LLM responses (ChatGPT, Claude, Perplexity)?
            </h1>
<p class="mt-4 text-on-surface-variant text-lg max-w-2xl leading-relaxed">
                Large Language Models are the new search gatekeepers. Understanding your current "AI Citation" footprint is critical for strategic optimization.
            </p>
</div>
<!-- Answer Options Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
<!-- Selected State -->
<button class="group text-left p-8 rounded-xl bg-white border-2 border-[#585DE1] shadow-[0_8px_40px_rgba(88,93,225,0.08)] transition-all duration-300">
<div class="flex justify-between items-start mb-6">
<div class="w-12 h-12 flex items-center justify-center bg-primary-container text-white rounded-lg">
<span class="material-symbols-outlined">visibility</span>
</div>
<div class="w-6 h-6 rounded-full border-2 border-[#585DE1] flex items-center justify-center">
<div class="w-3 h-3 bg-[#585DE1] rounded-full"></div>
</div>
</div>
<h3 class="text-xl font-bold text-[#241E20] mb-2">High Visibility</h3>
<p class="text-on-surface-variant leading-relaxed">Our brand is frequently cited as a top recommendation with accurate, detailed data points.</p>
</button>
<!-- Default State -->
<button class="group text-left p-8 rounded-xl bg-surface-container-low border-2 border-transparent hover:border-outline-variant transition-all duration-300">
<div class="flex justify-between items-start mb-6">
<div class="w-12 h-12 flex items-center justify-center bg-surface-variant text-on-surface rounded-lg">
<span class="material-symbols-outlined">cloud_sync</span>
</div>
<div class="w-6 h-6 rounded-full border-2 border-outline-variant"></div>
</div>
<h3 class="text-xl font-bold text-[#241E20] mb-2">Inconsistent Citations</h3>
<p class="text-on-surface-variant leading-relaxed">We appear occasionally, but the information is often outdated, incomplete, or generic.</p>
</button>
<!-- Default State -->
<button class="group text-left p-8 rounded-xl bg-surface-container-low border-2 border-transparent hover:border-outline-variant transition-all duration-300">
<div class="flex justify-between items-start mb-6">
<div class="w-12 h-12 flex items-center justify-center bg-surface-variant text-on-surface rounded-lg">
<span class="material-symbols-outlined">search_off</span>
</div>
<div class="w-6 h-6 rounded-full border-2 border-outline-variant"></div>
</div>
<h3 class="text-xl font-bold text-[#241E20] mb-2">Invisible / Not Cited</h3>
<p class="text-on-surface-variant leading-relaxed">The models do not recognize us as a topical authority or primary provider in our space.</p>
</button>
<!-- Default State -->
<button class="group text-left p-8 rounded-xl bg-surface-container-low border-2 border-transparent hover:border-outline-variant transition-all duration-300">
<div class="flex justify-between items-start mb-6">
<div class="w-12 h-12 flex items-center justify-center bg-surface-variant text-on-surface rounded-lg">
<span class="material-symbols-outlined">error</span>
</div>
<div class="w-6 h-6 rounded-full border-2 border-outline-variant"></div>
</div>
<h3 class="text-xl font-bold text-[#241E20] mb-2">Inaccurate / Hallucinating</h3>
<p class="text-on-surface-variant leading-relaxed">Models frequently provide incorrect information about our products or pricing.</p>
</button>
</div>
<!-- Navigation Actions -->
<div class="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-surface-container">
<button class="w-full md:w-auto px-8 py-4 text-on-surface-variant font-bold hover:text-primary transition-colors flex items-center gap-2">
<span class="material-symbols-outlined">arrow_back</span>
                Previous Step
            </button>
<div class="flex flex-col md:flex-row gap-4 w-full md:w-auto">
<button class="w-full md:w-auto px-10 py-4 bg-[#585DE1] text-white rounded-lg font-bold text-lg shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
                    Continue to Infrastructure
                    <span class="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</main>
<!-- Solution Bridge Module -->
<section class="mt-12 bg-[#241E20] py-24 relative">
<div class="max-w-7xl mx-auto px-8 grid md:grid-cols-2 items-center gap-16">
<div class="text-white">
<span class="text-xs font-bold tracking-[0.2em] text-[#F84343] uppercase">The Solution Bridge</span>
<h2 class="text-4xl font-extrabold mt-4 mb-6 leading-tight">Closing the gap between obscurity and authority.</h2>
<p class="text-white/60 text-lg leading-relaxed">Our AI Audit doesn't just measure visibility; it maps the exact technical path to becoming the "Preferred Answer" for Large Language Models.</p>
</div>
<div class="relative h-80 w-full bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 p-2">
<img alt="AI Data Visualization" class="w-full h-full object-cover rounded-xl opacity-80" data-alt="abstract visualization of neural networks and data points in deep blue and purple tones representing artificial intelligence and connectivity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALkprmXxI7btJG_SeWhg4BDofjtYIVXWCI45NqbC30BQEMfhcmGP3miMmlxeTOoj1YkkXCcG_y5r_BPVrgiKmGg2YB_Hs5QG3bECeqBNMQEge1ecgmgemqtMmu-ob3RTCMPJTCXv7_W1gsOPqrHQJAYaz0HmCGAgBovsGkW58FLhhdB8J8cLUU5uXQvCr1YcbxU8Xu2j7WKsawg1NLD5uBSTqP05AkFbpVPlMHw_AS5PJ39rCP565SwCWFVc-gSsWZUSfX_2Rsr5w"/>
</div>
</div>
</section>
<!-- Footer Shared Component -->
<footer class="w-full py-12 mt-auto bg-[#241E20] text-white font-['Inter'] text-sm tracking-wide">
<div class="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div class="flex flex-col items-center md:items-start gap-2">
<div class="text-white font-bold uppercase tracking-widest">Gmax Digital</div>
<p class="text-white/60">© 2024 Gmax Digital. Architectural Solutions for Small Business.</p>
</div>
<div class="flex gap-8">
<a class="text-white/60 hover:text-[#F84343] transition-colors" href="#">Privacy Policy</a>
<a class="text-white/60 hover:text-[#F84343] transition-colors" href="#">Terms of Service</a>
<a class="text-white/60 hover:text-[#F84343] transition-colors" href="#">Help Center</a>
</div>
</div>
</footer>
</body></html>
