import React from 'react'
import Card from './components/card.jsx'


const jobOpenings = [
  {
    brandLogo: "https://img.icons8.com/color/96/google-logo.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://img.icons8.com/ios-filled/100/000000/mac-os.png",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://img.icons8.com/color/96/amazon.png",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://img.icons8.com/color/96/meta.png",
    companyName: "Meta",
    datePosted: "3 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 58,
    location: "Remote, India"
  },
  {
    brandLogo: "https://img.icons8.com/color/96/netflix.png",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: 70,
    location: "Remote"
  },
  {
    brandLogo: "https://img.icons8.com/color/96/microsoft.png",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 48,
    location: "Noida, India"
  },
  {
    brandLogo: "https://img.icons8.com/color/96/tesla-logo.png",
    companyName: "Tesla",
    datePosted: "6 weeks ago",
    post: "Software Engineer – Automation",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 52,
    location: "Pune, India"
  },
  {
    brandLogo: "https://cdn.mos.cms.futurecdn.net/tQxVwcJSowYD7xwWDYidd9.jpg",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://img.icons8.com/color/96/airbnb.png",
    companyName: "Airbnb",
    datePosted: "8 days ago",
    post: "Frontend Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: 62,
    location: "Remote, India"
  },
  {
    brandLogo: "https://img.icons8.com/color/96/ibm.png",
    companyName: "IBM",
    datePosted: "10 weeks ago",
    post: "Cloud Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Kolkata, India"
  }
];


const App = () => {
  return (
    <div className="parent">
      {jobOpenings.map((job, index) => (
        <div key={index}>
          <Card 
            logo={job.brandLogo}
            company={job.companyName}
            datePosted={job.datePosted}
            post={job.post}
            tag1={job.tag1}
            tag2={job.tag2}
            pay={job.pay}
            location={job.location}
          />
        </div>
      ))}
    </div>
  )
}

export default App
