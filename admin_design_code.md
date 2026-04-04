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

#insights page

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
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
    .glass-header {
      background: rgba(255, 248, 248, 0.7);
      backdrop-filter: blur(12px);
    }
  </style>
</head>
<body class="bg-surface text-on-surface">
<!-- Side Navigation -->
<aside class="h-screen w-64 fixed left-0 top-0 bg-stone-900 flex flex-col py-8 z-50 shadow-2xl overflow-y-auto">
<div class="px-6 mb-10">
<h1 class="text-white font-black tracking-tight text-lg uppercase">Gmax Admin</h1>
<p class="text-stone-500 text-xs tracking-widest mt-1">Strategic Authority</p>
</div>
<nav class="flex-1 space-y-1">
<div class="text-stone-400 hover:text-white px-6 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined text-[20px]" data-icon="dashboard">dashboard</span>
<span class="font-sans text-sm tracking-wide">Dashboard</span>
</div>
<!-- Active Tab: Insights -->
<div class="bg-stone-800 text-white border-l-4 border-blue-500 px-6 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined text-[20px]" data-icon="analytics">analytics</span>
<span class="font-sans text-sm tracking-wide">Insights</span>
</div>
<div class="text-stone-400 hover:text-white px-6 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined text-[20px]" data-icon="inventory_2">inventory_2</span>
<span class="font-sans text-sm tracking-wide">Case Studies</span>
</div>
<div class="text-stone-400 hover:text-white px-6 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined text-[20px]" data-icon="chat_bubble">chat_bubble</span>
<span class="font-sans text-sm tracking-wide">Messages</span>
</div>
<div class="text-stone-400 hover:text-white px-6 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined text-[20px]" data-icon="group">group</span>
<span class="font-sans text-sm tracking-wide">Subscribers</span>
</div>
<div class="text-stone-400 hover:text-white px-6 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined text-[20px]" data-icon="settings">settings</span>
<span class="font-sans text-sm tracking-wide">Settings</span>
</div>
</nav>
<div class="mt-auto px-6 pt-4 space-y-4">
<button class="w-full py-3 bg-primary-container text-on-primary-container rounded-lg font-bold text-xs uppercase tracking-tighter hover:opacity-90 transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-sm" data-icon="add_circle">add_circle</span>
        New Case Study
      </button>
<div class="text-stone-400 hover:text-white py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200 border-t border-stone-800">
<span class="material-symbols-outlined text-[20px]" data-icon="logout">logout</span>
<span class="font-sans text-sm tracking-wide">Logout</span>
</div>
</div>
</aside>
<!-- Main Canvas -->
<main class="ml-64 min-h-screen">
<!-- Top Bar -->
<header class="w-full h-16 sticky top-0 z-40 glass-header flex items-center justify-between px-12 border-none">
<div class="flex items-center gap-6">
<h2 class="text-2xl font-black tracking-tighter text-on-background">Insights Engine</h2>
<div class="h-6 w-[1px] bg-outline-variant/30"></div>
<nav class="hidden lg:flex gap-8 items-center text-sm font-semibold tracking-tight">
<span class="text-primary cursor-pointer">Live Analytics</span>
<span class="text-stone-500 hover:text-primary transition-colors cursor-pointer">Historical Data</span>
<span class="text-stone-500 hover:text-primary transition-colors cursor-pointer">Reports</span>
</nav>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-stone-500 cursor-pointer p-2 hover:bg-surface-container rounded-full" data-icon="notifications">notifications</span>
<div class="flex items-center gap-3 p-1 pl-3 bg-surface-container-high rounded-full cursor-pointer">
<span class="text-xs font-bold text-on-surface">Admin User</span>
<img alt="User profile" class="w-8 h-8 rounded-full border border-white" data-alt="Close up professional portrait of a business executive in a dark suit with clean lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgMA_eVDdBA9tpexprMbEScRsVYrozNsJvUii71U0cjXLoqUgihJEUXU0jTKmBoHtmmWC8gM-xaOAyAOzPF47LFib5GzVyK40ACCNJkGKLzkLs_yJSlrh5QPPkpE11njBFvmb6mro13JH56rfNqdxm4JtooERc4MNNKr97Q19Asm4gUNzOH-d7LENxtF3j4oXZBEUetHuGe8qsKbHt53RCrbFsM13b6-5_ABSPr4XrEqarWnlV6X-GTVHO93EH7phwPiMZ9HkiVsg"/>
</div>
</div>
</header>
<!-- Page Content -->
<div class="px-12 py-10 max-w-7xl mx-auto">
<!-- Editorial Header Section -->
<section class="mb-12">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div class="space-y-2">
<span class="text-secondary font-bold text-[0.65rem] tracking-[0.2em] uppercase">Intelligence Portal</span>
<h1 class="text-5xl font-black tracking-tighter leading-none text-on-background">Strategic <br/> Authority <span class="text-primary">Insights.</span></h1>
<p class="text-on-surface-variant max-w-md mt-4 text-lg leading-relaxed">High-impact analytics decoded to bridge the gap between small business data and enterprise-level solutions.</p>
</div>
<!-- Filter/Sort Cluster -->
<div class="flex flex-wrap items-center gap-3">
<div class="bg-surface-container px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer border-b-2 border-primary">
<span class="text-xs font-bold tracking-widest uppercase">Category</span>
<span class="material-symbols-outlined text-sm" data-icon="expand_more">expand_more</span>
</div>
<div class="bg-surface-container px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer">
<span class="text-xs font-bold tracking-widest uppercase text-stone-500">Date</span>
<span class="material-symbols-outlined text-sm text-stone-500" data-icon="calendar_month">calendar_month</span>
</div>
<div class="bg-surface-container px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer">
<span class="text-xs font-bold tracking-widest uppercase text-stone-500">Metric</span>
<span class="material-symbols-outlined text-sm text-stone-500" data-icon="bar_chart">bar_chart</span>
</div>
<button class="bg-on-background text-white p-2 px-3 rounded-lg flex items-center gap-2">
<span class="material-symbols-outlined text-lg" data-icon="filter_list">filter_list</span>
</button>
</div>
</div>
</section>
<!-- Insights Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- Large Featured Card -->
<div class="md:col-span-2 bg-surface-container-low rounded-xl p-8 relative overflow-hidden group cursor-pointer">
<div class="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
<div class="relative z-10">
<div class="flex justify-between items-start mb-12">
<span class="bg-secondary text-white text-[10px] font-black uppercase px-2 py-1 tracking-widest">High Impact</span>
<span class="text-stone-400 text-sm font-medium">May 24, 2024</span>
</div>
<h3 class="text-4xl font-extrabold tracking-tight mb-4 group-hover:text-primary transition-colors">Positioning Drift Analysis</h3>
<p class="text-on-surface-variant text-lg leading-relaxed max-w-xl mb-12">Tracking the deviation of brand messaging against competitive benchmarks over the Q2 cycle. Identifying 14% authority erosion in local search sectors.</p>
<div class="grid grid-cols-3 gap-8 pt-8 border-t border-outline-variant/20">
<div>
<p class="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">Views</p>
<p class="text-2xl font-black">12.4K</p>
</div>
<div>
<p class="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">Shares</p>
<p class="text-2xl font-black">842</p>
</div>
<div>
<p class="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">Trust Score</p>
<div class="flex items-center gap-2">
<p class="text-2xl font-black text-primary">98%</p>
<span class="material-symbols-outlined text-primary text-xl" data-icon="verified" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
</div>
</div>
</div>
</div>
<!-- Metric Summary Card (Royal Blue) -->
<div class="bg-primary p-8 rounded-xl flex flex-col justify-between text-white group cursor-pointer">
<div>
<div class="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
<span class="material-symbols-outlined" data-icon="bolt">bolt</span>
</div>
<h4 class="text-2xl font-bold tracking-tight mb-2">Conversion Lift Strategy</h4>
<p class="text-white/70 text-sm">Real-time engagement optimization based on user heatmaps.</p>
</div>
<div class="pt-8">
<div class="flex justify-between items-end">
<div>
<p class="text-4xl font-black">+22.4%</p>
<p class="text-[10px] uppercase tracking-widest font-bold opacity-60">Avg. Lift</p>
</div>
<span class="material-symbols-outlined text-4xl opacity-20 group-hover:opacity-100 transition-opacity" data-icon="trending_up">trending_up</span>
</div>
</div>
</div>
<!-- Asymmetric Row -->
<!-- Card 3 -->
<div class="bg-surface-container-highest rounded-xl p-8 group cursor-pointer">
<div class="flex justify-between items-start mb-6">
<span class="text-stone-500 text-xs font-bold uppercase tracking-widest">Engagement Report</span>
<span class="text-stone-400 text-xs">May 21, 2024</span>
</div>
<h3 class="text-xl font-bold tracking-tight mb-3">SEO Semantic Cluster Evolution</h3>
<p class="text-on-surface-variant text-sm mb-8">Shift in long-tail keyword relevance within the digital transformation vertical.</p>
<div class="flex items-center gap-6">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-lg text-stone-400" data-icon="visibility">visibility</span>
<span class="text-xs font-black text-on-surface">3.2K</span>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-lg text-stone-400" data-icon="share">share</span>
<span class="text-xs font-black text-on-surface">120</span>
</div>
</div>
</div>
<!-- Card 4 (The Bridge Pattern) -->
<div class="bg-white rounded-xl p-8 shadow-sm group cursor-pointer border-t-4 border-secondary">
<div class="flex justify-between items-start mb-6">
<span class="text-secondary text-xs font-bold uppercase tracking-widest">Critical Alert</span>
<span class="text-stone-400 text-xs">May 19, 2024</span>
</div>
<h3 class="text-xl font-bold tracking-tight mb-3">Bounce Rate Anomaly</h3>
<p class="text-on-surface-variant text-sm mb-8">Unexpected 4% spike in mobile drop-offs across secondary service pages.</p>
<div class="flex items-center gap-6">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-lg text-stone-400" data-icon="visibility">visibility</span>
<span class="text-xs font-black text-on-surface">8.1K</span>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-lg text-stone-400" data-icon="thumb_up">thumb_up</span>
<span class="text-xs font-black text-on-surface">45</span>
</div>
</div>
</div>
<!-- Card 5 -->
<div class="bg-surface-container rounded-xl p-8 group cursor-pointer">
<div class="flex justify-between items-start mb-6">
<span class="text-stone-500 text-xs font-bold uppercase tracking-widest">Growth Metric</span>
<span class="text-stone-400 text-xs">May 18, 2024</span>
</div>
<h3 class="text-xl font-bold tracking-tight mb-3">Newsletter Retention Curve</h3>
<p class="text-on-surface-variant text-sm mb-8">Subscriber behavior analysis following the 'Strategic Pivot' campaign.</p>
<div class="flex items-center gap-6">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-lg text-stone-400" data-icon="visibility">visibility</span>
<span class="text-xs font-black text-on-surface">5.6K</span>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-lg text-stone-400" data-icon="share">share</span>
<span class="text-xs font-black text-on-surface">294</span>
</div>
</div>
</div>
</div>
<!-- Footer/Pagination Context -->
<footer class="mt-16 pt-12 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-8">
<div class="flex items-center gap-4">
<button class="bg-surface-container px-6 py-2 rounded text-xs font-bold uppercase tracking-widest text-on-surface hover:bg-surface-container-highest transition-colors">Previous Page</button>
<div class="flex gap-2">
<span class="w-8 h-8 flex items-center justify-center bg-primary text-white font-bold rounded">1</span>
<span class="w-8 h-8 flex items-center justify-center text-stone-500 font-bold hover:bg-surface-container rounded cursor-pointer transition-colors">2</span>
<span class="w-8 h-8 flex items-center justify-center text-stone-500 font-bold hover:bg-surface-container rounded cursor-pointer transition-colors">3</span>
</div>
<button class="bg-on-background text-white px-6 py-2 rounded text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">Next Page</button>
</div>
<div class="flex items-center gap-10">
<div class="text-right">
<p class="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Data Refreshed</p>
<p class="text-xs font-bold">14 minutes ago</p>
</div>
<div class="text-right">
<p class="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">System Status</p>
<div class="flex items-center justify-end gap-1 text-xs font-bold">
<div class="w-2 h-2 rounded-full bg-green-500"></div> Operational
            </div>
