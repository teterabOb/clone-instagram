"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  BookmarkIcon,
  HeartIcon,
  MessageCircleIcon,
  SendIcon,
} from "lucide-react";
import { getMetadata } from "@/utils/pinata";

export default function InstagramPost() {
  const [isLiked, setIsLiked] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchMetadata = async () => {
      const metadata = await getMetadata();
      const jsonMetadata = await metadata.json();
      setImage(jsonMetadata.image);
      console.log(metadata);

      //console.log("metadata : ", await metadata.json());
    };
    fetchMetadata();
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleCommentToggle = () => {
    setShowCommentBox(!showCommentBox);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Comment submitted:", comment);
    setComment("");
    setShowCommentBox(false);
  };

  return (
    <Card className="border-0 rounded-lg overflow-hidden max-w-[400px] mx-auto my-2">
      <img
        src={image}
        alt="Post Image"
        width={400}
        height={400}
        className="object-cover aspect-square"
      />
      <CardHeader className="px-4 py-2">
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src={image} alt="@shadcn" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="text-sm font-medium">Acme Inc</div>
        </div>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <p className="text-sm text-muted-foreground">
          Breathtaking sunset over the ocean, captured in all its glory.
        </p>
      </CardContent>
      <CardFooter className="px-4 py-2 flex flex-col items-stretch">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={handleLike}>
              <motion.div
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <HeartIcon
                  className={`size-6 ${
                    isLiked ? "text-red-500 fill-red-500" : ""
                  }`}
                />
              </motion.div>
              <span className="sr-only">Like</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={handleCommentToggle}>
              <MessageCircleIcon className="size-6" />
              <span className="sr-only">Comment</span>
            </Button>
            <Button variant="ghost" size="icon">
              <SendIcon className="size-6" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
          <Button variant="ghost" size="icon">
            <BookmarkIcon className="size-6" />
            <span className="sr-only">Save</span>
          </Button>
        </div>
        {showCommentBox && (
          <form onSubmit={handleCommentSubmit} className="w-full">
            <Textarea
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full mb-2"
            />
            <Button type="submit" className="w-full">
              Post Comment
            </Button>
          </form>
        )}
      </CardFooter>
    </Card>
  );
}
