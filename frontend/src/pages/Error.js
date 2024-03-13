import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError(ErrorPage);

  let title = "An Error occured";
  let message = "Something went wrong"

  if(error.status === 404) {
    title = "Page not found!"
    message = "Page requested not found"
  }

  if(error.status === 500){
    message = error.data.message;
  }


    return(
      <>
      <MainNavigation/>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
      </>
      
    )
};

export default ErrorPage;