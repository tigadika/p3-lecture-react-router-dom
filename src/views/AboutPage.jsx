import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen container mx-auto my-5">
        <div className="card w-1/2 mx-auto bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://yoona.id/wp-content/uploads/2023/02/Konser-Itzy.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">About</h2>
            <p>ini adalah halaman about</p>
            <div className="card-actions justify-end">
              <a className="btn">Contact</a>
              <a className="btn">Address</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
