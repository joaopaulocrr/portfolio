import { ReactNode } from "react"


const Container = ({children} : {children: ReactNode}) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-15">
        {children}
    </div>
  )
}

export default Container