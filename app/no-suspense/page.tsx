const getF = async () => {
  const data = await (await fetch('https://ip-7es0.onrender.com/delay')).json()
  return data;
}

export default async function Home() {
  const data = await getF()
  console.log(data)
  return <main>{data.msg}</main>;
}

export const dynamic = "force-dynamic"; // on each request appi call will be made.
//  if it is not there api call will be made only on hard refresh
