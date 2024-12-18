import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

interface SneakerCardProps {
  name: string
  price: number
  imageUrl: string
  releaseDate: string
}

export default function SneakerCard({ name, price, imageUrl, releaseDate }: SneakerCardProps) {
  return (
    <Card className="bg-black border-gray-800 overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-gray-400 text-sm mb-2">{releaseDate}</p>
        <p className="font-bold">${price.toFixed(2)}</p>
      </CardContent>
    </Card>
  )
}

