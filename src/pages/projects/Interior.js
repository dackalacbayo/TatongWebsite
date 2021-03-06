import React, { Component } from "react";
import Link from "gatsby-link";
import PageHeader from "../../components/shared/PageHeader";
import ContactUs from "../../components/shared/ContactUs";
import Projects from "../../components/shared/Projects";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";

const interiorItems = [
  {
    number: "01",
    furnitureName: "Interior 1",
    name: "Interior Name",
    materials:'Lorem ipsum dolor sit amet, omnis tractatos ad sea.',
    dimensions:'Lorem ipsum dolor sit amet, omnis tractatos ad sea.',
    id: "v-pills-fur1",
    aria: "v-pills-fur1-tab",
    href: "#v-pills-fur1",
    desc1:
      "Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
    desc2:
      "Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque. Duo elitr abhorreant eu, ex vis mundi quaestio intellegebat.",
    display: true,
    icons: "bene fas fa-stopwatch",
    image: image1,
    active: true
  },
  {
    number: "02",
    furnitureName: "Interior 2",
    name: "Interior Name",
    materials:'Lorem ipsum dolor sit amet, omnis tractatos ad sea.',
    dimensions:'Lorem ipsum dolor sit amet, omnis tractatos ad sea.',
    id: "v-pills-fur2",
    aria: "v-pills-fur2-tab",
    href: "#v-pills-fur2",
    desc1:
      "Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
    desc2:
      "Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque. Duo elitr abhorreant eu, ex vis mundi quaestio intellegebat.",
    display: true,
    icons: "bene fas fa-mobile-alt",
    image: image2,
    active: false
  },
  {
    number: "03",
    furnitureName: "Interior 3",
    name: "Interior Name",
    materials:'Lorem ipsum dolor sit amet, omnis tractatos ad sea.',
    dimensions:'Lorem ipsum dolor sit amet, omnis tractatos ad sea.',
    id: "v-pills-fur3",
    aria: "v-pills-fur3-tab",
    href: "#v-pills-fur3",
    desc1:
      "Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
    desc2:
      "Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque. Duo elitr abhorreant eu, ex vis mundi quaestio intellegebat.",
    display: true,
    icons: "bene fas fa-users",
    image: image3,
    active: false
  },
  {
    number: "04",
    furnitureName: "Interior 4",
    name: "Interior Name",
    materials:'Lorem ipsum dolor sit amet, omnis tractatos ad sea.',
    dimensions:'Lorem ipsum dolor sit amet, omnis tractatos ad sea.',
    id: "v-pills-fur4",
    aria: "v-pills-fur4-tab",
    href: "#v-pills-fur4",
    desc1:
      "Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.?",
    desc2:
      "Lorem ipsum dolor sit amet, omnis tractatos ad sea. Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque. Duo elitr abhorreant eu, ex vis mundi quaestio intellegebat.",
    display: true,
    icons: "bene fas fa-globe",
    image: image4,
    active: false
  }
];


class Interior extends Component {
  render;
  render() {
    return (
      <div className="pt-5">
        <PageHeader
          title={"Interior Design"}
          breadcrumbItem1={"Home /"}
          href1={"../"}
          breadcrumbItem2={"Projects /"}
          href2={"../projects"}
          breadcrumbItem3={"Interior"}
          active3={"active"}
        />
        <Projects data={interiorItems} />
      </div>
    );
  }
}

export default Interior;
