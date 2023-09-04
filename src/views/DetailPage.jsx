import Navbar from "../components/Navbar";
import useFetch from "../hooks/useFetch";

export default function DetailPage() {
  const {
    data: girlgroup,
    isLoading,
    isError,
  } = useFetch(`http://localhost:3000/girlgroups/${4}`);

  return (
    <>
      <Navbar />
      {isLoading && (
        <div className="flex justify-center my-36">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      {!isLoading && (
        <div className="container mx-auto my-5">
          <div className="card w-1/2 mx-auto card-side bg-base-100 shadow-xl">
            <figure className="w-1/3 h-full">
              <img src={girlgroup.imgUrl} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {girlgroup.name}</h2>
              <p>Company: {girlgroup.company}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