</div>
</div>
</footer>
</div>
</main>
<!-- FAB: Suppressed on Details but active on Dashboard/Analytics as per mandate -->
<div class="fixed bottom-8 right-8 z-50">
<button class="w-14 h-14 bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
<span class="material-symbols-outlined text-3xl" data-icon="insights">insights</span>
</button>
</div>
</body></html>

<!-- messages -->

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Gmax Admin - Messages</title>
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
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
    </style>
</head>
<body class="bg-background text-on-surface antialiased">
<!-- Sidebar Navigation Shell -->
<aside class="bg-stone-900 h-screen w-64 fixed left-0 top-0 border-r border-stone-800 shadow-2xl flex flex-col py-8 z-50">
<div class="px-6 mb-10">
<h1 class="text-white font-black tracking-tight text-lg uppercase">Gmax Admin</h1>
<p class="text-stone-500 text-[10px] tracking-widest uppercase mt-1">Strategic Authority</p>
</div>
<nav class="flex-1 space-y-1">
<a class="text-stone-400 hover:text-white px-6 py-3 flex items-center gap-3 group transition-all duration-200 hover:bg-stone-800/50" href="#">
<span class="material-symbols-outlined text-xl">dashboard</span>
<span class="font-sans text-sm tracking-wide">Dashboard</span>
</a>
<a class="text-stone-400 hover:text-white px-6 py-3 flex items-center gap-3 group transition-all duration-200 hover:bg-stone-800/50" href="#">
<span class="material-symbols-outlined text-xl">analytics</span>
<span class="font-sans text-sm tracking-wide">Insights</span>
</a>
<a class="text-stone-400 hover:text-white px-6 py-3 flex items-center gap-3 group transition-all duration-200 hover:bg-stone-800/50" href="#">
<span class="material-symbols-outlined text-xl">inventory_2</span>
<span class="font-sans text-sm tracking-wide">Case Studies</span>
</a>
<!-- ACTIVE TAB: Messages -->
<a class="bg-stone-800 text-white border-l-4 border-blue-500 px-6 py-3 flex items-center gap-3 group transition-all duration-200" href="#">
<span class="material-symbols-outlined text-xl">chat_bubble</span>
<span class="font-sans text-sm tracking-wide font-semibold">Messages</span>
</a>
<a class="text-stone-400 hover:text-white px-6 py-3 flex items-center gap-3 group transition-all duration-200 hover:bg-stone-800/50" href="#">
<span class="material-symbols-outlined text-xl">group</span>
<span class="font-sans text-sm tracking-wide">Subscribers</span>
</a>
<a class="text-stone-400 hover:text-white px-6 py-3 flex items-center gap-3 group transition-all duration-200 hover:bg-stone-800/50" href="#">
<span class="material-symbols-outlined text-xl">settings</span>
<span class="font-sans text-sm tracking-wide">Settings</span>
</a>
</nav>
<div class="px-6 mt-auto">
<button class="w-full bg-primary py-3 rounded-lg text-white font-bold text-xs uppercase tracking-widest shadow-lg active:scale-95 transition-all">
                New Case Study
            </button>
