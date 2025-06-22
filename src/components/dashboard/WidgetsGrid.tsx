'use client'

import { useAppSelector } from "@/store"
import { SimpleWidget } from "./SimpleWidget"
import { IoCartOutline } from "react-icons/io5"

export const WidgetsGrid = () => {
  const isCart = useAppSelector(state => state.counter.count)

  return (
    <>
      <div className="flex flex-wrap p-2 items-center justify-center mt-4">
        {/* es como cuando iteras pero sin iterar */}
        <SimpleWidget
          title={isCart.toString()}
          subtitle="Productos agregados"
          label="Contador"
          icon={<IoCartOutline size={70} className="text-blue-600"></IoCartOutline>}
          href="/dashboard/counter"
        />
      </div>
    </>
  )
}
