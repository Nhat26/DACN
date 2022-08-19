import React from "react";
import Header from "../../components/Navbar/header";

function Home ({children})
{
    return(
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Home;