<div class="mt-8 pt-6 border-t border-stone-800">
<a class="text-stone-400 hover:text-white flex items-center gap-3 transition-all" href="#">
<span class="material-symbols-outlined">logout</span>
<span class="font-sans text-sm tracking-wide">Logout</span>
</a>
</div>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="ml-64 min-h-screen">
<!-- Top App Bar -->
<header class="bg-white/70 backdrop-blur-md sticky top-0 z-40 w-full h-16 flex items-center justify-between px-8 shadow-sm">
<div class="flex items-center gap-4">
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">search</span>
<input class="pl-10 pr-4 py-1.5 bg-surface-container-low border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 w-64" placeholder="Search inquiries..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<button class="relative text-stone-500 hover:text-primary transition-colors active:scale-95">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full border-2 border-white"></span>
</button>
<div class="flex items-center gap-3 cursor-pointer group">
<div class="text-right">
<p class="text-xs font-bold text-on-surface">Alex Rivera</p>
<p class="text-[10px] text-stone-500 font-medium uppercase tracking-tight">Admin Principal</p>
</div>
<img alt="User profile" class="w-10 h-10 rounded-full border-2 border-white shadow-sm group-hover:border-primary/20 transition-all" data-alt="Professional headshot of a Hispanic male executive in a neutral studio setting with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_WXYuNfgTBYmO6nsKPaHIjXjzoyUFAfcKY2vAfpCBnPqypvz6rUqzkZav_lqHehpDMfzAkWEdm8S5AOf0I_PfqZpCwP6Y3gYy6MdNFe8qO2jJt6OOPsx4iHnT43Btg0oEDnggGTHE_tDRBD61t5aAR4ELiuYe4VaOeCYYdwhY1L9VsRkZdAt469axaLgLasZToSE0Y9UvAxnpUoG4oQwv4ZScNXiu5UT1_7VvJZ1qelmU9ls_6eJSe1RZ2fF9KhUNPxljj4TFcpk"/>
</div>
</div>
</header>
<section class="p-10 max-w-7xl mx-auto">
<!-- Breadcrumbs / Header -->
<div class="mb-12">
<span class="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-2 block">Communication Hub</span>
<h2 class="text-4xl font-black text-on-surface tracking-tighter leading-none mb-4">Inbound Messaging</h2>
<p class="text-on-surface-variant max-w-2xl font-medium opacity-80">Manage prospect inquiries and high-value client communication from the Gmax Digital network.</p>
</div>
<!-- Dashboard Message Grid / Functional Layout -->
<div class="grid grid-cols-12 gap-8 items-start">
<!-- Filters Panel (Editorial Look) -->
<div class="col-span-3 space-y-8">
<div>
<h4 class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-6 border-b border-outline-variant/30 pb-2">Filter Inbox</h4>
<div class="space-y-3">
<button class="w-full text-left px-4 py-2 bg-surface-container-highest rounded-lg flex justify-between items-center group">
<span class="text-sm font-bold text-primary">All Messages</span>
<span class="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">24</span>
</button>
<button class="w-full text-left px-4 py-2 hover:bg-surface-container-low rounded-lg flex justify-between items-center transition-colors">
<span class="text-sm font-semibold text-on-surface-variant">Unread</span>
<span class="text-secondary font-black text-[10px]">12</span>
</button>
<button class="w-full text-left px-4 py-2 hover:bg-surface-container-low rounded-lg flex justify-between items-center transition-colors">
<span class="text-sm font-semibold text-on-surface-variant">Flagged</span>
<span class="text-stone-400 font-bold text-[10px]">3</span>
</button>
</div>
</div>
<div class="bg-on-background p-6 rounded-xl relative overflow-hidden shadow-xl">
<div class="relative z-10">
<h5 class="text-white font-bold text-lg leading-tight mb-2">Automate Reponses</h5>
<p class="text-stone-400 text-xs mb-4">Enable AI-driven initial screening for new prospects.</p>
<button class="text-[10px] bg-secondary px-4 py-2 rounded text-white font-black uppercase tracking-widest hover:brightness-110 transition-all">Configure AI</button>
</div>
<div class="absolute -right-4 -bottom-4 opacity-10">
<span class="material-symbols-outlined text-8xl text-white">auto_awesome</span>
</div>
</div>
</div>
<!-- Messages List -->
<div class="col-span-9 space-y-4">
<!-- Message Item: Unread -->
<div class="group bg-surface-container-lowest p-6 flex gap-6 items-start transition-all hover:translate-x-1 duration-300 relative border-l-4 border-secondary">
<img alt="Sender" class="w-14 h-14 rounded-xl object-cover shadow-sm grayscale hover:grayscale-0 transition-all" data-alt="Close up of a businessman in a gray suit looking confident, soft office background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT1jK-WOxhncgbv59KlplCCRj6aAc60iR6uVPVvJKsFLwjzkpCGaeBcuPp8EjCUZu66ANnhsif3gsQ5Y5KEM5qsfjyFylneOKeGCVE54kE5G68Olnc7O4ZIryG04rbSWU92JncE-wCnylGWwZlbTdU3cS79eLNZh9Vj6yc9QQbi7qqlg5UAe6gBd0IILhOx81MsLy6EihZUxLVuKlHPhvNrqbGrVHd9g2pGkFQpUQn7Uo_CaWUVWeLYFZlkaS_Y4JrzB4jhaBDMx4"/>
<div class="flex-1">
<div class="flex justify-between items-start mb-1">
<div>
<h3 class="font-bold text-on-surface">Julian Blackwood</h3>
<p class="text-[10px] font-bold text-primary-container tracking-widest uppercase">Apex Logistics Inc.</p>
</div>
<div class="text-right">
<span class="text-[10px] font-bold text-stone-400 uppercase tracking-tighter">OCT 24, 2023</span>
<div class="flex gap-2 mt-2">
<span class="bg-secondary/10 text-secondary text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Unread</span>
</div>
</div>
</div>
<p class="text-sm text-on-surface-variant line-clamp-1 mt-2 opacity-80">"We are looking to overhaul our digital presence before the Q1 launch. Your case studies on freight optimization caught our..."</p>
</div>
<div class="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="p-2 hover:bg-surface-container rounded-full text-stone-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-xl">reply</span>
</button>
<button class="p-2 hover:bg-surface-container rounded-full text-stone-400 hover:text-secondary transition-colors">
<span class="material-symbols-outlined text-xl">flag</span>
</button>
</div>
</div>
<!-- Message Item: Responded -->
<div class="group bg-surface-container-low/50 p-6 flex gap-6 items-start transition-all hover:translate-x-1 duration-300 relative">
<img alt="Sender" class="w-14 h-14 rounded-xl object-cover shadow-sm" data-alt="Smiling female entrepreneur in a creative office space, warm natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoKK1xf4gWv953HYtD6OPgb8FQr7OcFyLEhU1WL6mLjrS0tKmR1_cbRzugM9THutcEg1sD2cbIg1zN1yTK8Z-8WYb0vP3eVZ0nVlWjyEWC-lnf8z--n3PxTLBsj1qApJWeirk8bwkJ0hYwfn9-h-zsONX0UdEJJKkWtH-CqZY4axI9dDo7OF9xsMj8NrQolLsxV7NXY-DowN6L07RJ5i6sTJg3FO2ZBOQZkYnoU5lJFC_fbkf2WZ1RcgL3CecG3r7V4Smsffv4-SY"/>
<div class="flex-1">
<div class="flex justify-between items-start mb-1">
<div>
<h3 class="font-bold text-on-surface">Sarah Chen</h3>
<p class="text-[10px] font-bold text-primary-container tracking-widest uppercase">Velvet &amp; Vine Boutique</p>
</div>
<div class="text-right">
<span class="text-[10px] font-bold text-stone-400 uppercase tracking-tighter">OCT 22, 2023</span>
<div class="flex gap-2 mt-2 justify-end">
<span class="bg-primary/10 text-primary text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Responded</span>
</div>
</div>
</div>
<p class="text-sm text-stone-500 line-clamp-1 mt-2">"Thanks for the proposal. Our board has reviewed the strategy and we are ready to move forward with the professional package..."</p>
</div>
<div class="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="p-2 hover:bg-surface-container rounded-full text-stone-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-xl">open_in_new</span>
</button>
<button class="p-2 hover:bg-surface-container rounded-full text-stone-400 hover:text-secondary transition-colors">
<span class="material-symbols-outlined text-xl">delete</span>
</button>
</div>
</div>
<!-- Message Item: Flagged/Urgent -->
<div class="group bg-surface-container-lowest p-6 flex gap-6 items-start transition-all hover:translate-x-1 duration-300 relative shadow-sm border-l-4 border-primary">
<div class="w-14 h-14 rounded-xl bg-primary-container flex items-center justify-center text-white font-bold text-xl">
                            MT
                        </div>
