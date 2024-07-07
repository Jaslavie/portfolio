import "../components.sass";

const Container = ({ title , description , img })=> {
  return (
    <div className="container">
      <div className="icon">
        <img src={img} />
      </div>

      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default Container;
