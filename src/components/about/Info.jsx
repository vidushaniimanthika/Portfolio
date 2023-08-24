import React from 'react'

const Info = () => {
  return (
   <div className="about__info grid">
    <div className="about__box">
    <i class='bx bxs-award about__icon'></i>

        <h3 className="about__title">Experince</h3>
        <span className="about__subtitle">Computer Trainee </span>
    </div>

    <div className="about__box">
    <i class='bx bxs-school about__icon'></i>
        <h3 className="about__title ">Education</h3>
        <span className="about__subtitle">BIT Degree  Saegis Campus  </span>
    </div>

    <div className="about__box">
    <i class='bx bxs-ghost about__icon'></i>
        <h3 className="about__title ">Complete Project</h3>
        <span className="about__subtitle">4+ Campus Project</span>
    </div>

    


   </div>
  )
}

export default Info