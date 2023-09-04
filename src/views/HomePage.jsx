import Card from "../components/Card";
import Navbar from "../components/Navbar";
import useFetch from "../hooks/useFetch";

export default function HomePage() {
  const { data, isLoading, isError } = useFetch(
    `http://localhost:3000/girlgroups`
  );

  return (
    <>
      <Navbar />
      {isLoading && (
        <div className="flex justify-center my-36">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      {!isLoading && (
        <div className="container mx-auto my-5 grid grid-cols-4 xl:grid-cols-5 gap-4">
          {data?.map((el) => {
            return <Card key={el.id} girlgroup={el} />;
          })}
        </div>
      )}
    </>
  );
}
