# Premium Animation System

A comprehensive animation system built with Framer Motion for Next.js 16 + Tailwind CSS applications.

## Features

- 🎯 **Scroll-triggered animations** - Animations trigger when elements enter the viewport
- 🎨 **Multiple animation types** - Fade, slide, scale, rotate, bounce, flip, and more
- 📱 **Responsive & accessible** - Works on all devices with reduced motion support
- ⚡ **Performance optimized** - Uses Intersection Observer and efficient rendering
- 🎭 **Stagger animations** - Animate lists and grids with staggered timing
- 🌊 **Parallax effects** - Smooth parallax scrolling animations
- 🔄 **Page transitions** - Seamless page transitions for Next.js routing
- 🎪 **Loading animations** - Beautiful loading spinners and indicators
- 🪝 **Custom hooks** - Reusable animation logic and state management

## Components

### Basic Animations

#### `FadeUp`
Fades in content from bottom to top.

```tsx
<FadeUp delay={0.2} duration={0.6}>
  <h1>Hello World</h1>
</FadeUp>
```

#### `SlideIn`
Slides content in from any direction.

```tsx
<SlideIn direction="left" delay={0.3}>
  <p>Slide in from left</p>
</SlideIn>
```

#### `ScaleIn`
Scales content in with opacity.

```tsx
<ScaleIn scale={0.8} duration={0.8}>
  <div>Scale in effect</div>
</ScaleIn>
```

#### `RotateIn`
Rotates content in with scale effect.

```tsx
<RotateIn degrees={-15} delay={0.4}>
  <img src="..." alt="Rotated image" />
</RotateIn>
```

#### `BounceIn`
Bouncy spring animation.

```tsx
<BounceIn>
  <button>Click me!</button>
</BounceIn>
```

#### `FlipIn`
3D flip animation.

```tsx
<FlipIn direction="horizontal">
  <div>Flip effect</div>
</FlipIn>
```

### Advanced Components

#### `StaggerContainer` & `StaggerItem`
Animate lists with staggered timing.

```tsx
<StaggerContainer staggerDelay={0.1}>
  {items.map((item, index) => (
    <StaggerItem key={index}>
      <div>{item}</div>
    </StaggerItem>
  ))}
</StaggerContainer>
```

#### `RevealOnScroll`
Advanced scroll-triggered animations with custom directions.

```tsx
<RevealOnScroll direction="up" distance={50} threshold={0.2}>
  <section>Revealed on scroll</section>
</RevealOnScroll>
```

#### `ParallaxScroll`
Parallax scrolling effects.

```tsx
<ParallaxScroll speed={0.5} direction="up">
  <div>Parallax content</div>
</ParallaxScroll>
```

#### `PageTransition`
Wrap your pages for smooth transitions.

```tsx
// In your layout.tsx
<PageTransition>
  {children}
</PageTransition>
```

#### `LoadingSpinner` & `LoadingDots`
Beautiful loading indicators.

```tsx
<LoadingSpinner size="lg" color="#3e42c7" />
<LoadingDots size="md" />
```

## Props

All animation components support these common props:

- `delay?: number` - Animation delay in seconds
- `duration?: number` - Animation duration in seconds
- `className?: string` - Additional CSS classes
- `once?: boolean` - Whether to animate only once (default: true)
- `amount?: number | "some" | "all"` - Viewport threshold for triggering

## Hooks

### `useAnimationOnHover`
Manage hover animations.

```tsx
const { controls, isHovered, hoverProps } = useAnimationOnHover()

<motion.div
  animate={controls}
  variants={hoverVariants}
  {...hoverProps}
>
  Hover me!
</motion.div>
```

### `useStaggerAnimation`
Custom stagger logic for complex animations.

```tsx
const { ref, controls, containerVariants, getItemVariants } = useStaggerAnimation(5, 0.1)

<motion.div ref={ref} variants={containerVariants} animate={controls}>
  {items.map((item, index) => (
    <motion.div key={index} variants={getItemVariants(index)}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

## Animation Variants

Pre-built animation variants in `lib/utils/animation-variants.ts`:

```tsx
import { fadeVariants, slideUpVariants, bounceInVariants } from '@/lib/utils'

// Use in your components
<motion.div variants={fadeVariants} />
```

## Performance Tips

1. **Use `once={true}`** for scroll animations to prevent re-triggering
2. **Set appropriate `amount` values** (0.1-0.3) for better performance
3. **Group animations** using `StaggerContainer` instead of individual components
4. **Use `will-change` CSS** for elements that animate frequently
5. **Consider `prefers-reduced-motion`** for accessibility

## Accessibility

The system automatically respects `prefers-reduced-motion` settings. For custom implementations:

```tsx
import { useReducedMotion } from 'framer-motion'

const shouldReduceMotion = useReducedMotion()

<motion.div
  animate={shouldReduceMotion ? { opacity: 1 } : fullAnimation}
>
  Content
</motion.div>
```

## Browser Support

- Modern browsers with CSS Transform support
- IE11 is not supported by Framer Motion; use modern browsers or provide non-animated fallbacks
- Mobile Safari 9+
- Chrome 36+

## Dependencies

- `framer-motion`: ^12.38.0
- `react-intersection-observer`: ^10.0.3 (already installed)

## Usage Examples

### Animated Card Grid
```tsx
<StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {cards.map((card, index) => (
    <StaggerItem key={index}>
      <FadeUp delay={index * 0.1}>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          {card.content}
        </div>
      </FadeUp>
    </StaggerItem>
  ))}
</StaggerContainer>
```

### Hero Section
```tsx
<section className="min-h-screen flex items-center">
  <div className="container mx-auto px-4">
    <FadeUp>
      <h1 className="text-5xl font-bold mb-6">Welcome</h1>
    </FadeUp>
    <SlideIn direction="left" delay={0.3}>
      <p className="text-xl mb-8">Amazing subtitle</p>
    </SlideIn>
    <BounceIn delay={0.6}>
      <button className="btn-primary">Get Started</button>
    </BounceIn>
  </div>
</section>
```

### Parallax Background
```tsx
<div className="relative overflow-hidden">
  <ParallaxScroll speed={0.3} direction="up">
    <div className="bg-hero-pattern bg-cover bg-center h-screen" />
  </ParallaxScroll>
  <div className="absolute inset-0 flex items-center justify-center">
    <FadeUp>
      <h1>Hero Content</h1>
    </FadeUp>
  </div>
</div>
```