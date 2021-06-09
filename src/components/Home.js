import { useEffect, useState } from "react";

function Home(props) {
  console.log(props.data);
  //console.log(props.data?.hits?.pageURL);
  const [url, setUrl] = useState([]);

  useEffect(() => {
    props.data?.hits?.map((e) => setUrl(e.pageURL));
  }, []);

  // console.log(url);

  return <div>{props.data !== null && <img src={url} />}</div>;
}

export default Home;
