import { DBConnect } from '../mongo'
import Course from '../Course'

const getF = async () => {
  const data = await (await fetch('https://ip-7es0.onrender.com/delay')).json()
  return data;
}


async function getCourses() {
  try {
    await DBConnect()
    const courses = await Course.find({})
    return courses;
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  const data = await getCourses()
  console.log(data)
  return <main>{data?.map(item => (
    <>{item.title}</>
  ))}</main>;
}

export const dynamic = "force-dynamic"; // on each request appi call will be made.
//  if it is not there api call will be made only on hard refresh
