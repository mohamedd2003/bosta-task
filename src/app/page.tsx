

import { HeroSection } from "@/components/Home/ui/HeroSection"
import { ProductListingClient } from "@/components/Home/ui/ProductListingClient"
import { WhyShopWithUs } from "@/components/Home/ui/WhyShopWithUs"
import { StatsSection } from "@/components/Home/ui/StatsSection"
import { Testimonials } from "@/components/Home/ui/Testimonials"
import { Suspense } from "react"

export default function HomePage() {
  return (
    <div className="bg-zinc-50/50 dark:bg-zinc-950">
      {/* — static markup, no JS needed */}
      <HeroSection />

      <StatsSection />
      {/*  — interactive: filter, sort, paginate, SWR fetch */}
      <Suspense fallback={<div>Loading Products...</div>}>
        <ProductListingClient isHomePage={true} />
      </Suspense>

      {/* — static markup, no JS needed */}
      <WhyShopWithUs />


      <Testimonials />
    </div>
  )
}
