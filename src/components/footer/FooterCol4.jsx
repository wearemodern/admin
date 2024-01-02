import React from "react";

export default function FooterCol4() {
  const socialMedia = [
    { name: "اینستاگرام", icon: "bi bi-instagram" },
    { name: "تلگرام", icon: "bi bi-telegram" },
    { name: "توییتر", icon: "bi bi-twitter" },
  ];
  const contact=[
    {title:'آدرس:',text:'سعادت‌آباد-شهرک مخابرات-کوچه بیست و سوم'},
    {title:'تلفن:',text:'021-22222222'},
    {title:'ایمیل:',text:'deekala@gmail.com'},
  ]
  return (
    <div className="d-flex flex-column align-items-center justify-content-center me-lg-1 mr-lg-1 col-12 col-md-3 mt-4 mt-sm-0 w-100">
      <span className="text-secondary text-center">ارتباط با ما</span>
<div>
    {contact.map((item,index)=>{
        return(
           <div className="d-flex text-secondary"key={index} >
             <b>{item.title}</b>
            <span className="mr-1">{item.text}</span>
           </div>
        )
    })}
</div>
    </div>
  );
}
