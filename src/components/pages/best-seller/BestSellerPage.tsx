import { BestSellerBody } from './body'
import { BestSellerHeader } from './header'

export const BestSellerPage = () => {
  return (
    <div className='flex w-full flex-col'>
      <div className='mx-auto flex w-[944px] flex-col'>
        <BestSellerHeader />
        <BestSellerBody />
      </div>
    </div>
  )
}
