import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import RegisterForm from "../RegisterForm/RegisterForm";
import SurveyForm from "../SurveyForm/SurveyForm";
import { TextField, Button, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Alert from "@mui/material/Alert";

import axios from "axios"; // Import Axios

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [netPromoterScore, setNetPromoterScore] = useState<number | null>(5);
    const [uiFeel, setUIFeel] = useState("");
    const [uiChallenges, setUIChallenges] = useState("");
    const [contentRelevance, setContentRelevance] = useState("");
    const [documentCategories, setDocumentCategories] = useState("");
    const [searchFeature, setSearchFeature] = useState("");
    const [searchFilters, setSearchFilters] = useState("");
    const [isSearchFilters, setIsSearchFilters] = useState("");
    const [performanceIssue, setPerformanceIssue] = useState("");
    const [isPerformanceIssue, setIsPerformanceIssue] = useState("");
    const [additionalFeatures, setAdditionalFeatures] = useState("");
    const [subscriptionInterest, setSubscriptionInterest] = useState("");
    const [openFeedback, setOpenFeedback] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [uploadDone, setUploadDone] = useState(false);
    // const handleSubmit = (event: { preventDefault: () => void }) => {
    //     event.preventDefault();
    //     console.log(openFeedback, fullName, email, subscriptionInterest, additionalFeatures,isPerformanceIssue,performanceIssue);
    //     console.log(netPromoterScore,isSearchFilters, searchFilters, searchFeature, documentCategories, contentRelevance,uiChallenges,uiFeel);

    // };
    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();

        // Create a data object to hold the form data
        const formData = {
            netPromoterScore,
            uiFeel,
            uiChallenges,
            contentRelevance,
            documentCategories,
            searchFeature,
            searchFilters,
            isSearchFilters,
            performanceIssue,
            isPerformanceIssue,
            additionalFeatures,
            subscriptionInterest,
            openFeedback,
            fullName,
            email,
            jobTitle
        };

        try {
            // Make a POST request to your API endpoint using Axios
            const response = await axios.post("https://contactus.orangesky-8ccaac73.eastus.azurecontainerapps.io/api/si/feedback", formData);

            // Handle the response if needed
            // console.log("Response from API:", response.data);
            setUploadDone(true);
            clearForms();

            handleClose();
        } catch (error) {
            // Handle errors
            console.error("Error submitting survey:", error);
        }
    };

    const clearForms = () => {
        setNetPromoterScore(5);
        setUIFeel("");
        setUIChallenges("");
        setContentRelevance("");
        setDocumentCategories("");
        setSearchFeature("");
        setSearchFilters("");
        setIsSearchFilters("");
        setPerformanceIssue("");
        setIsPerformanceIssue("");
        setAdditionalFeatures("");
        setSubscriptionInterest("");
        setOpenFeedback("");
        setFullName("");
        setEmail("");
        setJobTitle("");
    };
    const handleIsSearchFiltersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsSearchFilters((event.target as HTMLInputElement).value);
    };
    const handleIsPerformanceIssueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsPerformanceIssue((event.target as HTMLInputElement).value);
    };

    const handleSubscriptionInterestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubscriptionInterest((event.target as HTMLInputElement).value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        // setTimeout("", 4000);
        setOpen(false);
    };
    useEffect(() => {
        // Set a timeout to call the method after 2000 milliseconds (2 seconds)
        const timeoutId = setTimeout(handleClose, 4000);

        // Clean up the timeout when the component unmounts
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array to ensure the effect runs only once

    return (
        <div
            style={{
                backgroundColor: "#f3f4fr"
            }}
        >
            <Button
                style={{
                    backgroundColor: "cornflowerblue",
                    color: "white"
                }}
                onClick={handleClickOpen}
            >
                Feedback
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Thank You For Your FeedBack</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Thank you for actively participating in the beta testing phase of ReferSpecs.com. Your insights are invaluable in our journey to enhance
                        and optimize the platform. Kindly take a moment to provide us with your valuable feedback.
                    </DialogContentText>
                    <React.Fragment>
                        <form onSubmit={handleSubmit} action="/register">
                            <Divider />
                            <br></br>
                            <Typography component="legend">On a scale of 1 to 10 how would you rate your overall experience</Typography>
                            <Rating
                                name="netPromoterScore"
                                defaultValue={8}
                                max={10}
                                value={netPromoterScore}
                                onChange={(event, newValue) => {
                                    setNetPromoterScore(newValue);
                                }}
                            />
                            <Divider />
                            <br></br>

                            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    color="secondary"
                                    label="Did the user interface feel intuitive and user-friendly?"
                                    helperText="Please share your thoughts"
                                    multiline
                                    maxRows={4}
                                    onChange={e => setUIFeel(e.target.value)}
                                    value={uiFeel}
                                    fullWidth
                                    required
                                />
                            </Stack>
                            <Divider />
                            <br></br>

                            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    color="secondary"
                                    label="Were there any elements of the interface that you found challenging to use?"
                                    helperText="Please share your thoughts on challenges in using Referspecs"
                                    multiline
                                    maxRows={4}
                                    onChange={e => setUIChallenges(e.target.value)}
                                    value={uiChallenges}
                                    fullWidth
                                    required
                                />
                            </Stack>
                            <Divider />
                            <br></br>

                            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    color="secondary"
                                    label="Did the available specifications, standards, MIL-specs, and handbooks meet your research and operational needs?"
                                    helperText="Please share your thoughts on how we can meet your research and operational needs?"
                                    multiline
                                    maxRows={4}
                                    onChange={e => setContentRelevance(e.target.value)}
                                    value={contentRelevance}
                                    fullWidth
                                    required
                                />
                            </Stack>
                            <Divider />
                            <br></br>

                            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    color="secondary"
                                    label="Were there any specific documents or categories that you believe could be enhanced or added?"
                                    helperText="Please share your thoughts on what could be enhanced or added"
                                    multiline
                                    maxRows={4}
                                    onChange={e => setDocumentCategories(e.target.value)}
                                    value={documentCategories}
                                    fullWidth
                                    required
                                />
                            </Stack>
                            <Divider />
                            <br></br>

                            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    color="secondary"
                                    label="How effective was the search functionality in helping you locate the required documents?"
                                    helperText="Please share your thoughts on locating the required documents"
                                    multiline
                                    maxRows={4}
                                    onChange={e => setSearchFeature(e.target.value)}
                                    value={searchFeature}
                                    fullWidth
                                    required
                                />
                            </Stack>
                            <Divider />
                            <br></br>

                            {/* <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                            Were the provided filtering options (such as categories, industries) helpful in refining your searches?
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={isSearchFilters}
                            onChange={handleIsSearchFiltersChange}
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        type="text"
                        variant="outlined"
                        color="secondary"
                        label="If Yes , what is the Issue?"
                        helperText="Please share your issues"
                        multiline
                        maxRows={4}
                        onChange={e => setSearchFilters(e.target.value)}
                        value={searchFilters}
                        fullWidth
                        
                    />
                </Stack>
                <Divider />
                <br></br> */}

                            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">
                                        Did you encounter any performance issues, slow loading times, or technical glitches during your usage?
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={isPerformanceIssue}
                                        onChange={handleIsPerformanceIssueChange}
                                    >
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="No" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    color="secondary"
                                    label="If Yes , what is the Issue?"
                                    helperText="Please share your issues"
                                    multiline
                                    maxRows={4}
                                    onChange={e => setPerformanceIssue(e.target.value)}
                                    value={performanceIssue}
                                    fullWidth
                                />
                            </Stack>
                            <Divider />
                            <br></br>

                            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    color="secondary"
                                    label="Are there any features you would like to suggest for further improvement or enhancement on ReferSpecs.com?"
                                    helperText="Please suggest features for further improvement or enhancement."
                                    multiline
                                    maxRows={4}
                                    onChange={e => setAdditionalFeatures(e.target.value)}
                                    value={additionalFeatures}
                                    fullWidth
                                />
                            </Stack>
                            <Divider />
                            <br></br>

                            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">
                                        Would you be willing to subscribe to ReferSpecs.com for continued access to specifications and standards tailored to
                                        your needs?
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={subscriptionInterest}
                                        onChange={handleSubscriptionInterestChange}
                                    >
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="No" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </Stack>
                            <Divider />
                            <br></br>

                            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    color="secondary"
                                    label="Please feel free to provide any additional comments, suggestions, or concerns about your experience with ReferSpecs.com."
                                    helperText="Provide any additional comments"
                                    multiline
                                    maxRows={4}
                                    onChange={e => setOpenFeedback(e.target.value)}
                                    value={openFeedback}
                                    fullWidth
                                />
                            </Stack>
                            <Divider />
                            <br></br>
                            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                                <TextField
                                    type="email"
                                    variant="outlined"
                                    color="secondary"
                                    label="If you'd appreciate follow-up regarding your feedback, Kindly Share Your name and email"
                                    helperText="Kindly Share Your Email"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    fullWidth
                                    required
                                    sx={{ mb: 4 }}
                                />
                                <Divider />
                                <br></br>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    color="secondary"
                                    label="Full Name"
                                    helperText="Kindly Share Your Full Name"
                                    onChange={e => setFullName(e.target.value)}
                                    value={fullName}
                                    required
                                    fullWidth
                                    sx={{ mb: 4 }}
                                />
                            </Stack>

                            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    color="secondary"
                                    label="Job Title"
                                    // helperText="Provide any additional comments"
                                    multiline
                                    maxRows={4}
                                    onChange={e => setJobTitle(e.target.value)}
                                    value={jobTitle}
                                    fullWidth
                                />
                            </Stack>
                            <Divider />
                            <br></br>
                            <Button
                                variant="outlined"
                                color="secondary"
                                type="submit"
                                style={{
                                    float: "right"
                                }}
                            >
                                Submit
                            </Button>
                        </form>
                        {uploadDone && (
                            <Alert severity="success">
                                Thank you for your input— We will get bak to you!<div>{open}</div>
                            </Alert>
                        )}
                    </React.Fragment>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    {/* <Button onClick={handleClose}>Submit</Button> */}
                </DialogActions>
            </Dialog>
        </div>
    );
}
