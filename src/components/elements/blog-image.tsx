'use client'

import { ImageDithering } from '@paper-design/shaders-react'

export function BlogImage({
  src,
  alt,
  className,
  style,
}: {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <ImageDithering
      originalColors={false}
      type="8x8"
      size={8}
      colorSteps={3}
      image={src}
      scale={1}
      fit="cover"
      colorBack="#00000000"
      colorFront="#c2410c"
      colorHighlight="#fdba74"
      className={className}
      style={{
        backgroundColor: '#7c2d12',
        ...style,
      }}
      aria-label={alt}
    />
  )
}
