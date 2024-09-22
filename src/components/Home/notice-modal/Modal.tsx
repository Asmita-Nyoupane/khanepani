"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { newsData } from "../news/news-data";
import Image from "next/image";


export function NewsModal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Automatically open the modal after 3 seconds
        const timer = setTimeout(() => {
            setOpen(true);
        }, 3000);

        // Cleanup the timeout when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    const latestNews = newsData[2]; // Assuming the latest news is the first item

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px] space-y-4 h-[80vh] overflow-y-scroll scrollbar-hide">
                <DialogHeader className="space-y-4">
                    <DialogTitle className="text-primaryColor w-[90%] mx-auto ">{latestNews.title}</DialogTitle>

                </DialogHeader>
                <div className="relative   w-full p-2">
                    <Image
                        src={latestNews.image}
                        alt={latestNews.title}
                        height={300}
                        width={300}

                        className="rounded-lg object-cover "
                    />
                </div>
                <DialogDescription>
                    {latestNews.description}
                </DialogDescription>
                <DialogFooter>
                    <Button className="bg-primaryColor hover:bg-primaryColor" onClick={() => setOpen(false)}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