<div class="flex-1">
<div class="flex justify-between items-start mb-1">
<div>
<h3 class="font-bold text-on-surface">Marcus Thorne</h3>
<p class="text-[10px] font-bold text-primary-container tracking-widest uppercase">Thorne Financial Group</p>
</div>
<div class="text-right">
<span class="text-[10px] font-bold text-stone-400 uppercase tracking-tighter">OCT 21, 2023</span>
<div class="flex gap-2 mt-2 justify-end">
<span class="bg-on-surface text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Flagged</span>
<span class="bg-secondary/10 text-secondary text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Unread</span>
</div>
</div>
</div>
<p class="text-sm text-on-surface-variant line-clamp-1 mt-2 opacity-80 font-medium">"URGENT: Regarding the media spend audit. We found a discrepancy in the reporting metrics from last week. Please call..."</p>
</div>
<div class="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="p-2 hover:bg-surface-container rounded-full text-primary transition-colors">
<span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">flag</span>
</button>
<button class="p-2 hover:bg-surface-container rounded-full text-stone-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-xl">reply</span>
</button>
</div>
</div>
<!-- Message Item: Standard -->
<div class="group bg-surface-container-lowest p-6 flex gap-6 items-start transition-all hover:translate-x-1 duration-300 relative">
<img alt="Sender" class="w-14 h-14 rounded-xl object-cover shadow-sm grayscale opacity-70" data-alt="Professional woman in a navy blazer standing in a bright modern lobby" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeJKzsPHg0h3O5uNg-1MXOllMtAlPYviJFx4rSETISxa8pcrXX4Ypjgvfi947YQZZenPJqXeLX0qccDVLyO7e_EJ6yxlzdGybEu4di9_K-fkVe-fbc1fl2Nzh6Ew7kHzdo_TJ16ntTN3Z7MSklv5KQ4LZza0jwCX7wk9rWO-1Nbptk3rK-LooiHWXrABMGrYuRaGQZQShrN-X9LLptS2HrPJ8HHYY4yMb8_lKOzVfHXN_jRBKZ7Yl74-Efr0dYChxQSqaS6iSnzA4"/>
<div class="flex-1">
<div class="flex justify-between items-start mb-1">
<div>
<h3 class="font-bold text-on-surface">Elena Rodriguez</h3>
<p class="text-[10px] font-bold text-primary-container tracking-widest uppercase">SolarPath Energy</p>
</div>
<div class="text-right">
<span class="text-[10px] font-bold text-stone-400 uppercase tracking-tighter">OCT 18, 2023</span>
</div>
</div>
<p class="text-sm text-stone-500 line-clamp-1 mt-2">"Following up on our conversation at the expo. I'd like to schedule a deep dive session for our marketing team next month..."</p>
</div>
<div class="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="p-2 hover:bg-surface-container rounded-full text-stone-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-xl">reply</span>
</button>
<button class="p-2 hover:bg-surface-container rounded-full text-stone-400 hover:text-secondary transition-colors">
<span class="material-symbols-outlined text-xl">archive</span>
</button>
</div>
</div>
</div>
</div>
<!-- Asymmetric Pagination / Solution Bridge Style -->
<div class="mt-16 flex items-center justify-between border-t border-outline-variant/20 pt-8">
<div class="text-xs text-stone-500 font-medium">
                    Showing <span class="font-bold text-on-surface">1 - 10</span> of 24 strategic inquiries
                </div>
<div class="flex gap-2">
<button class="px-4 py-2 text-xs font-bold bg-surface-container text-on-surface-variant rounded-lg hover:bg-primary hover:text-white transition-all active:scale-95">Previous</button>
<button class="px-4 py-2 text-xs font-bold bg-primary text-white rounded-lg shadow-lg hover:shadow-primary/20 transition-all active:scale-95">Next Solution</button>
</div>
</div>
</section>
<!-- Floating Quick Action - Contextual -->
<button class="fixed bottom-10 right-10 w-16 h-16 bg-on-background text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all group z-50">
<span class="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform">add</span>
</button>
</main>
</body></html>

<!-- subscribers -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Gmax Admin - Subscribers</title>
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
<body class="bg-background text-on-background min-h-screen flex">
<!-- SideNavBar Anchor -->
<aside class="h-screen w-64 fixed left-0 top-0 bg-stone-900 flex flex-col py-8 shadow-2xl border-r border-stone-800 z-50">
<div class="px-8 mb-12">
<h1 class="text-white font-black tracking-tight text-lg uppercase">Gmax Admin</h1>
<p class="text-stone-500 text-xs tracking-widest uppercase mt-1">Strategic Authority</p>
</div>
<nav class="flex-1 space-y-1">
<div class="text-stone-400 hover:text-white px-8 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-sans text-sm tracking-wide">Dashboard</span>
</div>
<div class="text-stone-400 hover:text-white px-8 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
<span class="font-sans text-sm tracking-wide">Insights</span>
</div>
<div class="text-stone-400 hover:text-white px-8 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span class="font-sans text-sm tracking-wide">Case Studies</span>
</div>
<div class="text-stone-400 hover:text-white px-8 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
<span class="font-sans text-sm tracking-wide">Messages</span>
</div>
<!-- Active State Logic: Subscribers Page -->
<div class="bg-stone-800 text-white border-l-4 border-blue-500 px-8 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined" data-icon="group">group</span>
<span class="font-sans text-sm tracking-wide">Subscribers</span>
</div>
<div class="text-stone-400 hover:text-white px-8 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-sans text-sm tracking-wide">Settings</span>
</div>
</nav>
<div class="px-8 mt-auto pt-8 border-t border-stone-800">
<button class="w-full bg-primary-container text-white py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary transition-colors active:scale-95">
<span class="material-symbols-outlined text-sm" data-icon="add">add</span>
                New Case Study
            </button>
