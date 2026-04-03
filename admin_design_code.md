<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "outline-variant": "#c6c5d6",
                    "secondary-fixed": "#ffdad7",
                    "inverse-primary": "#c0c1ff",
                    "on-surface": "#201a1c",
                    "on-surface-variant": "#464554",
                    "on-tertiary-fixed": "#201a1c",
                    "on-secondary": "#ffffff",
                    "secondary-fixed-dim": "#ffb3ad",
                    "on-error-container": "#93000a",
                    "on-background": "#201a1c",
                    "surface-container-highest": "#ece0e2",
                    "on-tertiary-container": "#faedf0",
                    "surface-container-low": "#fdf1f3",
                    "tertiary": "#5b5355",
                    "surface-tint": "#484dd1",
                    "inverse-surface": "#352f31",
                    "surface-dim": "#e3d7da",
                    "secondary-container": "#dd2f33",
                    "outline": "#767686",
                    "error-container": "#ffdad6",
                    "primary-fixed-dim": "#c0c1ff",
                    "primary-fixed": "#e1e0ff",
                    "inverse-on-surface": "#faeef0",
                    "background": "#fff8f8",
                    "on-secondary-container": "#fffbff",
                    "primary": "#3e42c7",
                    "surface-variant": "#ece0e2",
                    "surface-container-lowest": "#ffffff",
                    "on-primary-fixed-variant": "#2e31b9",
                    "surface-container-high": "#f1e5e8",
                    "on-primary": "#ffffff",
                    "tertiary-container": "#746b6d",
                    "secondary": "#b90d1d",
                    "primary-container": "#585de1",
                    "error": "#ba1a1a",
                    "surface-container": "#f7ebed",
                    "on-tertiary-fixed-variant": "#4c4547",
                    "on-error": "#ffffff",
                    "on-secondary-fixed-variant": "#930012",
                    "on-primary-container": "#f1efff",
                    "surface-bright": "#fff8f8",
                    "on-primary-fixed": "#04006d",
                    "tertiary-fixed-dim": "#cfc4c6",
                    "on-tertiary": "#ffffff",
                    "tertiary-fixed": "#ece0e2",
                    "surface": "#fff8f8",
                    "on-secondary-fixed": "#410004"
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
          },
        },
      }
    </script>
