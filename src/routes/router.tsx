import { createBrowserRouter } from "react-router-dom";
import { getUrlPath } from "@/routes/RouterUrl";
import App from "@/App";
import ProfissionalPageResult from "@/module/pages/ProfissionalPageResult";


 const {HomePageUrl, ProfissionalPageResultUrl} = getUrlPath();
 
 export const router = createBrowserRouter([
      {
         path:HomePageUrl,
         element:<App/>
      }, 
      {
          path:ProfissionalPageResultUrl,
          element:<ProfissionalPageResult/>
      }
 ])