<div class="mt-6 text-stone-400 hover:text-white py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined" data-icon="logout">logout</span>
<span class="font-sans text-sm tracking-wide">Logout</span>
</div>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="ml-64 flex-1 flex flex-col">
<!-- TopAppBar Anchor -->
<header class="w-full h-16 sticky top-0 z-40 bg-white/70 backdrop-blur-md flex items-center justify-between px-8 border-b border-stone-100 shadow-sm">
<div class="flex items-center gap-4 flex-1">
<div class="relative w-full max-w-md">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-lg">search</span>
<input class="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 text-on-surface" placeholder="Search subscribers..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-2 text-stone-500 hover:text-blue-600 cursor-pointer transition-colors active:scale-95">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</div>
<div class="flex items-center gap-3 pl-6 border-l border-stone-100">
<div class="text-right">
<p class="text-xs font-bold text-on-surface">Admin User</p>
<p class="text-[10px] text-stone-500 uppercase tracking-tighter">System Lead</p>
</div>
<div class="w-10 h-10 rounded-full bg-stone-200 overflow-hidden">
<img alt="User profile" data-alt="professional headshot of a middle-aged male executive in a grey suit with a confident expression and soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7oUsrYe_qypclRk3FmHaurr3cpAk79mNDM8pYKiXkpMI9PoxW1K6uU-UK-tCV78B3nr7CVkNV9zV3MQLYsF7jjgMqVCJrmnl-UFJXnCr1P8myefTbJvSASbSWtXlJc7njkgU1O5-e3DFEwBNdwT3JABQO9Hl98RhDqgKHUTYMvjhXWNxzOp3Q3Cr7YAdlwQyHDDhRcHwNSD_Byx_UFh7Dfm-jjKvzf16hATfSRr0nXAob_yG7T8GBqOz47CbxEWuxRKJucn8RVZM"/>
</div>
</div>
</div>
</header>
<!-- Page Header & Stats -->
<section class="p-8">
<div class="flex justify-between items-end mb-8">
<div>
<span class="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-2 block">Growth Metrics</span>
<h2 class="text-4xl font-black text-on-surface tracking-tighter">Subscriber Base</h2>
</div>
<button class="bg-surface-container-highest text-on-surface px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-outline-variant/20 transition-all active:scale-95">
<span class="material-symbols-outlined text-lg" data-icon="download">download</span>
                    Export CSV
                </button>
</div>
<!-- Dashboard Stats Grid -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
<div class="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-transparent hover:border-primary/10 transition-all">
<p class="text-stone-500 text-xs font-bold uppercase tracking-widest mb-1">Total Audience</p>
<h3 class="text-3xl font-black text-on-surface">12,482</h3>
<div class="mt-2 flex items-center gap-1 text-emerald-600 text-xs font-bold">
<span class="material-symbols-outlined text-sm">trending_up</span>
                        +14% this month
                    </div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-transparent hover:border-primary/10 transition-all">
<p class="text-stone-500 text-xs font-bold uppercase tracking-widest mb-1">Active Rate</p>
<h3 class="text-3xl font-black text-on-surface">94.2%</h3>
<div class="mt-2 flex items-center gap-1 text-emerald-600 text-xs font-bold">
<span class="material-symbols-outlined text-sm">check_circle</span>
                        Industry Leading
                    </div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-transparent hover:border-primary/10 transition-all">
<p class="text-stone-500 text-xs font-bold uppercase tracking-widest mb-1">Engagement</p>
<h3 class="text-3xl font-black text-on-surface">68.5</h3>
<div class="mt-2 flex items-center gap-1 text-blue-600 text-xs font-bold">
<span class="material-symbols-outlined text-sm">bolt</span>
                        Avg. Score
                    </div>
</div>
<div class="bg-primary p-6 rounded-xl shadow-lg border border-transparent">
<p class="text-primary-fixed-dim text-xs font-bold uppercase tracking-widest mb-1">New Today</p>
<h3 class="text-3xl font-black text-white">+142</h3>
<div class="mt-2 flex items-center gap-1 text-primary-fixed text-xs font-bold">
<span class="material-symbols-outlined text-sm">star</span>
                        Peak performance
                    </div>
</div>
</div>
<!-- Table Section (Architectural Layering) -->
<div class="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border border-surface-container">
<div class="px-8 py-6 border-b border-surface-container flex items-center justify-between">
<div class="flex items-center gap-4">
<button class="text-sm font-bold text-primary border-b-2 border-primary pb-1">All Subscribers</button>
<button class="text-sm font-medium text-stone-400 hover:text-on-surface transition-colors pb-1">Active</button>
<button class="text-sm font-medium text-stone-400 hover:text-on-surface transition-colors pb-1">Unsubscribed</button>
</div>
<div class="flex items-center gap-2">
<span class="text-xs text-stone-400 font-medium">Sort by:</span>
<select class="text-xs font-bold bg-transparent border-none focus:ring-0 cursor-pointer">
<option>Latest Joined</option>
<option>Engagement Score</option>
<option>Alpha A-Z</option>
</select>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container-low/50">
<th class="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500">Email Address</th>
<th class="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500">Subscription Date</th>
<th class="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500">Status</th>
<th class="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500">Engagement Score</th>
<th class="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500 text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-surface-container">
<!-- Row 1 -->
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="px-8 py-5">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded bg-secondary-fixed text-secondary font-bold text-xs flex items-center justify-center">JD</div>
<div>
<p class="text-sm font-bold text-on-surface">j.dawson@techflow.io</p>
<p class="text-[10px] text-stone-400">ID: #88219</p>
</div>
</div>
</td>
<td class="px-8 py-5 text-sm font-medium text-stone-600">Oct 24, 2023</td>
<td class="px-8 py-5">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-700 uppercase tracking-tighter">Active</span>
</td>
<td class="px-8 py-5">
<div class="flex items-center gap-3">
<div class="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-primary-container w-[88%]"></div>
</div>
<span class="text-xs font-bold text-on-surface">88</span>
</div>
</td>
<td class="px-8 py-5 text-right">
<button class="p-1 hover:bg-white rounded transition-colors text-stone-400 hover:text-primary">
<span class="material-symbols-outlined text-lg" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="px-8 py-5">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded bg-primary-fixed text-primary font-bold text-xs flex items-center justify-center">MK</div>
<div>
<p class="text-sm font-bold text-on-surface">marcus.k@solarsystems.com</p>
<p class="text-[10px] text-stone-400">ID: #88215</p>
</div>
</div>
</td>
<td class="px-8 py-5 text-sm font-medium text-stone-600">Oct 22, 2023</td>
<td class="px-8 py-5">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-700 uppercase tracking-tighter">Active</span>
</td>
<td class="px-8 py-5">
<div class="flex items-center gap-3">
<div class="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-primary-container w-[72%]"></div>
</div>
<span class="text-xs font-bold text-on-surface">72</span>
</div>
</td>
<td class="px-8 py-5 text-right">
<button class="p-1 hover:bg-white rounded transition-colors text-stone-400 hover:text-primary">
<span class="material-symbols-outlined text-lg" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="px-8 py-5">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded bg-surface-container-highest text-tertiary font-bold text-xs flex items-center justify-center">SR</div>
<div>
<p class="text-sm font-bold text-on-surface">sarah.reed@freelance.co</p>
<p class="text-[10px] text-stone-400">ID: #88190</p>
</div>
</div>
</td>
<td class="px-8 py-5 text-sm font-medium text-stone-600">Oct 19, 2023</td>
<td class="px-8 py-5">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black bg-stone-100 text-stone-500 uppercase tracking-tighter">Unsubscribed</span>
</td>
<td class="px-8 py-5">
<div class="flex items-center gap-3">
<div class="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-stone-300 w-[12%]"></div>
</div>
<span class="text-xs font-bold text-stone-400">12</span>
</div>
</td>
<td class="px-8 py-5 text-right">
<button class="p-1 hover:bg-white rounded transition-colors text-stone-400 hover:text-primary">
<span class="material-symbols-outlined text-lg" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="px-8 py-5">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded bg-secondary-container text-white font-bold text-xs flex items-center justify-center">LA</div>
<div>
<p class="text-sm font-bold text-on-surface">linda.anderson@globalcorp.net</p>
<p class="text-[10px] text-stone-400">ID: #88152</p>
</div>
</div>
</td>
<td class="px-8 py-5 text-sm font-medium text-stone-600">Oct 15, 2023</td>
<td class="px-8 py-5">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-700 uppercase tracking-tighter">Active</span>
</td>
<td class="px-8 py-5">
<div class="flex items-center gap-3">
<div class="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-secondary w-[95%]"></div>
</div>
<span class="text-xs font-bold text-on-surface">95</span>
</div>
</td>
<td class="px-8 py-5 text-right">
<button class="p-1 hover:bg-white rounded transition-colors text-stone-400 hover:text-primary">
<span class="material-symbols-outlined text-lg" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div class="px-8 py-6 bg-surface-container-low/30 border-t border-surface-container flex items-center justify-between">
<p class="text-xs text-stone-500 font-medium">Showing 1 to 4 of 12,482 subscribers</p>
<div class="flex items-center gap-2">
<button class="w-8 h-8 rounded border border-surface-container flex items-center justify-center text-stone-400 hover:bg-white hover:text-primary transition-all">
<span class="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button class="w-8 h-8 rounded bg-primary text-white font-bold text-xs">1</button>
<button class="w-8 h-8 rounded border border-surface-container flex items-center justify-center text-stone-600 font-bold text-xs hover:bg-white">2</button>
<button class="w-8 h-8 rounded border border-surface-container flex items-center justify-center text-stone-600 font-bold text-xs hover:bg-white">3</button>
<span class="text-stone-400 px-1">...</span>
<button class="w-8 h-8 rounded border border-surface-container flex items-center justify-center text-stone-600 font-bold text-xs hover:bg-white">312</button>
<button class="w-8 h-8 rounded border border-surface-container flex items-center justify-center text-stone-400 hover:bg-white hover:text-primary transition-all">
<span class="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</section>
<!-- Signature Solution Bridge Component -->
<section class="mt-auto px-8 py-12 relative overflow-hidden">
<div class="absolute inset-0 bg-on-background -z-10 translate-y-24"></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-surface-container-highest p-12 rounded-2xl shadow-2xl relative z-10 border border-white/20 backdrop-blur-sm">
<div>
<h4 class="text-2xl font-black text-on-surface mb-4 tracking-tight">Need granular insights?</h4>
<p class="text-on-surface-variant text-sm leading-relaxed mb-6">Connect your subscriber data directly to Gmax Analytics to unlock behavioral patterns and conversion triggers.</p>
<button class="bg-primary text-white font-bold px-8 py-3 rounded-lg text-sm hover:shadow-lg transition-all active:scale-95">Open Advanced Analytics</button>
</div>
<div class="hidden md:block">
<div class="bg-white/50 p-6 rounded-xl border border-white/40">
<div class="flex items-center justify-between mb-4">
<span class="text-[10px] font-black uppercase text-stone-500">Integration Status</span>
<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
<div class="space-y-3">
<div class="h-2 w-full bg-stone-200 rounded-full"></div>
<div class="h-2 w-3/4 bg-stone-200 rounded-full"></div>
<div class="h-2 w-1/2 bg-stone-200 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>
</main>
</body></html>

