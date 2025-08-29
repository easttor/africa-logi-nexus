import { useNavigate } from "react-router-dom";
import { LandingPage } from "@/components/LandingPage";

const Index = () => {
  const navigate = useNavigate();

  const handleViewDemo = () => {
    navigate("/app");
  };

  return <LandingPage onViewDemo={handleViewDemo} />;
};

export default Index;
