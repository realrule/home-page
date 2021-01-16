import React, { useState } from 'react'

const navList = [
  { label: '首頁', link: '/', level: 1 },
  {
    label: '產品介紹', link: '/products', level: 1, children: [
      { label: '智慧托板', link: '/products', level: 2 },
      { label: '智慧刀架', link: '/products', level: 2 },
      { label: 'T型定位螺帽', link: '/products', level: 2 },
      { label: 'TM 協作型機器人', link: '/products', level: 2 },
      { label: '雷射量刀器', link: '/products', level: 2 },
      { label: '超音波加工機', link: '/products', level: 2 },
      { label: '彈性製造系統規劃', link: '/products', level: 2 },
      { label: '技術服務', link: '/products', level: 2 },
    ]
  },
  {
    label: '專利技術', link: '/patents', level: 1, children: [
      { label: '托板識別智慧加工系統', link: '/patents', level: 2 },
      { label: '刀具托板系統及刀具托板', link: '/patents', level: 2 },
      { label: '智慧刀具座', link: '/patents', level: 2 },
    ]
  },
  { label: '機器商業價值', link: 'http://machinecp.azurewebsites.net/index_tw', level: 0 }
]

const Navigation = ({ activeNav, setActiveNav }) => (
  <div style={{ backgroundColor: '#00a326' }}>
    <div>
      {navList.map((nav, i) => (
        <div className="linkLevel1">
          <div
            onMouseEnter={() => setActiveNav(i)}
          >
            {nav.label}
          </div>
          {nav.children ?
            <div
              onMouseEnter={() => setActiveNav(i)}
              onMouseLeave={() => setActiveNav(null)}
              className="linkLevel2-wrapper"
              style={{ display: activeNav === i ? 'block' : 'none' }}
            >
              {nav.children.map((navChild, idx) =>
                <div className="linkLevel2" >
                  {navChild.label}
                </div>
              )}</div> :
            null
          }
        </div>
      ))}
    </div>
  </div>
)

export default function Header() {
  const [activeNav, setActiveNav] = useState(null)
  return (
    <section>
      <header className="header">
        <div>
          <img className="logoImg" src="/images/logo-zh.svg" alt="logo" />
          <span className="logo">
            精密科技有限公司
          </span>
          <div className="logoText">Real Rule Precision Technology Co. Ltd.</div>
        </div>
        <div className="slogan">
          <span className="sloganText">
            觀功念恩，代人著想
            </span>
          <img src="/images/logo.svg" style={{ height: '30px' }} />
        </div>
      </header>
      <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
    </section>
  )
}