<!-- case studies -->

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Case Studies | Gmax Admin</title>
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
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
<!-- SideNavBar (Authority: JSON) -->
<aside class="h-screen w-64 fixed left-0 top-0 bg-stone-900 dark:bg-stone-950 border-r border-stone-800 shadow-2xl flex flex-col h-full py-8 z-50">
<div class="px-6 mb-10">
<h1 class="text-white font-black tracking-tight text-lg uppercase">Gmax Admin</h1>
<p class="text-stone-500 text-xs tracking-widest mt-1">Strategic Authority</p>
</div>
<nav class="flex-1 space-y-1">
<div class="text-stone-400 hover:text-white px-4 py-3 flex items-center gap-3 group cursor-pointer hover:bg-stone-800/50 transition-all duration-200">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-sans text-sm tracking-wide">Dashboard</span>
</div>
<div class="text-stone-400 hover:text-white px-4 py-3 flex items-center gap-3 group cursor-pointer hover:bg-stone-800/50 transition-all duration-200">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
<span class="font-sans text-sm tracking-wide">Insights</span>
</div>
<!-- Active State Logic: Case Studies -->
<div class="bg-stone-800 text-white border-l-4 border-blue-500 px-4 py-3 flex items-center gap-3 group cursor-pointer transition-all duration-200">
<span class="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span class="font-sans text-sm tracking-wide">Case Studies</span>
</div>
<div class="text-stone-400 hover:text-white px-4 py-3 flex items-center gap-3 group cursor-pointer hover:bg-stone-800/50 transition-all duration-200">
<span class="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
<span class="font-sans text-sm tracking-wide">Messages</span>
</div>
<div class="text-stone-400 hover:text-white px-4 py-3 flex items-center gap-3 group cursor-pointer hover:bg-stone-800/50 transition-all duration-200">
<span class="material-symbols-outlined" data-icon="group">group</span>
<span class="font-sans text-sm tracking-wide">Subscribers</span>
</div>
<div class="text-stone-400 hover:text-white px-4 py-3 flex items-center gap-3 group cursor-pointer hover:bg-stone-800/50 transition-all duration-200">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-sans text-sm tracking-wide">Settings</span>
</div>
</nav>
<div class="mt-auto px-6 space-y-4">
<button class="w-full py-3 px-4 bg-primary-container text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary transition-colors cursor-pointer active:scale-95">
<span class="material-symbols-outlined text-sm" data-icon="add">add</span>
<span class="text-sm">New Case Study</span>
</button>
<div class="pt-6 border-t border-stone-800">
<div class="text-stone-400 hover:text-white px-4 py-3 flex items-center gap-3 group cursor-pointer hover:bg-stone-800/50 transition-all duration-200">
<span class="material-symbols-outlined" data-icon="logout">logout</span>
<span class="font-sans text-sm tracking-wide">Logout</span>
</div>
</div>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="ml-64 min-h-screen">
<!-- TopNavBar (Authority: JSON) -->
<header class="w-full h-16 sticky top-0 z-40 bg-white/70 dark:bg-stone-950/70 backdrop-blur-md flex items-center justify-between px-8 border-b border-stone-100 dark:border-stone-800 shadow-sm dark:shadow-none">
<div class="flex items-center gap-4 flex-1">
<div class="relative w-full max-w-md">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm" data-icon="search">search</span>
<input class="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary-container/20 placeholder:text-stone-400 outline-none" placeholder="Search case studies..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-stone-500 cursor-pointer hover:text-blue-600 transition-colors" data-icon="notifications">notifications</span>
<div class="h-8 w-8 rounded-full overflow-hidden border border-stone-200 cursor-pointer active:scale-95 transition-all">
<img alt="User profile" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAYbESVBeKIagJOCMBX_Reo4njARzOnx3TwgRjn95vz0pRxYV--ZuLfuy4iwp2Q6fOjpiL57-ComImhkHvTHfaK0A100xWNocBfX_GBZARm4WzE_JlGrVCltxBySzexTywnAxKeLQDpf1eFlQtjJ5-y8DHutuiE4OAV7ZyoCZNfQIGiMoThjzaH4M4HYLm8zfwi4MpeVX3WSRHCXBe3y7mOsxdvMDW1LQ3NLQ3iUyKAgJlygfHfOGfWYLd-gOF5stHK8TZH4SPMCM"/>
</div>
</div>
</div>
</header>
<div class="p-12 space-y-10">
<!-- Page Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div class="space-y-2">
<span class="text-[0.75rem] font-bold tracking-[0.05em] uppercase text-primary">Strategic Repository</span>
<h2 class="text-4xl font-bold tracking-tight text-on-surface">Case Studies</h2>
<p class="text-stone-500 max-w-xl body-lg">Review and manage high-impact solutions delivered to our global partners. Data-driven evidence of digital growth.</p>
</div>
<!-- Filters (Editorial Authority Style) -->
<div class="flex items-center gap-3">
<div class="flex bg-surface-container rounded-lg p-1">
<button class="px-4 py-1.5 text-xs font-semibold bg-white text-on-surface rounded shadow-sm">All</button>
<button class="px-4 py-1.5 text-xs font-semibold text-stone-500 hover:text-on-surface">SaaS</button>
<button class="px-4 py-1.5 text-xs font-semibold text-stone-500 hover:text-on-surface">Founder</button>
<button class="px-4 py-1.5 text-xs font-semibold text-stone-500 hover:text-on-surface">Startup</button>
</div>
<button class="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant/15 text-xs font-bold rounded-lg hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="calendar_today">calendar_today</span>
                        Date Range
                    </button>