<style>
        body { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background text-on-background antialiased flex">
<!-- SideNavBar (Authority: JSON) -->
<aside class="h-screen w-64 fixed left-0 top-0 bg-stone-900 dark:bg-stone-950 shadow-2xl flex flex-col py-8 z-50">
<div class="px-8 mb-10">
<h1 class="text-white font-black tracking-tight text-lg uppercase">Gmax Admin</h1>
<p class="text-stone-500 text-[10px] tracking-widest uppercase mt-1">Strategic Authority</p>
</div>
<nav class="flex-1 space-y-1">
<div class="bg-stone-800 text-white border-l-4 border-blue-500 px-4 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined text-blue-500">dashboard</span>
<span class="font-sans text-sm tracking-wide">Dashboard</span>
</div>
<div class="text-stone-400 hover:text-white hover:bg-stone-800/50 px-4 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined">analytics</span>
<span class="font-sans text-sm tracking-wide">Insights</span>
</div>
<div class="text-stone-400 hover:text-white hover:bg-stone-800/50 px-4 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined">inventory_2</span>
<span class="font-sans text-sm tracking-wide">Case Studies</span>
</div>
<div class="text-stone-400 hover:text-white hover:bg-stone-800/50 px-4 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined">chat_bubble</span>
<span class="font-sans text-sm tracking-wide">Messages</span>
</div>
<div class="text-stone-400 hover:text-white hover:bg-stone-800/50 px-4 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined">group</span>
<span class="font-sans text-sm tracking-wide">Subscribers</span>
</div>
<div class="text-stone-400 hover:text-white hover:bg-stone-800/50 px-4 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined">settings</span>
<span class="font-sans text-sm tracking-wide">Settings</span>
</div>
</nav>
<div class="px-6 mt-auto">
<button class="w-full bg-primary text-white py-3 rounded-md text-sm font-semibold flex items-center justify-center gap-2 active:scale-95 transition-all">
<span class="material-symbols-outlined text-sm">add</span>
                New Case Study
            </button>
<div class="mt-6 pt-6 border-t border-stone-800">
<div class="text-stone-400 hover:text-white hover:bg-stone-800/50 px-4 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined">logout</span>
<span class="font-sans text-sm tracking-wide">Logout</span>
</div>
</div>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="ml-64 flex-1 min-h-screen relative">
<!-- TopAppBar (Authority: JSON) -->
<header class="w-full h-16 sticky top-0 z-40 bg-white/70 backdrop-blur-md shadow-sm flex items-center justify-between px-8 border-b border-stone-100">
<div class="flex items-center gap-4 flex-1">
<div class="relative w-full max-w-md">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-lg">search</span>
<input class="w-full bg-surface-container border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20" placeholder="Search strategic assets..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-4">
<button class="text-stone-500 hover:text-blue-600 transition-colors relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full border-2 border-white"></span>
</button>
<div class="h-8 w-8 rounded-full overflow-hidden border border-outline-variant bg-surface-container">
<img class="w-full h-full object-cover" data-alt="professional headshot of an executive in a minimalist studio setting with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc8b8f3xUxKVxAKLu8_1CkeNz9QdNZHr3WU88TjrPRTX563tMGNNlULpRuyj1XjYaH2kFIswC3REFdGluPvPJh2zsybQa1ccEPK0tJvd83HqBKNG0LpnackdHtj6Wd6stDTNddp4S6Gbjcn0yCcgRlHK9ELzeM2kINoNAbCy2pSFu4XzZtioXwpw9vlQ2ohOpufZwDDtQRw6eqPh6UCC7sDbuXrynqKqNl0fz8E9wrzJs2AuehDknjq40L1qMurOhthqd7pAEH2i4"/>
</div>
</div>
</div>
</header>
<div class="p-10 space-y-10">
<!-- Hero Heading -->
<section>
<label class="text-[0.75rem] font-semibold text-primary uppercase tracking-[0.05em] mb-2 block">Executive Overview</label>
<h2 class="text-4xl font-bold tracking-tight text-on-surface">Dashboard</h2>
<p class="text-on-surface-variant max-w-2xl mt-4 leading-relaxed body-lg">
                    Strategic performance metrics for Gmax Digital's growth ecosystem. Monitor engagement, outreach, and solution delivery in real-time.
                </p>
</section>
<!-- KPI Bento Grid -->
<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- KPI 1: Subscribers -->
<div class="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-transparent hover:border-outline-variant/20 transition-all group">
<div class="flex justify-between items-start mb-6">
<div class="p-2 bg-primary/10 rounded-lg text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">group</span>
</div>
<span class="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+12%</span>
</div>
<div class="space-y-1">
<h3 class="text-3xl font-black tracking-tighter text-on-surface">1,240</h3>
<p class="text-sm font-medium text-on-surface-variant uppercase tracking-wider">Total Subscribers</p>
</div>
<div class="mt-6 h-1 w-full bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-primary w-3/4 rounded-full"></div>
</div>
</div>
<!-- KPI 2: Active Messages -->
<div class="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-transparent hover:border-outline-variant/20 transition-all">
<div class="flex justify-between items-start mb-6">
<div class="p-2 bg-secondary/10 rounded-lg text-secondary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">chat_bubble</span>
</div>
<span class="text-xs font-bold text-secondary bg-secondary-fixed/30 px-2 py-1 rounded">Urgent</span>
</div>
<div class="space-y-1">
<h3 class="text-3xl font-black tracking-tighter text-on-surface">12</h3>
<p class="text-sm font-medium text-on-surface-variant uppercase tracking-wider">Active Messages</p>
</div>
<div class="mt-6 flex gap-1">
<div class="h-2 w-full bg-secondary rounded-sm"></div>
<div class="h-2 w-full bg-secondary rounded-sm"></div>
<div class="h-2 w-full bg-surface-container rounded-sm"></div>
<div class="h-2 w-full bg-surface-container rounded-sm"></div>
<div class="h-2 w-full bg-surface-container rounded-sm"></div>
</div>
</div>
<!-- KPI 3: Case Studies -->
<div class="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-transparent hover:border-outline-variant/20 transition-all">
<div class="flex justify-between items-start mb-6">
<div class="p-2 bg-stone-900 rounded-lg text-white">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">inventory_2</span>
</div>
</div>
<div class="space-y-1">
<h3 class="text-3xl font-black tracking-tighter text-on-surface">8</h3>
<p class="text-sm font-medium text-on-surface-variant uppercase tracking-wider">Recent Case Studies</p>
</div>
<div class="mt-6 flex -space-x-2">
<div class="h-8 w-8 rounded-full bg-stone-200 border-2 border-white overflow-hidden">
<img class="w-full h-full object-cover" data-alt="professional workspace setup with modern laptop and sleek design elements in bright light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8XRCIldx3lcQhICF3bhFRW1sg0SlSa5kO2NGYEeahCRWdLCUj9UGZhi79_uLUuv-tcmWcGzJITSeYRTPOeOrIgmJm1RfobpdzQZzVoAjUsQP3SHcrT12Sk42lpar0pJZOgVSSVScyeHjNgoFZSdiOCtIaiNDZlTqjfK890qnGJDqv3Rf9_Pj5Cjv1OgFZXXKd3hZWuUy7xdFBvW6h3Wr4xc28FTY_DXhilZlhnv03kg_VZMclyYp6p1CvpU4n_SkEz0tT428XdVg"/>
</div>
<div class="h-8 w-8 rounded-full bg-stone-200 border-2 border-white overflow-hidden">
<img class="w-full h-full object-cover" data-alt="abstract business growth chart glowing on a modern office screen at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT7O0cWEsWDdFekDtj32pW3ZcFBnpYJoOsaRnaK_2f5eRNUfej56Uw_StLMwCSXIfUre9txuoSPResgTsmHL_YEExJMMVuP6t-u12VAAuQpyEbeWcEfYhy-6v1dohUpwQt8ImRI0RY3ISt-nI3OhcjR--YJRFU_aReh21WUmPDfarZswtJ_Enm8bA1miBc-FIoeTUuvIeqSYveolwZirTj4I2H8NiU199EpRq5VZ3LV7rUMtbSGAeo9f6tEBKdScM48xDE7Pft6w4"/>
</div>
<div class="h-8 w-8 rounded-full bg-stone-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
                            +6
                        </div>
</div>
</div>
<!-- KPI 4: Key Insights -->
<div class="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-transparent hover:border-outline-variant/20 transition-all">
<div class="flex justify-between items-start mb-6">
<div class="p-2 bg-blue-100 rounded-lg text-blue-600">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">lightbulb</span>
</div>
<span class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">New</span>
</div>
<div class="space-y-1">
<h3 class="text-3xl font-black tracking-tighter text-on-surface">15</h3>
<p class="text-sm font-medium text-on-surface-variant uppercase tracking-wider">Key Insights</p>
</div>
<div class="mt-6 text-xs text-on-surface-variant flex items-center gap-1 italic">
<span class="material-symbols-outlined text-[14px]">auto_awesome</span>
                        AI-generated strategic triggers
                    </div>
</div>
</section>
<!-- Signature Solution Bridge Layout -->
<section class="relative pt-12">
<div class="bg-stone-900 rounded-3xl p-12 text-white overflow-hidden relative min-h-[320px]">
<div class="relative z-10 max-w-xl">
<h3 class="text-3xl font-bold mb-4">Strategic Expansion Program</h3>
<p class="text-stone-400 leading-relaxed mb-8">
                            Your current digital footprint is performing in the top 15% of your industry. Initiate the "Authority Builder" module to capitalize on existing momentum.
                        </p>
<button class="bg-secondary px-8 py-3 rounded-md font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all">
                            Initiate Strategy
                        </button>
</div>
<!-- Decorative element for "Bridge" -->
<div class="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary/20 to-transparent"></div>
<!-- The Overlapping "Solution Bridge" Card -->
<div class="hidden lg:block absolute -right-8 -bottom-10 w-96 bg-surface-container-highest p-8 rounded-2xl shadow-2xl text-on-surface transform rotate-2">
<div class="flex items-center gap-4 mb-6">
<div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
<span class="material-symbols-outlined">trending_up</span>
</div>
<div>
<p class="text-xs font-bold uppercase tracking-tighter text-primary">Next Milestone</p>
<p class="text-lg font-bold">2.5k Subscribers</p>
</div>
</div>
<div class="space-y-4">
<div class="flex justify-between text-xs font-bold">
<span>Progress</span>
<span>48%</span>
</div>
<div class="h-2 w-full bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-primary w-[48%]"></div>
</div>
<p class="text-[11px] text-on-surface-variant leading-tight">
                                Estimated completion based on current velocity: <strong>14 Days</strong>
</p>
</div>
</div>
</div>
</section>
<!-- Recent Strategic Activity -->
<section class="bg-surface-container-low rounded-3xl p-10">
<div class="flex items-center justify-between mb-8">
<div>
<h4 class="text-2xl font-bold tracking-tight">Recent Strategic Activity</h4>
<p class="text-on-surface-variant text-sm mt-1">Global audit log of system actions and marketing triggers.</p>
</div>
<button class="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
                        View Full Log
                        <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="text-xs font-black text-on-surface-variant uppercase tracking-widest">
<th class="pb-6 px-4">Entity</th>
<th class="pb-6 px-4">Category</th>
<th class="pb-6 px-4">Outcome</th>
<th class="pb-6 px-4">Timestamp</th>
<th class="pb-6 px-4 text-right">Action</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/10">
<tr class="group hover:bg-surface-container transition-colors">
<td class="py-6 px-4">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center font-bold text-primary">JD</div>
<div>
<p class="font-bold text-sm">John Doe Construction</p>
<p class="text-xs text-on-surface-variant">New Subscriber</p>
</div>
</div>
</td>
<td class="py-6 px-4">
<span class="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Lead Gen</span>
</td>
<td class="py-6 px-4">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-green-500"></span>
<span class="text-sm">Verified</span>
</div>
</td>
<td class="py-6 px-4 text-sm text-on-surface-variant font-mono">2 mins ago</td>
<td class="py-6 px-4 text-right">
<button class="p-2 hover:bg-surface-container-highest rounded-full transition-all">
<span class="material-symbols-outlined text-stone-400">more_horiz</span>
</button>
</td>
</tr>
<tr class="group hover:bg-surface-container transition-colors">
<td class="py-6 px-4">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-stone-900 rounded-lg flex items-center justify-center font-bold text-white">
<span class="material-symbols-outlined text-sm">description</span>
</div>
<div>
<p class="font-bold text-sm">Retail Growth 2024</p>
<p class="text-xs text-on-surface-variant">Case Study Published</p>
</div>
</div>
</td>
<td class="py-6 px-4">
<span class="text-xs font-bold bg-stone-200 text-stone-700 px-3 py-1 rounded-full">Content</span>
</td>
<td class="py-6 px-4">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-blue-500"></span>
<span class="text-sm">Live</span>
</div>
</td>
<td class="py-6 px-4 text-sm text-on-surface-variant font-mono">1 hour ago</td>
<td class="py-6 px-4 text-right">
<button class="p-2 hover:bg-surface-container-highest rounded-full transition-all">
<span class="material-symbols-outlined text-stone-400">more_horiz</span>
</button>
</td>
</tr>
<tr class="group hover:bg-surface-container transition-colors">
<td class="py-6 px-4">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center font-bold text-white">
<span class="material-symbols-outlined text-sm">priority_high</span>
</div>
<div>
<p class="font-bold text-sm">High-Value Inquiry</p>
<p class="text-xs text-on-surface-variant">Message Received</p>
</div>
</div>
</td>
<td class="py-6 px-4">
<span class="text-xs font-bold bg-red-100 text-red-700 px-3 py-1 rounded-full">Support</span>
</td>
<td class="py-6 px-4">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span class="text-sm font-bold text-secondary">Pending</span>
</div>
</td>
<td class="py-6 px-4 text-sm text-on-surface-variant font-mono">3 hours ago</td>
<td class="py-6 px-4 text-right">
<button class="p-2 hover:bg-surface-container-highest rounded-full transition-all">
<span class="material-symbols-outlined text-stone-400">more_horiz</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
<!-- Footer / Branding Base -->
<footer class="p-10 text-on-surface-variant/40 flex items-center justify-between border-t border-stone-100">
<p class="text-xs font-bold uppercase tracking-[0.2em]">© 2024 Gmax Digital strategic engine</p>
<div class="flex gap-8 text-xs font-bold uppercase tracking-widest">
<a class="hover:text-primary transition-colors" href="#">System Status</a>
<a class="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-primary transition-colors" href="#">Security Audit</a>
</div>
</footer>
</main>
</body></html>
