import React from 'react'
import "../../../css/main/questions.css"
import  Accordion  from './Accordion'

export default function QuestionsBox() {
  const faq={ask:'سوال تستی',answer:'جواب تستی'}
  return (
    <div className='questions-box '>
      <div className="overlay w-100 h-100">
        <div className='w-100 h-100 d-flex justify-content-center align-items-center '>
<Accordion faq={faq}/>
        </div>
      </div>
    </div>
  )
}
