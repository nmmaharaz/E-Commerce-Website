import { twMerge } from "tailwind-merge";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({children, className}:ContainerProps) {
  return (
    <div className={twMerge("w-11/12 mx-auto", className)}>
        {children}
    </div>
  )
}
