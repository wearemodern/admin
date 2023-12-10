import React from 'react';
import MainSlider from './MainSlider';
import Categories from './Categories';
import SpecialProducts from './specialProducts/SpecialProducts';
export default function MainPage() {
  return (
    <div>
      <MainSlider/>
      <Categories/>
      <SpecialProducts/>
    </div>
  )
}
