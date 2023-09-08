import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div>
            {/* <div className={styles.container}>
                <div className={styles.search}>
                    <h1 className={styles.h1_labels}>Search</h1>
                    <span>Access and download over 60,000 standards and Specifications</span>
                </div>

                <div className={styles.ai}>
                    <h1 className={styles.h1_labels}>Conversational AI</h1>
                    <span>Ask questions like: ""What are the basic requirements of MIL-STD-461?"</span>
                </div>
            </div> */}
            <div className={styles.terms_privacy_copyright_row}>
                <div>Terms | Privacy</div>
                <div>@Single Insight LLC</div>
            </div>
        </div>
    );
};

export default Footer;
