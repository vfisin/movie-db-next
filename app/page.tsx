import HomePage from "@/app/features/home-page/HomePage";
import {MovieDBDataProvider} from "@/app/context/moviedb-context/provider";
import HomeLayout from "@/app/layout/home-page/HomeLayout";

export default function Home() {

    return <MovieDBDataProvider>
        <HomeLayout>
            <HomePage />
        </HomeLayout>
    </MovieDBDataProvider>
}
