import { DBConnect } from '../../mongo'
import Course from '../../Course'
import Image from 'next/image'

const getCourseDetails = async (courseId) => {
    try {
        await DBConnect()
        const course = await Course.findById(courseId)
        return course;
    } catch (error) {
        console.log(error)
    }
}

const page = async ({
    params
}) => {
    const { courseId } = params;

    const { title, description, imageUrl } = await getCourseDetails(courseId);
    return (
        <>
            <Image
                src={imageUrl}
                width={100}
                height={100}
                alt={title}
            />
            <h1 className="text-2xl md:text-4xl">{title}</h1>
            <p>{description}</p>
        </>
    );
};

export default page;