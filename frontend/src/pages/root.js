import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootPage = () => {
    // const navigation = useNavigation();

    return (
        <>
            <MainNavigation />
            {/* {navigation.state === 'loading' && <h1>is loadin...</h1>} */}
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default RootPage;