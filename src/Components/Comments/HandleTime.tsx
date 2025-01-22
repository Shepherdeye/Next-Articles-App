
import { formatDistanceToNow } from "date-fns";
import { CommentWithUSer } from "@/utils/types";

interface RelativeTimeProps {
    comment: CommentWithUSer; // ISO string or a date string
}

const RelativeTime: React.FC<RelativeTimeProps> = ({ comment }) => {
    if (!comment) return null;

    const formattedTime = formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true });

    return <span>{formattedTime} </span>;
};

export default RelativeTime;
