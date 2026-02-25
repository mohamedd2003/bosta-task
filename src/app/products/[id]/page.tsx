import ProductDetails from "@/components/ProductDetails/ui/ProductDetails"

interface ProductDetailPageProps {
    params: Promise<{ id: string }>
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
    const { id } = await params
    const productId = Number(id)

    return <ProductDetails productId={productId} />
}
