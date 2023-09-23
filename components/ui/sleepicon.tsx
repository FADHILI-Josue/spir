import { FC } from 'react'

interface SleepiconProps {
  color: string,
  height?: number,
  width?: number
}

const Sleepicon: FC<SleepiconProps> = ({color, width = 48, height = 48}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none"><rect width="47" height="47" x="0.5" y="0.5" stroke={color} stroke-opacity="0.25" rx="11.5"></rect><path fill={color} fill-rule="evenodd" d="M23.226 12.565a.75.75 0 0 1 .028.827 10.199 10.199 0 0 0-1.504 5.349c0 4.858 3.381 8.93 7.92 9.984a.75.75 0 0 1-.34 1.461c-5.203-1.21-9.08-5.873-9.08-11.445 0-1.593.317-3.113.893-4.5a10.254 10.254 0 0 0-6.393 9.5c0 5.66 4.59 10.25 10.25 10.25 3.7 0 6.942-1.96 8.746-4.901a.75.75 0 0 1 1.278.784A11.743 11.743 0 0 1 25 35.49c-6.49 0-11.75-5.26-11.75-11.75 0-5.616 3.938-10.31 9.203-11.473a.75.75 0 0 1 .773.297Z" clip-rule="evenodd"></path></svg>
}

export default Sleepicon