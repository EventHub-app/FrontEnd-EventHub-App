import { createBrowserRouter } from "react-router-dom";
import { getUrlPath } from "@/routes/RouterUrl";
import App from "@/App";
import ProfissionalPageResult from "@/module/pages/ProfissionalPageResult";
import LoginPage from "@/module/pages/LoginPage";
import Dashbord from "@/module/components/Dashbord/Dashbord";


 const {HomePageUrl, ProfissionalPageResultUrl, LoginPageUrl, DashbordPageUrl} = getUrlPath();
 
 export const router = createBrowserRouter([
      {
         path:HomePageUrl,
         element:<App/>
      }, 
      {
          path:ProfissionalPageResultUrl,
          element:<ProfissionalPageResult/>
      },
      {
          path:LoginPageUrl,
          element:<LoginPage/>
      },
      {
          path:DashbordPageUrl,
          element:<Dashbord/>
      }
 ])