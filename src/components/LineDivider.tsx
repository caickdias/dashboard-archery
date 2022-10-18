import React from 'react'

type Props = {
    bg?: string;
    width?: string;
    height?: number;
    marginTop?: number;
}

const LineDivider = ({ bg='gray', width='100%', height=1, marginTop=5 }: Props) => {
  return (
    <div 
        style={{ backgroundColor: bg, width: width, height: `${height}px`, marginTop: `${marginTop}px`,  }}
    >

    </div>
  )
}

export default LineDivider