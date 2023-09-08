import React from "react";
import styles from "./SearchAI.module.css";

const SearchAI = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.search}>
                    <h1 className={styles.h1_labels}>Search</h1>
                    <span className={styles.span_labels}>Access and download over 60,000 standards and Specifications</span>
                </div>

                <div className={styles.ai}>
                    <h1 className={styles.h1_labels}>Conversational AI</h1>
                    <span className={styles.span_labels}>Ask questions like: "What are the basic requirements of MIL-STD-461?"</span>
                </div>
            </div>
           
        </div>
    );
};

export default SearchAI;
