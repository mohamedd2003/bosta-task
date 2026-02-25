

import { HeroSection } from "@/components/Home/ui/HeroSection"
import { ProductListingClient } from "@/components/Home/ui/ProductListingClient"
import { WhyShopWithUs } from "@/components/Home/ui/WhyShopWithUs"

export default function HomePage() {
  return (
    <div className="bg-zinc-50/50 dark:bg-zinc-950">
      {/* — static markup, no JS needed */}
      <HeroSection />

      {/*  — interactive: filter, sort, paginate, SWR fetch */}
      <ProductListingClient />

      {/* — static markup, no JS needed */}
      <WhyShopWithUs />
    </div>
  )
}
