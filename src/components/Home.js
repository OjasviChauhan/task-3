import { useEffect, useState } from "react";

function Home(props) {
  console.log(props.data);
  //console.log(props.data?.hits?.pageURL);

  const [url, setUrl] = useState([]);
  useEffect(() => {
    props.data?.hits?.map((e) => setUrl(e.pageURL));
  }, []);

  console.log(url);

  return <div>Home</div>;
}

export default Home;
