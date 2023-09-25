import { FC } from 'react'

interface LogoProps {
    color: string,
    height?: number,
    width?: number
}

const Logo: FC<LogoProps> = ({color, width = 48, height = 48}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none"><rect width="47" height="47" x="0.5" y="0.5" stroke={color} stroke-opacity="0.25" rx="11.5"></rect><path fill={color} d="M24.75 18A4.25 4.25 0 0 1 29 13.75h5.25V15A4.25 4.25 0 0 1 30 19.25h-2a.75.75 0 0 0 0 1.5h2A5.75 5.75 0 0 0 35.75 15v-2a.75.75 0 0 0-.75-.75h-6A5.75 5.75 0 0 0 23.25 18v5.127A5.735 5.735 0 0 0 19 21.25h-6a.75.75 0 0 0-.75.75v2A5.75 5.75 0 0 0 18 29.75h5.25V35a.75.75 0 0 0 1.5 0V18Zm-1.5 10.25H18A4.25 4.25 0 0 1 13.75 24v-1.25H19A4.25 4.25 0 0 1 23.25 27v1.25Z"></path></svg>
}

export default Logo