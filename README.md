# BOSTA — Frontend Technical Assessment

> A production-grade e-commerce storefront built with Next.js 16, React 19, and TypeScript.  
> Live: [bosta-task-rust.vercel.app](https://bosta-task-rust.vercel.app)

---

## Project Overview

This is not a throwaway assessment project. It is engineered as a real product foundation — with proper architecture boundaries, scalable state management, runtime validation, and a UX-first approach to every user-facing interaction.

The application consumes the [FakeStore API](https://fakestoreapi.com) and delivers a full shopping experience: browsing, filtering, sorting, product details, cart management, product creation, and authentication — all with considered error handling, loading feedback, and responsive design.

---

## Engineering Approach

Every technical decision was made through the lens of three questions:

1. **Does it scale?** — Can a team of five engineers work on this without stepping on each other?
2. **Does it fail gracefully?** — What does the user see when things go wrong?
3. **Does it separate concerns?** — Is business logic decoupled from UI rendering?

The result is a modular, feature-sliced codebase where each domain (Products, Cart, Auth) owns its types, services, hooks, validation, and UI — independently testable and replaceable.

---

## Architecture

The project follows a **feature-sliced architecture** with atomic design principles within each feature module:

```
src/
├── app/                          # Next.js App Router — thin SSR shells
│   ├── layout.tsx                # Root layout (metadata, fonts, providers)
│   ├── page.tsx                  # Home page (SSR)
│   ├── cart/page.tsx             # Cart page (SSR shell → client component)
│   ├── login/page.tsx            # Login page
│   ├── products/
│   │   ├── page.tsx              # Product listing
│   │   ├── [id]/page.tsx         # Product detail (dynamic route)
│   │   └── new-product/page.tsx  # Create product (protected)
│   └── not-found.tsx             # Custom 404
│
├── components/
│   ├── AddProductForm/           # Feature: Product creation
│   │   ├── hooks/                # useAddProductForm
│   │   ├── Services/             # API call layer
│   │   ├── types/                # TypeScript interfaces
│   │   ├── validation/           # Zod schema
│   │   └── ui/                   # AddProductForm component
│   │
│   ├── Cart/                     # Feature: Shopping cart
│   │   └── ui/
│   │       ├── Cart.tsx          # Organism — orchestrator
│   │       ├── CartItemCard.tsx  # Molecule — single item row
│   │       ├── OrderSummary.tsx  # Molecule — totals sidebar
│   │       ├── EmptyCart.tsx     # Molecule — empty state
│   │       └── CartSkeleton.tsx  # Atom — loading skeleton
│   │
│   ├── Home/                     # Feature: Landing & product listing
│   │   └── ui/
│   │       ├── HeroSection.tsx
│   │       ├── ProductListingClient.tsx
│   │       ├── ProductGrid.tsx
│   │       ├── ProductToolbar.tsx
│   │       ├── Pagination.tsx
│   │       ├── StatesFeedback.tsx
│   │       ├── StatsSection.tsx
│   │       ├── Testimonials.tsx
│   │       └── WhyShopWithUs.tsx
│   │
│   ├── Login/                    # Feature: Authentication
│   │   ├── services/             # Login API
│   │   ├── types/                # Auth types
│   │   ├── validation/           # Zod login schema
│   │   └── ui/                   # Login form component
│   │
│   ├── ProductCard/              # Feature: Product card (shared)
│   │   ├── hooks/                # Product data hooks
│   │   ├── services/             # Product API
│   │   ├── types/                # ProductCard type
│   │   └── ui/
│   │       ├── ProductCard.tsx
│   │       ├── ProductCardSkeleton.tsx
│   │       └── ProductsHeader.tsx
│   │
│   ├── ProductDetails/           # Feature: Product detail view
│   │   ├── hooks/                # useProductDetail
│   │   ├── services/             # Detail API
│   │   └── ui/
│   │       ├── ProductDetails.tsx
│   │       ├── ProductActions.tsx
│   │       ├── ProductDetailSkeleton.tsx
│   │       └── RelatedProducts.tsx
│   │
│   ├── layout/                   # Shared layout
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   └── ui/                       # Shadcn/Radix primitives
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── select.tsx
│       └── ...
│
├── lib/
│   ├── networking/
│   │   ├── apiHandler.ts         # Axios instance & interceptors
│   │   └── responseHandler.ts    # Standardized API response wrapper
│   └── utils.ts                  # General utilities (cn, etc.)
│
├── store/
│   └── useCartStore.ts           # Zustand cart store (persisted)
│
└── proxy.ts                      # Next.js middleware (route protection)
```

**Key principle:** Page files (`app/`) are thin SSR shells. They handle metadata and render the corresponding feature component. All client-side interactivity lives inside `components/`.

---

## Tech Stack

| Technology | Role | Why This Choice |
|---|---|---|
| **Next.js 16** | Framework | App Router, SSR/SSG hybrid, file-based routing, middleware, built-in image optimization |
| **React 19** | UI Library | Latest concurrent features, improved server components |
| **TypeScript** | Type Safety | Compile-time error prevention, self-documenting interfaces, safer refactoring |
| **TailwindCSS 4** | Styling | Utility-first with design system tokens, zero runtime cost, consistent spacing/color |
| **Zustand** | Client State | Minimal boilerplate, no providers needed, built-in persistence middleware, selector-based re-renders |
| **SWR** | Data Fetching | Stale-while-revalidate caching, automatic revalidation, deduplication, built-in loading/error states |
| **React Hook Form** | Forms | Uncontrolled inputs for performance, minimal re-renders, seamless Zod integration |
| **Zod** | Validation | Runtime type safety, schema-first validation, TypeScript type inference from schemas |
| **Shadcn UI + Radix** | Components | Accessible primitives, unstyled by default, full control over design, no vendor lock-in |
| **Axios** | HTTP Client | Interceptors for auth headers, request/response transforms, centralized error handling |
| **js-cookie** | Auth Persistence | Lightweight, SSR-compatible cookie management for token storage |
| **react-hot-toast** | Notifications | Minimal bundle, customizable, promise-based toasts |

---

## Features Breakdown

### Product Listing

The home page delivers a full browsing experience with:

- **SWR-powered data fetching** with stale-while-revalidate caching strategy
- **Client-side pagination** with URL-independent state
- **Sorting** by price (ascending/descending) and by category
- **Skeleton loading states** — not spinners, but content-shaped placeholders that reduce perceived load time
- **Error and empty state feedback** — dedicated UI for every non-happy path

### Product Details

Dynamic route (`/products/[id]`) with:

- Full product information display with image zoom-on-hover
- Star rating visualization
- Category-based color coding (deterministic hash, no static mapping)
- Related products section (same category)
- Breadcrumb navigation
- **Add to Cart** directly from details page with visual confirmation

### Product Creation (Protected)

- Full form with validation (React Hook Form + Zod)
- Dynamic category fetching for dropdown
- Disabled submit during API call to prevent double submission
- Success toast with redirect
- Only accessible when authenticated

### Cart System

- Add to cart from product cards (heart icon) and product details page
- Real-time quantity adjustment with +/- controls
- Individual item removal with confirmation toast
- Clear all functionality
- Order summary with subtotal, shipping calculation, and total
- Free shipping progress bar (threshold: $50)
- Persistent across page navigation (Zustand + localStorage)
- Empty state with call-to-action

---

## Authentication Flow

```
User → /login → FakeStore API auth → Token + Username stored in cookies
                                        ↓
                                   Middleware (proxy.ts) checks cookies
                                        ↓
                              Protected routes: /products/new-product, /cart
                                        ↓
                              No token? → Redirect to /login
```

- **Storage:** HTTP cookies via `js-cookie` — accessible by both client components and Next.js middleware
- **Middleware:** `proxy.ts` runs at the edge before page load, providing server-side route protection
- **Session persistence:** Token survives page refresh; logout clears cookies and reloads
- **UI awareness:** Navbar conditionally renders user avatar + logout vs. login button based on auth state

---

## Cart Logic

The cart is powered by Zustand with the `persist` middleware, storing state in `localStorage` under the key `bosta-cart-storage`.

```
useCartStore
├── items: CartItem[]
├── addItem(product)         → Increments quantity if exists, otherwise adds with qty 1
├── removeItem(productId)    → Filters item out of array
├── updateQuantity(id, qty)  → Updates qty; auto-removes if qty ≤ 0
├── clearCart()              → Resets to empty array
├── getTotalItems()          → Reduces items to total quantity count
└── getTotalPrice()          → Reduces items to total price
```

**Reactivity note:** The Navbar subscribes to `state.items` via a selector (`useCartStore(state => state.items)`) rather than destructuring helper methods, ensuring Zustand triggers re-renders when the cart changes.

---

## State Management Strategy

**Why Zustand over Redux or Context:**

- **Zero boilerplate:** No action types, reducers, dispatchers, or providers wrapping the tree
- **Selector-based rendering:** Components re-render only when their selected slice changes
- **Middleware ecosystem:** `persist` middleware gives us localStorage sync in one line
- **Bundle size:** ~1KB gzipped vs. Redux Toolkit's ~11KB
- **SSR compatibility:** Zustand stores work seamlessly with Next.js hydration patterns

**State distribution:**

| State Type | Solution | Rationale |
|---|---|---|
| Server data (products) | SWR cache | Automatic revalidation, deduplication |
| Client state (cart) | Zustand (persisted) | Survives navigation, no server dependency |
| Form state | React Hook Form | Uncontrolled, performant, isolated to form lifecycle |
| UI state (modals, menus) | React `useState` | Ephemeral, component-scoped |
| Auth state | Cookies | Accessible by middleware + client, survives refresh |

---

## Data Fetching Strategy

**Why SWR over React Query or raw fetch:**

- **Stale-While-Revalidate:** Shows cached data instantly, refreshes in background
- **Deduplication:** Multiple components requesting the same key share a single request
- **Built-in states:** `isLoading`, `error`, and `data` out of the box
- **Lightweight:** Smaller bundle than React Query for this project's needs

All API calls flow through a centralized Axios instance (`lib/networking/apiHandler.ts`) with a standardized response handler (`responseHandler.ts`), ensuring consistent error shapes across the application.

---

## Form & Validation Strategy

**Schema-first validation with Zod:**

Each form feature owns its validation schema adjacent to the form component. Schemas are the single source of truth — TypeScript types are inferred from them, eliminating type drift.

```
AddProductForm/
├── validation/AddProductForm.validation.ts   ← Zod schema
├── types/AddProductForm.types.ts             ← Inferred from schema
├── hooks/useAddProductForm.tsx               ← RHF + zodResolver
└── ui/AddProductForm.tsx                     ← Pure UI rendering
```

**React Hook Form integration:**

- Uses `zodResolver` to bridge Zod schemas with RHF
- Uncontrolled inputs minimize re-renders during typing
- `isSubmitting` state disables the submit button to prevent duplicate requests
- Field-level error messages appear inline with proper accessibility attributes

---

## UX Considerations

Every user-facing state is explicitly designed:

| State | Implementation |
|---|---|
| **Loading** | Content-shaped skeleton placeholders (not spinners) |
| **Error** | Descriptive error messages with retry actions |
| **Empty** | Illustrated empty states with clear call-to-action |
| **Success** | Toast notifications with contextual messages |
| **Hover** | Scale transforms, color transitions, shadow elevation |
| **Active** | Button press feedback with `active:scale-95` / `active:translate-y-0` |
| **Cart feedback** | Heart icon fills red on add; "Added!" confirmation state |

**Perceived performance:**

- Skeleton screens are shaped to match actual content, reducing layout shift
- Image lazy loading via Next.js `Image` component
- Stale-while-revalidate shows cached data while fetching fresh data

---

## Error Handling Strategy

Errors are handled at three layers:

1. **Network layer** (`apiHandler.ts`) — Axios interceptors catch HTTP errors, normalize error shapes
2. **Data layer** (`responseHandler.ts`) — Wraps responses in a standardized `{ data, error }` shape
3. **UI layer** (`StatesFeedback.tsx`) — Components render error states with contextual messaging

All error boundaries are fail-safe: the application never shows a white screen or raw error to the user.

---

## Responsiveness

The application is fully responsive across breakpoints:

- **Mobile-first** approach using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`)
- **Cart page** adapts from stacked mobile layout to grid-based desktop layout
- **Product grid** scales from 1 column (mobile) → 2 → 3 → 4 columns (desktop)
- **Navbar** collapses to hamburger menu on mobile with animated slide-down
- **Navigation elements** maintain touch-friendly sizing (minimum 44px tap targets)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mohamedd2003/bosta-task.git
cd bosta-task

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

### Test Credentials (FakeStore API)

```
Username: mor_2314
Password: 83r5^_
```

---

## Production Mindset

This codebase is structured for production readiness:

- **SEO:** Full meta tags — Open Graph, Twitter Cards, robots directives, canonical URLs, structured title templates
- **Performance:** Next.js Image optimization, lazy loading, SWR caching, code splitting via App Router
- **Accessibility:** Semantic HTML, ARIA labels on interactive elements, keyboard navigation support
- **Security:** Server-side route protection via middleware, token-based auth, no sensitive data in localStorage
- **Type safety:** Strict TypeScript throughout — no `any` types, interfaces for all data shapes
- **Maintainability:** Feature-sliced architecture, co-located concerns, consistent naming conventions

---

## Future Improvements

If this were taken to production, the next priorities would be:

- **Search** — Full-text product search with debounced input
- **Wishlist** — Persisted wishlist with Zustand (separate store)
- **Checkout flow** — Multi-step form with address and payment
- **Internationalization** — RTL support with next-intl
- **Dark mode toggle** — System preference detection with manual override
- **Unit & E2E testing** — Vitest for unit tests, Playwright for critical user flows
- **CI/CD pipeline** — GitHub Actions with lint, type-check, build, and deploy stages
- **Image CDN** — Cloudinary or similar for responsive image delivery
- **Rate limiting** — Client-side debounce on rapid cart actions

---

<p align="center">
  Built with precision by <strong>Mohamed Hossam </strong> for the BOSTA Frontend Assessment.
</p>
