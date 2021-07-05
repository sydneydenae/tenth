import React from 'react'

//must include commented lines below on whatever page the Tabs component is being used
// const navigation = [
//     { name: 'Dashboard', href: '#', current: true },
//     { name: 'Team', href: '#', current: false },
//     { name: 'Projects', href: '#', current: false },
//     { name: 'Calendar', href: '#', current: false },
//   ]

export default function Tabs() {
  return (
    <div className="flex space-x-4">
    {navigation.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className={classNames(
          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          'px-3 py-2 rounded-md text-sm font-medium'
        )}
        aria-current={item.current ? 'page' : undefined}
      >
        {item.name}
      </a>
    ))}
  </div>
  )
}
