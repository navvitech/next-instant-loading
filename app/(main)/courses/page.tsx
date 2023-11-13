import { DBConnect } from '../../mongo'
import Course from '../../Course'
import Link from 'next/link';

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
  return <main>{data?.map(item => (
    <Link key={item._id} href={`/courses/${item._id}`}>{item.title}</Link>
  ))}</main>;
}

// export const dynamic = "force-dynamic"; // on each request appi call will be made.
//  if it is not there api call will be made only on hard refresh
