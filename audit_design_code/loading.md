<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
              "primary": "#585DE1",
              "neutral-charcoal": "#241E20",
              "neutral-light": "#F9FAFB",
              "border-subtle": "#E5E7EB",
              "text-secondary": "#6B7280"
            },
            "borderRadius": {
              "DEFAULT": "4px",
              "lg": "4px",
              "xl": "8px",
              "full": "9999px"
            },
            "fontFamily": {
              "sans": ["Inter", "sans-serif"],
              "display": ["Inter", "sans-serif"],
              "body": ["Inter", "sans-serif"],
              "label": ["Inter", "sans-serif"]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .shimmer-bar {
            background: linear-gradient(90deg, transparent, rgba(88, 93, 225, 0.1), transparent);
            background-size: 200% 100%;
            animation: shimmer 2s infinite linear;
        }
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
    </style>
</head>
<body class="bg-neutral-light text-neutral-charcoal font-sans selection:bg-primary/10 selection:text-primary">
<!-- Main Loading Canvas -->
<main class="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white">
<!-- Background Architectural Elements (Subtle) -->
<div class="absolute inset-0 z-0 overflow-hidden">
<!-- Subtle architectural grid -->
<div class="absolute inset-0 opacity-[0.05]" style="background-image: linear-gradient(#241E20 1px, transparent 1px), linear-gradient(90deg, #241E20 1px, transparent 1px); background-size: 60px 60px;"></div>
<div class="absolute top-0 left-0 w-full h-1 bg-primary/20"></div>
</div>
<!-- Central Content Area -->
<div class="relative z-10 w-full max-w-4xl px-8 flex flex-col items-center">
<!-- Branding Context -->
<div class="mb-16 flex flex-col items-center gap-4">
<span class="text-neutral-charcoal font-bold tracking-[0.2em] text-sm uppercase">AI Visibility</span>
<div class="h-[2px] w-12 bg-primary"></div>
</div>
<!-- Hero Loading Text -->
<div class="text-center mb-12">
<h1 class="font-display text-4xl md:text-5xl font-extrabold text-neutral-charcoal tracking-tight mb-6">
                Analyzing your answers<span class="text-primary">.</span>
</h1>
<p class="font-body text-text-secondary text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                Our proprietary neural engine is cross-referencing your infrastructure against LLM retrieval patterns and semantic search architectures.
            </p>
</div>
<!-- Monolithic Progress System -->
<div class="w-full max-w-2xl space-y-12">
<!-- Linear Progress Bar -->
<div class="relative h-[4px] w-full bg-border-subtle rounded-full overflow-hidden">
<!-- Progress Fill -->
<div class="absolute inset-y-0 left-0 w-[65%] bg-primary transition-all duration-1000 ease-in-out"></div>
<!-- Shimmer Overlay -->
<div class="shimmer-bar absolute inset-0"></div>
</div>
<!-- Strategic Insights Rotation (Consultancy style) -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-1 border-t border-border-subtle">
<!-- Insight 1: Active -->
<div class="pt-8 pb-8 pr-6 border-r border-border-subtle last:border-r-0">
<div class="flex flex-col gap-4">
<span class="material-symbols-outlined text-primary text-2xl" data-icon="hub">hub</span>
<div>
<p class="font-label text-[10px] uppercase font-bold tracking-widest text-primary mb-2">Active Task</p>
<p class="font-body text-sm font-semibold text-neutral-charcoal leading-snug">Mapping visibility gaps</p>
</div>
</div>
</div>
<!-- Insight 2: Queued -->
<div class="pt-8 pb-8 px-6 border-r border-border-subtle last:border-r-0 opacity-40">
<div class="flex flex-col gap-4">
<span class="material-symbols-outlined text-neutral-charcoal text-2xl" data-icon="monitoring">monitoring</span>
<div>
<p class="font-label text-[10px] uppercase font-bold tracking-widest text-text-secondary mb-2">Queueing</p>
<p class="font-body text-sm text-text-secondary leading-snug">Scoring AI discoverability</p>
</div>
</div>
</div>
<!-- Insight 3: Queued -->
<div class="pt-8 pb-8 pl-6 border-r border-border-subtle last:border-r-0 opacity-40">
<div class="flex flex-col gap-4">
<span class="material-symbols-outlined text-neutral-charcoal text-2xl" data-icon="account_tree">account_tree</span>
<div>
<p class="font-label text-[10px] uppercase font-bold tracking-widest text-text-secondary mb-2">Pending</p>
<p class="font-body text-sm text-text-secondary leading-snug">Evaluating content structure</p>
</div>
</div>
</div>
</div>
</div>
<!-- Terminal Status (Refined) -->
<div class="mt-20 w-full max-w-xl font-body text-[10px] text-text-secondary tracking-wider">
<div class="flex justify-between items-center py-2 uppercase font-medium">
<span class="flex items-center gap-2">
<span class="w-1 h-1 bg-primary rounded-full animate-pulse"></span>
                    Engine: Processing_Schema
                </span>
<span>ID: 2024.V_11.05</span>
</div>
<div class="h-px bg-border-subtle w-full"></div>
<div class="grid grid-cols-6 gap-1 py-4">
<div class="h-1 bg-primary w-full"></div>
<div class="h-1 bg-primary w-full"></div>
<div class="h-1 bg-primary w-full"></div>
<div class="h-1 bg-primary/20 w-full"></div>
<div class="h-1 bg-border-subtle w-full"></div>
<div class="h-1 bg-border-subtle w-full"></div>
</div>
</div>
</div>
<!-- Decorative Elements (Consultancy feel) -->
<div class="absolute bottom-12 left-12 hidden md:flex items-center gap-4">
<div class="w-8 h-[1px] bg-primary"></div>
<span class="font-label text-[10px] text-text-secondary uppercase font-bold tracking-[0.2em]">System Integrity Secured</span>
</div>
</main>
<!-- Footer -->
<footer class="w-full py-12 bg-white border-t border-border-subtle">
<div class="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div class="flex flex-col items-center md:items-start gap-1">
<span class="font-sans text-[10px] text-neutral-charcoal font-black uppercase tracking-[0.3em]">AI Visibility Monolith</span>
<span class="text-[9px] text-text-secondary uppercase tracking-widest">London · NYC · Singapore</span>
</div>
<div class="flex gap-8">
<a class="font-sans text-[11px] text-text-secondary hover:text-primary transition-colors duration-200 font-medium" href="#">Privacy Policy</a>
<a class="font-sans text-[11px] text-text-secondary hover:text-primary transition-colors duration-200 font-medium" href="#">Terms of Service</a>
<a class="font-sans text-[11px] text-text-secondary hover:text-primary transition-colors duration-200 font-medium" href="#">Security</a>
<a class="font-sans text-[11px] text-text-secondary hover:text-primary transition-colors duration-200 font-medium" href="#">Contact</a>
</div>
<p class="font-sans text-[10px] text-text-secondary">
            © 2024 AI Visibility Monolith.
        </p>
</div>
</footer>
</body></html>
