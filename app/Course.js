import mongoose from "mongoose";
const { Schema } = mongoose;

const courseSchema = Schema(
    {
        title: {
            type: String,
            max: 150,
        },
        slug: {
            type: String,
            max: 150,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
        },
        rating: {
            type: Number,
        },
        enrollments: {
            type: Number,
        },
        imageUrl: {
            type: String,
        },
        instructor: {
            type: Schema.Types.ObjectId, ref: "User"
        }
    },
    { timestamps: true }
);

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;