import GamePage from "./GamePage"
import GamePage2 from "./GamePage2";
import { Instructions } from "../components/Instructions";
import DnDthree from "../components/DnDthree";
import DnDfour from "../components/DnDfour";
import DnDfive from "../components/DnDfive";
import DnDsix from "../components/DnDsix";
import DnDseven from "../components/DnDseven";

export const HomePage = () => {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-between", marginTop: "25px",flexDirection: "row",
  justifyContent: "space-between", alignItems: "baseline", marginLeft: "5rem",
  marginRight: "5rem", marginTop: "5rem"}}>
      <GamePage />
      <GamePage2 />
      <DnDthree />
      <DnDfour />
      <DnDfive />
      <DnDsix />
      <DnDseven />
      </div>
      <Instructions/>
    </div>
  );
};
export default HomePage;
