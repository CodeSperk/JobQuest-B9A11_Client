
const HomeBanner = () => {
  return (
    <div className="card-style px-4 md:px-10 lg:pl-20 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 pt-12">
        <div className="md:w-3/5 lg:w-1/2 text-center md:text-start space-y-4 max-w-[520px] my-6">
          <h1 className="">Unlock Your Career Potential with <span className="text-[var(--clr-focused)]">JobQuest</span></h1>
          <p>Find your dream job today! Explore a wide range of opportunities tailored to your skills and preferences with JobQuest</p>

          <a href="#footer">
              <button className="bg-[var(--clr-focused)] mt-6 px-8 py-2 lg:py-3 rounded-md text-[var(--clr-light-primary)] text-lg">
                Find Job Now
              </button>
          </a>

        </div>
        <div className="md-w-2/5 lg:1/2 md:mt-24">
        <img src="https://i.ibb.co/vdGSNNK/banner-bg-1.png" alt="" />
        </div>
      </div>
  );
};

export default HomeBanner;