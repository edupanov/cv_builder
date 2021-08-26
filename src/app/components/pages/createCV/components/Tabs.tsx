import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PersonalDetails from "./PersonalDetails";
import ProfessionalSummary from "./ProfessionalSummary";
import EmploymentHistory from "./EmploymentHistory";
import Education from "./Education";
import WebsitesSocialLinks from "./WebsitesSocialLinks";
import Skills from "./Skills";
import Hobbies from "./Hobbies";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100%',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Personal Details" {...a11yProps(0)} />
                <Tab label="Professional Summary" {...a11yProps(1)} />
                <Tab label="Employment History" {...a11yProps(2)} />
                <Tab label="Education" {...a11yProps(3)} />
                <Tab label="Websites & Social Links" {...a11yProps(4)} />
                <Tab label="Skills" {...a11yProps(5)} />
                <Tab label="Hobbies" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <PersonalDetails/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ProfessionalSummary/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <EmploymentHistory/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Education/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <WebsitesSocialLinks/>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Skills/>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <Hobbies/>
            </TabPanel>
        </div>
    );
}