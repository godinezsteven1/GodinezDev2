import { redirect } from "next/navigation";

export default function HomePage() {
    redirect("/About");
    return null;
}

