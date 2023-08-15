import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

const Contact = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }

    const navigateToAbout = () => {
        navigate('/about');
    }
    const navigateToPortfolio = () => {
        navigate('/portfolio');
    }

    const navigateToMore = () => {
        navigate('/more');
    }

    const navigateToEnd = () => {
        navigate('/end');
    }

    const navItems = [
        {link:"Home.", linkOnClick: navigateToHome},
        {link:"About.", linkOnClick: navigateToAbout},
        {link:"Portfolio.", linkOnClick: navigateToPortfolio},
        {link:"Blog.", linkOnClick: navigateToMore},
        {link:"Contact.", linkOnClick: navigateToEnd}
    ];

    return (
        <>
        <Breadcrumb navItems={navItems} />
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center p-6 space-x-8">
                    <div className="flex flex-col justify-center items-center justify-centerp-6">
                        <h4 className="text-5xl text-beige font-chilanka font-bold mb-4">
                            Thanks, for <span className="text-white">Visiting.</span>
                        </h4>
                        <h2 className="text-xl text-beige font-chilanka font font-semibold mb-4">
                            This website was created using:
                            TailwindCSS,
                            ReactJs, and 
                            Nodejs.
                        </h2>
                    </div>
                </div>
                <div className="flex justify-center p-6 mt-4 mb-4">
                    <Button text="Say hi" />
                </div>
            </div>
        </div>
        <Footer />
        </>
    );    
}

export default Contact;