</div>
</div>
<!-- Bento-Style Case Study Grid -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-6">
<!-- Featured Card (Asymmetric) -->
<div class="md:col-span-8 group relative overflow-hidden rounded-xl bg-on-background min-h-[400px] flex flex-col justify-end p-8">
<div class="absolute inset-0 z-0">
<img alt="Modern corporate office interior with glass walls and professional atmosphere" class="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" data-alt="Modern corporate office interior with high-end glass walls and soft blue ambient lighting, architectural photography style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYXQBcZ5cUDnFPf3LUA0-Tp6qSDi2RWBsiNshIJlnUqCA5dnzfkQMMKNICXJBJoxiDosTms90Bk348AIc4vygBapoxPQMNGdP5deJ68nnrasjdRkcRyICsik2WswZov0FUkSVy_FBcSizGvBET7pcKy2O1Lqa2nTKF11KwQlWotuw5eHgsBj-CVepMBWWRdCAZb7DLvPFZE5lLKtWQyjUWveAJzeg2eNcvmCG_8TImJ6MIfGqJI3kaQQk0xoDakOVHWfuL9Is1o6M"/>
<div class="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/20 to-transparent"></div>
</div>
<div class="relative z-10 space-y-4">
<div class="flex items-center gap-3">
<span class="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Featured Case</span>
<span class="text-white/60 text-xs font-medium">SaaS Global</span>
</div>
<h3 class="text-3xl font-bold text-white max-w-lg leading-tight">Scaling Hyper-Growth: The FinTech Infrastructure Overhaul</h3>
<p class="text-stone-400 max-w-md text-sm">How we redefined the conversion funnel for a leading Series B FinTech startup, resulting in unprecedented user acquisition.</p>
<div class="flex gap-10 pt-4 border-t border-white/10">
<div>
<span class="block text-primary text-2xl font-black">+142%</span>
<span class="text-[10px] text-stone-500 font-bold uppercase tracking-widest">ROI Increase</span>
</div>
<div>
<span class="block text-white text-2xl font-black">2.4m</span>
<span class="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Active Users</span>
</div>
</div>
</div>
</div>
<!-- Small Card 1 -->
<div class="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between group cursor-pointer hover:shadow-xl hover:shadow-on-surface/5 transition-all">
<div class="space-y-4">
<div class="flex justify-between items-start">
<span class="px-3 py-1 bg-surface-container text-tertiary text-[10px] font-bold uppercase tracking-widest rounded-full">Startup</span>
<span class="material-symbols-outlined text-stone-300 group-hover:text-primary transition-colors" data-icon="north_east">north_east</span>
</div>
<h4 class="text-xl font-bold text-on-surface leading-snug">Lumina AI Brand Identity &amp; Launch</h4>
<p class="text-stone-500 text-sm leading-relaxed">Defining the visual language for a next-gen AI search engine from zero to one.</p>
</div>
<div class="pt-6">
<div class="bg-surface-container-low rounded-lg p-4 flex items-center justify-between">
<span class="text-xs font-bold text-stone-400 uppercase">Conversion</span>
<span class="text-lg font-black text-secondary">+24%</span>
</div>
</div>
</div>
<!-- Small Card 2 -->
<div class="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between group cursor-pointer hover:shadow-xl hover:shadow-on-surface/5 transition-all">
<div class="space-y-4">
<div class="flex justify-between items-start">
<span class="px-3 py-1 bg-surface-container text-tertiary text-[10px] font-bold uppercase tracking-widest rounded-full">Founder</span>
<span class="material-symbols-outlined text-stone-300 group-hover:text-primary transition-colors" data-icon="north_east">north_east</span>
</div>
<h4 class="text-xl font-bold text-on-surface leading-snug">Personal Brand Authority for Dr. Aris</h4>
<p class="text-stone-500 text-sm leading-relaxed">Strategic positioning for a world-renowned health tech visionary and author.</p>
</div>
<div class="pt-6">
<div class="bg-surface-container-low rounded-lg p-4 flex items-center justify-between">
<span class="text-xs font-bold text-stone-400 uppercase">Growth</span>
<span class="text-lg font-black text-primary">150k+</span>
</div>
</div>
</div>
<!-- Medium Image-Card (The Solution Bridge) -->
<div class="md:col-span-8 bg-surface-container rounded-xl overflow-hidden flex flex-col md:flex-row">
<div class="md:w-1/2 relative h-48 md:h-auto">
<img alt="Data analytics dashboard displayed on a large screen in a modern workspace" class="w-full h-full object-cover" data-alt="Vibrant data analytics dashboard with colorful charts and graphs on a high-resolution screen in a sleek, minimalist tech office environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx_lngT586dzkZiSemAbus_RcxflTwktYN1fDkL4bIat9pZwYOymnGF55PqcTAZmhgfoHqOigWL2WgULHm5asYdaqKJiDD3hCkIy4yfH_CePRT_Vhzn_-7VOkO5WB1IJOnBlbALKzRcorUaYgHImcvPQOOOR9cQAC4ccKa5uavNceFCPisF3CyzXyU3WId10SRjSDwpDDb0AzvYNUxWcLX_ZkJWGomXiopLA_-oe_DLvRNujRTFYlesffMOhk7yDzq6tH7RBGVOKI"/>
</div>
<div class="md:w-1/2 p-8 flex flex-col justify-center bg-white">
<div class="space-y-4">
<span class="text-xs font-bold text-secondary uppercase tracking-[0.1em]">Urgent Recovery</span>
<h4 class="text-2xl font-bold text-on-surface tracking-tight">Reviving E-Commerce Legacy</h4>
<p class="text-stone-500 text-sm">A deep-dive into how we saved a declining 15-year-old retail brand through aggressive digital pivoting.</p>
<div class="flex gap-6 pt-2">
<div>
<span class="block text-on-surface font-black text-xl">$1.2M</span>
<span class="text-[9px] text-stone-400 uppercase font-bold">New Revenue</span>
</div>
<div>
<span class="block text-on-surface font-black text-xl">42%</span>
<span class="text-[9px] text-stone-400 uppercase font-bold">Retention</span>
</div>
</div>
</div>
</div>
</div>
<!-- Small Card 3 -->
<div class="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between group cursor-pointer hover:shadow-xl hover:shadow-on-surface/5 transition-all">
<div class="space-y-4">
<div class="flex justify-between items-start">
<span class="px-3 py-1 bg-surface-container text-tertiary text-[10px] font-bold uppercase tracking-widest rounded-full">SaaS</span>
<span class="material-symbols-outlined text-stone-300 group-hover:text-primary transition-colors" data-icon="north_east">north_east</span>
</div>
<h4 class="text-xl font-bold text-on-surface leading-snug">Nexus CRM Product Redesign</h4>
<p class="text-stone-500 text-sm leading-relaxed">Transforming complex enterprise data into an intuitive, high-velocity user experience.</p>
</div>
<div class="pt-6">
<div class="bg-surface-container-low rounded-lg p-4 flex items-center justify-between">
<span class="text-xs font-bold text-stone-400 uppercase">Efficiency</span>
<span class="text-lg font-black text-primary-container">+65%</span>
</div>
</div>
</div>
<!-- Small Card 4 -->
<div class="md:col-span-4 bg-on-surface rounded-xl p-8 flex flex-col justify-between group cursor-pointer shadow-lg transition-all">
<div class="space-y-4">
<div class="flex justify-between items-start">
<span class="px-3 py-1 bg-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest rounded-full">Global</span>
<span class="material-symbols-outlined text-white/30 group-hover:text-white transition-colors" data-icon="lock">lock</span>
</div>
<h4 class="text-xl font-bold text-white leading-snug">Confidential Govt Portal Integration</h4>
<p class="text-stone-400 text-sm leading-relaxed">Internal secure digital transformation for municipal resource management systems.</p>
</div>
<div class="pt-6">
<div class="bg-white/5 rounded-lg p-4 flex items-center justify-between">
<span class="text-xs font-bold text-white/40 uppercase">Status</span>
<span class="text-sm font-bold text-white/80 italic">Protected</span>
</div>
</div>
</div>
<!-- Medium Card (Editorial Stat) -->
<div class="md:col-span-4 bg-primary text-white rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-4 relative overflow-hidden">
<div class="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
<span class="material-symbols-outlined text-5xl opacity-50" data-icon="auto_awesome">auto_awesome</span>
<h4 class="text-3xl font-black italic tracking-tighter">Small Businesses.<br/>Big Solutions.</h4>
<p class="text-white/60 text-xs font-medium uppercase tracking-[0.2em]">Our Impact Narrative</p>
</div>
</div>
<!-- Footer Pagination/Action -->
<div class="flex items-center justify-between pt-12 border-t border-stone-200/60">
<p class="text-xs text-stone-400 font-medium">Displaying 6 of 42 Case Studies</p>
<div class="flex items-center gap-2">
<button class="p-2 border border-outline-variant/20 rounded hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
</button>
<button class="h-8 w-8 flex items-center justify-center bg-on-surface text-white text-xs font-bold rounded">1</button>
<button class="h-8 w-8 flex items-center justify-center text-on-surface text-xs font-bold rounded hover:bg-surface-container">2</button>
<button class="h-8 w-8 flex items-center justify-center text-on-surface text-xs font-bold rounded hover:bg-surface-container">3</button>
<button class="p-2 border border-outline-variant/20 rounded hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
</body></html>

