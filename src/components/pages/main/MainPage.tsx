import { MainBody } from './body'
import { MainHeader } from './header'

export const MainPage = () => {
  return (
    <div className='flex w-full flex-col'>
      <div className='mx-auto flex w-[944px] flex-col'>
        <MainHeader />
        <MainBody />
      </div>
    </div>
  )
}
