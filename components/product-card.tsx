import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  price: number
  imageUrl: string
}

export default function ProductCard({ name, price, imageUrl }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64">
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">${price.toFixed(2)}</p>
        <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}

