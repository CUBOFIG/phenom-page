import Hero from "components/Hero/Hero";
import OptionsApp from "components/OptionsApp/OptionsApp";
// import { useFetchStatus } from "hooks/useOnLive";
// import { globalStore } from "store/stateGlobal"

const Home = () => {
  //const fetch = globalStore(state => state.fetch)

  // console.log(data, fetch)

  return (
    <>
      <Hero /> 
      <OptionsApp />
    </>
  );
};

export default Home;
