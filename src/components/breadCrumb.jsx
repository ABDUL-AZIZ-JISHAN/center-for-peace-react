
const BreadCrumb = ({bgImg, title}) => {
    console.log(title);
    return (
<section className="breadcrumb-section" style={{backgroundImage: `url(${bgImg})`}}>
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h2 className="breadcrumb-title">{title}</h2>
      </div>
    </div>
  </div>
</section>

    );
}

export default BreadCrumb;
