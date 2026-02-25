"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldError,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { productSchema, ProductFormValues } from "@/components/ProductCard/validation/ProductCard.validation"
import { useProductCard } from "@/components/ProductCard/hooks/useProductCard"
import { toast } from "react-hot-toast"
import { Loader2, Plus } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

export function AddProductForm() {
    const router = useRouter()
    const { handleAddProduct } = useProductCard()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(productSchema),
        mode: "onBlur",
        defaultValues: {
            title: "",
            description: "",
            price: 0,
            category: "",
            image: "",
        }
    })


    const onSubmit = async (data: ProductFormValues) => {
        setIsSubmitting(true)
        try {
            // Mapping form values to ProductDto (which happens to be the same here)
            await handleAddProduct({
                ...data,
                id: 0, // ID is usually handled by the server for NEW products
            })
            router.push("/products")
        } catch (error) {
            // Error handling is inside handleAddProduct but we catch here to stop navigation
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="mx-auto w-full max-w-2xl shadow-xl">
            <CardHeader className="space-y-1">
                <div className="flex items-center gap-2">
                    <div className="bg-primary/10 rounded-lg p-2">
                        <Plus className="text-primary h-6 w-6" />
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-bold">Create New Product</CardTitle>
                        <CardDescription>Fill in the details below to add a new product to the catalog.</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <FieldGroup className="gap-6">
                        <Field>
                            <FieldLabel htmlFor="title">Product Title</FieldLabel>
                            <Input
                                id="title"
                                placeholder="e.g. Premium Wireless Headphones"
                                {...register("title")}
                                data-invalid={!!errors.title}
                            />
                            <FieldError errors={[errors.title]} />
                        </Field>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <Field>
                                <FieldLabel htmlFor="price">Price ($)</FieldLabel>
                                <Input
                                    id="price"
                                    type="number"
                                    step="0.01"
                                    placeholder="0.00"
                                    {...register("price")}
                                    data-invalid={!!errors.price}
                                />
                                <FieldError errors={[errors.price]} />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="category">Category</FieldLabel>
                                <Input
                                    id="category"
                                    placeholder="e.g. electronics"
                                    {...register("category")}
                                    data-invalid={!!errors.category}
                                />
                                <FieldError errors={[errors.category]} />
                            </Field>
                        </div>

                        <Field>
                            <FieldLabel htmlFor="image">Image URL</FieldLabel>
                            <Input
                                id="image"
                                placeholder="https://example.com/image.jpg"
                                {...register("image")}
                                data-invalid={!!errors.image}
                            />
                            <FieldError errors={[errors.image]} />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="description">Description</FieldLabel>
                            <Textarea
                                id="description"
                                placeholder="Describe the product features, specifications..."
                                className="min-h-[120px] resize-none"
                                {...register("description")}
                                data-invalid={!!errors.description}
                            />
                            <FieldError errors={[errors.description]} />
                        </Field>
                    </FieldGroup>

                    <div className="flex justify-end gap-3 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => router.back()}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" className="min-w-[140px]" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Creating...
                                </>
                            ) : (
                                "Create Product"
                            )}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
