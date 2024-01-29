import React from 'react';


const Footer = () => {


    const currYear = new Date().getFullYear();


    return (
        <footer id="footer">
                <div className="container">
                    <div className="sub_footer_wrapper">
                        <div className="foot_copyright">
                            <p>
                                ©️ {currYear} | Lapak Pushbike Tangerang. All Rights Reserved. <br/> Versi 1.0.0-Beta |
                                Powered by <a href="https://yantodev.my.id">YantoDev</a>
                            </p>
                        </div>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
