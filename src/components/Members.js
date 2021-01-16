import React from 'react';
import './Members.css';

const memberList = [
  {
    name: '林肇遠', image: 'member-1.jpg', postion: '技術顧問', desc: '台灣科技大學機械碩士，曾任友嘉實業集團研發中心執行副總，CNC工具機研發30年經驗，研發經營管理，新產品開發商品企劃，領導團隊開工具機產品獲多項專利及研發創新競賽優等獎項。現任台灣智能儀器發明學會理事'
  },
  { name: '陳坤濯', image: 'member-4.png', postion: '科技顧問', desc: '清大化工碩士，曾在工研院化工所製程研究室擔任國科會專案計劃主持人，後加入台塑六輕擴廠工程，擔任製程工廠廠長。專長為製程開發，設計模擬，建廠規劃，工廠操作管理營運。' },
  {
    name: '郭加鋒', image: 'member-2.png', postion: '設計專員', desc: '屏東科技大學機械系新可大設計課長，設計開發、專案管理、TPS改善推行'
  },
  {
    name: '李偉銘', image: 'member-3.png', postion: '設計專員', desc: '虎尾科技大學資工系專任講師聖森雲端科技- 軟體工程師碩利資訊 - 軟體工程師'
  },
  { name: '吳宜臻', image: 'member-5.jpg', postion: '業務專員', desc: '' },
]

export default function Members() {
  return (
    <section className="secCenter secPadding secBg">
      <h2 className="secTitle">經營與研究團隊</h2>
      <div className="Members-wrapper">
        {memberList.map((member, i) => (
          <div className="Members-member-wrapper">
            <img src={`/images/${member.image}`} />
            <div>{member.name}</div>
            <div>{member.postion}</div>
            {member.desc ? <div>{member.desc}</div> : null}
          </div>
        ))}
      </div>
    </section>
  )
}