import React, { Component } from 'react'
import Link from 'gatsby-link'
import PageHeader from "../../components/shared/PageHeader";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import user from "../../assets/images/image4.jpg";

const benefits = [
    {title: 'Never miss a deadline', desc:"Manage your deadlines, save more time on follow ups", display:true, icons:'fas fa-stopwatch',image:image1, active:true, id:'a', href:'#a', dataSlide:'0'},
    {title: 'Attain Visibility', desc:"Keep track of your mobile workforce", display:true,icons:'fas fa-mobile-alt',image:image2, active:false, id:'aa', href:'#aa', dataSlide:'1'},
    {title: 'Team Collaborate', desc:"Share your works collaboratively on projects with anyone ", display:true, icons:'fas fa-users',image:image3, active:false, id:'aaa', href:'#aaa', dataSlide:'2'},
    {title: 'Eliminate Geographic Barriers', desc:"Allow virtual meetings and trainings without having to find a location or make travel arrangements", display:false,icons:'fas fa-globe',image:image1, active:false, id:'aaaa', href:'#aaaa', dataSlide:'3'},
    {title: 'Optimize decision making', desc:"Make your decisions as good as possible", display:false, icons:'fas fa-eye',image:image2, active:false, id:'aaaaa', href:'#aaaaa', dataSlide:'4'},
    {title: 'Access anytime anywhere', desc:"Availability of information anytime & anywhere ", display:false,icons:'fas fa-cogs',image:image3, active:false, id:'aaaaaa', href:'#aaaaaa', dataSlide:'5'},
]

const TabImage = ({image,active,id}) => (
  <div className={active ? "carousel-item active text-center" : "carousel-item text-center" }>
      <img className="img-fluid" src={image} alt="First slide"/>
  </div>
)
const TabDesc = ({id, href, title, desc, icons, dataSlide, active }) => (
  <li data-target="#carouselExampleIndicators" data-slide-to={dataSlide} className={active ? "img1 active mb-4 w-100" : "img1 mb-4 w-100" }>
    <div className="tabdesc pointer col-12 col-md-12 col-lg-12 py-3">
        <h5><i className={`bene ${icons}`}></i>{title}</h5>
        <p className="text-left">{desc}</p>
    </div>
  </li>
)

const testimonials = [
  {image:user,text:'Et vivendo comprehensam Impetus et Impetus et pe pe ',name:'Marta Markes',active:true, display:true},
  {image:user,text:'Eam, dicam impetus et Impetus et pe Impetus et pe t',name:'Valentin Kim',active:false, display:true},
  {image:user,text:'Impetus et pertinax etImpetus et pe Impetus et pe vel, fugit',name:'Mark Markus',active:false, display:true},
]

class Furniture extends Component {
  render(){
    return(
   <div className="py-3 mb-5">
   <PageHeader
     title={"Furniture"}
     breadcrumbItem1={"Home /"} href1={"../"}
     breadcrumbItem2={"Projects /"} href2={"../projects"}
     breadcrumbItem3={"Furniture"} active3={"active"}
   />
       <div className="row justify-content-center text-center section-intro">
       <div className="col-12 col-md-9 col-lg-9 pb-5 py-5">
       <div className="page-title text-center">
           <h5 className="title">Projects</h5>
           <div className="space-10"></div>
       </div>
            <div className="">
             <h2 className="display-4 py-3 font-italic"><i className="fas black fa-quote-left"></i> Creative Meets Living <i className="fas black fa-quote-right"></i></h2>
            </div>
            <span className="lead">Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque. Duo elitr abhorreant eu, ex vis mundi quaestio intellegebat.</span>
       </div>
       </div>

       <div className="row justify-content-around align-items-center pt-3">
           <div>
              <div id="carouselExampleIndicators" className="carousel slide" data-interval="2500" data-ride="carousel">
                 <ol className="carousel-indicators position-relative">
                   {benefits.filter((benes) => {return (benes.display === true)})
                       .map((benes) => {return <TabDesc {...benes}/>})}
                 </ol>
                  <div className="carousel-inner text-center my-5" role="listbox">
                  {benefits.filter((benes) => {return (benes.display === true)})
                      .map((benes) => {return <TabImage {...benes}/>})}
                  </div>
              </div>
           </div>
       </div>

       <div className="row justify-content-center text-center section-outro">
           <div className="col-lg-4 col-md-5">
               <h6>Detailed Overview</h6>
               <p>Lorem ipsum dolor sit amet, omnis tractatos ad sea. Duo elitr abhorreant eu, ex vis mundi quaestio intellegebat. </p>
                  <Link to="/benefits"><button className="btn viewMore mr-2 btn-lg" >View More &rsaquo;</button></Link>
           </div>
       </div>
   </div>

    )
  }
}

export default Furniture;
