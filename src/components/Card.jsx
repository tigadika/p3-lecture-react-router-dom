export default function Card({ girlgroup }) {
  return (
    <>
      <div className="card bg-base-100 shadow-lg">
        <figure className="h-36">
          <img src={girlgroup.imgUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{girlgroup.name}</h2>
          <p>{girlgroup.company}</p>
          <div className="card-actions">
            <button className="btn btn-primary">see detail</button>
          </div>
        </div>
      </div>
    </>
  );
}
