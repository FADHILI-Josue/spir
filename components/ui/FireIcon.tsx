import { FC } from 'react'

interface FireIconProps {
    color: string,
  height?: number,
  width?: number
}

const FireIcon: FC<FireIconProps> = ({color, width = 48, height = 48}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none"><rect width="47" height="47" x="0.5" y="0.5" stroke={color} stroke-opacity="0.25" rx="11.5"></rect><path stroke={color} stroke-linecap="round" stroke-width="1.5" d="M20.5 24s-2-2.25-1.5-5.5c.409-2.655 2.472-5.37 5.763-5.495a.189.189 0 0 1 .19.227v0c-.562 2.815.88 5.62 3.101 7.437C30.036 22.291 32 24.523 32 27c0 5-3.428 8-8 8-4.571 0-7.306-3.033-8-6.5-.5-2.5 0-4.5.5-5.5"></path><path fill={color} d="M21 32a3 3 0 0 0 3 3c1.657 0 3-1 3-3 0-2.456-1.005-4.91-2.192-6.27-.282-.322-.741-.065-.77.362C23.831 29.03 21 29.302 21 32Z"></path></svg>
}

export default FireIcon