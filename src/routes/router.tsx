import { createBrowserRouter } from "react-router-dom";
import { getUrlPath } from "@/routes/RouterUrl";
import App from "@/App";


 const {HomePageUrl} = getUrlPath();
 
 export const router = createBrowserRouter([
      {
         path:HomePageUrl,
         element:<App/>
      }
 ])