<!-- Login  -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Admin Login | Gmax Digital</title>
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
                        "on-tertiary": "#ffffff",
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
<body class="bg-surface text-on-surface min-h-screen flex items-center justify-center p-6">
<!-- Login Container -->
<main class="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
<!-- Branding Section (Asymmetric Side) -->
<section class="lg:col-span-5 bg-on-background p-12 lg:p-20 flex flex-col justify-between relative overflow-hidden min-h-[400px] lg:min-h-[700px]">
<div class="z-10">
<div class="flex items-center gap-2 mb-12">
<div class="w-10 h-10 bg-primary-container rounded flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary" style="font-variation-settings: 'FILL' 1;">shield_person</span>
</div>
<span class="text-xl font-bold tracking-tighter text-white">Gmax Digital</span>
</div>
<h1 class="text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
                    Small Businesses.<br/>
<span class="text-primary-container">Big Solutions.</span>
</h1>
<p class="text-on-surface-variant text-lg leading-relaxed max-w-sm opacity-80">
                    Strategic authority and editorial precision for the modern digital marketplace. Access your administrative dashboard.
                </p>
</div>
<div class="z-10 mt-auto">
<div class="flex items-center gap-4 text-white/50 text-xs font-bold tracking-widest uppercase">
<span>Secure Access</span>
<span class="w-8 h-[1px] bg-white/20"></span>
<span>v.4.0.2</span>
</div>
</div>
<!-- Background Decorative Element (The "Solution Bridge" Aesthetic) -->
<div class="absolute top-0 right-0 w-full h-full opacity-10">
<img class="w-full h-full object-cover grayscale" data-alt="Abstract circuit board pattern with glowing lines and binary code representing digital security and infrastructure in deep charcoal tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEpc2Y-twkhkM4hH5Tyb2xL2FNFYpyyCTsICn3CI6Hx7KhzcV_nqrpTqPIjQsug_FU-BGjXs4-Ay1PcR7dOADwMO_bm3p-k8n1gjCRyi8vVRqHMrjDe01iZo7HSqsjzZlAWuIoYMAWJpYSCrGs91VEZKRtMROnEArKlPcf28m9rcUKdmp_-VVTUOL1SHqWjVfrtIFHlbUknpSldda6xaGV3kaHhpMdaYcZgR4ED1xRmamznclOJJgXaCmwcawmnjNG38AJLh-wQvo"/>
</div>
</section>
<!-- Form Section -->
<section class="lg:col-span-7 bg-white p-8 lg:p-24 flex flex-col justify-center">
<div class="max-w-md mx-auto w-full">
<header class="mb-12">
<h2 class="text-3xl font-bold tracking-tight text-on-surface mb-2">Welcome Back</h2>
<p class="text-on-surface-variant font-medium">Please enter your credentials to manage your agency growth.</p>
</header>
<form class="space-y-8">
<!-- Email Input -->
<div class="relative group">
<label class="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors" for="email">
                            Corporate Email
                        </label>
<div class="flex items-center border-b-2 border-surface-container focus-within:border-primary transition-all pb-2">
<span class="material-symbols-outlined text-outline-variant mr-3 group-focus-within:text-primary transition-colors">alternate_email</span>
<input class="w-full bg-transparent border-none focus:ring-0 text-on-surface font-medium placeholder:text-outline-variant/60" id="email" name="email" placeholder="name@gmaxdigital.com" type="email"/>
</div>
</div>
<!-- Password Input -->
<div class="relative group">
<div class="flex justify-between items-end mb-2">
<label class="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant group-focus-within:text-primary transition-colors" for="password">
                                Access Key
                            </label>
<a class="text-[10px] font-bold tracking-widest uppercase text-primary hover:text-primary-container transition-colors" href="#">Forgot Password?</a>
</div>
<div class="flex items-center border-b-2 border-surface-container focus-within:border-primary transition-all pb-2">
<span class="material-symbols-outlined text-outline-variant mr-3 group-focus-within:text-primary transition-colors">lock</span>
<input class="w-full bg-transparent border-none focus:ring-0 text-on-surface font-medium placeholder:text-outline-variant/60" id="password" name="password" placeholder="••••••••" type="password"/>
</div>
</div>
<!-- Login Button -->
<div class="pt-4">
<button class="w-full py-5 bg-primary-container text-on-primary font-bold tracking-tight text-lg rounded shadow-lg shadow-primary/20 hover:bg-primary transition-all active:scale-[0.98] flex items-center justify-center gap-3" type="submit">
<span>Sign In</span>
<span class="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</div>
<!-- Additional Context (Invisible Grid Principle) -->
<div class="mt-12 flex items-center justify-between p-6 bg-surface-container-low rounded-lg border border-outline-variant/5">
<div class="flex items-center gap-3">
<div class="p-2 bg-white rounded shadow-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">verified_user</span>
</div>
<div>
<p class="text-[10px] font-bold tracking-wider text-on-surface uppercase">MFA Required</p>
<p class="text-xs text-on-surface-variant">Multi-factor authentication is active</p>
</div>
</div>
<span class="material-symbols-outlined text-outline-variant">info</span>
</div>
</form>
<footer class="mt-16 text-center">
<p class="text-xs text-on-surface-variant font-medium">
                        Need assistance? <a class="text-primary font-bold border-b border-primary/20 hover:border-primary" href="#">Contact System Administrator</a>
</p>
</footer>
</div>
</section>
</main>
<!-- Support Floating Element (Editorial Balance) -->
<div class="fixed bottom-8 right-8 hidden lg:flex flex-col items-end gap-2 pointer-events-none opacity-40">
<span class="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface">Security Architecture</span>
<div class="h-[1px] w-32 bg-primary"></div>
</div>
</body></html>
