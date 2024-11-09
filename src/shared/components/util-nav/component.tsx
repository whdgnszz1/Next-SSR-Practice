'use client'

import { useRouter } from 'next/navigation'

export const UtilNav = () => {
  const router = useRouter()

  const menuItems = [
    { title: '전체 상품', path: '/main' },
    { title: '베스트 셀러', path: '/best-seller' }
  ]

  const onClickMenu = (path: string) => {
    router.push(path)
  }

  return (
    <nav className='relative flex justify-end'>
      <ul className='flex'>
        {menuItems.map((item, index) => (
          <li
            key={item.title}
            className={`cursor-pointer text-[14px] text-[#595959] ${index !== 0 ? 'relative ml-2 pl-2' : ''} ${
              index !== 0
                ? 'before:absolute before:left-0 before:top-[4px] before:text-[8px] before:text-[#D6D6D6] before:content-["|"]'
                : ''
            } `}
            onClick={() => onClickMenu(item.path)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  )
}
