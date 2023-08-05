import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google";

import '../globals.css'

export const metadata = {
    title: 'Verse',
    description: 'Discover a vibrant social media experience with Verse - the innovative platform that combines the best of Threads with an array of additional features. Join diverse communities, engage in meaningful conversations, and connect with like-minded individuals from around the world. Embrace a new dimension of social networking with Verse, where limitless possibilities await.'
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={`bg-dark-1 ${inter.className}`} >
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}