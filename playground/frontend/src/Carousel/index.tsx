/**
 * 实现一个轮播图模块
 */

import { useEffect, useRef, useState } from 'react'
import './index.css'

const SCREEN_WIDTH = window.screen.width;

export default function Carousel() {
  const [imgs] = useState([
    "https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1704531815335-dab68018e8a9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1704186502060-247ad4c77626?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ])
  const [curIdx, setCurrIdx] = useState(1)
  const container = useRef(null);
  const handlePrev = () => {
    setCurrIdx(curIdx === 1 ? imgs.length : curIdx - 1)
  }

  // 下一页
  const handleNext = () => {
    setCurrIdx(curIdx === imgs.length ? 1 : curIdx + 1);
  }

  useEffect(() => {
    setTransition();
  }, [curIdx]);

  const setTransition = () => {
    const distance = (1 - curIdx) * SCREEN_WIDTH;
    if (container.current) {
      // @ts-ignore
      container.current.style.transform = `translate3d(${distance}px, 0, 0)`;
    }
  }
  return (
    <div className='carousel'>
      <div className='carousel-container' ref={container}>
        {imgs.map((img, index) => <img src={img} key={img} className='carousel-item' style={{ left: index * SCREEN_WIDTH }} />)}
      </div>
      <div className='carousel-options'>
        <button className='carousel-left' onClick={handlePrev} />
        <button className='carousel-right' onClick={handleNext} />
        <ul className='carousel-pointers'>
          {imgs.map((_, index) => <li className={`carousel-pointer ${index === curIdx && 'carousel-pointer-active'}`} />)}
        </ul>
      </div>
    </div>
  )
}