// 404.js
import Donut from "components/Donut"
import Head from "next/head";

const FourOhFour = () => {
  const fourohfour_text = "404 - This Page Could Not Be Found";
  return (
    <div style={{textAlign: "center"}} className='fullscreen'>
      <Head>
        <title>{fourohfour_text}</title>
      </Head>
      <Donut />
      <span className="title">{fourohfour_text}</span>
    </div>
  )
}

export default FourOhFour;