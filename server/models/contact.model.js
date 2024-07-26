import { model, Schema } from 'mongoose';

const ContactSchema = new Schema(
    {
        contactName: {
            type: String,
            required: [true, "Name is required!"],
            minlength: [2, "Name must be at least 2 characters."]
        },
        contactEmail: {
            type: String,
            required: [true, "Email is required!"],
            minlength: [8, "Email must be at least 8 characters long."]
        },
        contactComment: {
            type: String,
            required: [true, "Your question or comment is required!"],
            minlength: [10, "Your comment or question must be at least 10 characters."]
        }
    }
);

const Contact = model("Contact", ContactSchema);
export default Contact;