import React from 'react'
import Layout from '../components/Layout'
import Members from '../components/Members'
import './style.css'

export default function Home() {
  return (
    <div>
      <Layout>
        <>
          <img src="/images/banner3.jpg" style={{ width: '100%' }} />
          <section className="secCenter secPadding">
            <h2 className="secTitle">創業經營理念</h2>
            <p className="secCnt">創立於2018年8月1日</p>
            <p className="secCnt">
              以創新科技、技術研發智慧化國產關鍵零組件、提供智慧解決方案為目標，<br />建立以『觀功念恩、代人著想』為核心理念之團隊組織，<br />經營客製化技術服務，客戶至上，在利他中行自利。<br />尋求理念契合工作夥伴及企業合作夥伴，為下一代青年夥伴設立一個創業平台
          </p>
          </section>
          <Members />
        </>
      </Layout>

    </div>
  )
}