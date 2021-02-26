import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "space-around",
        minHeight: "15vh",
        backgroundColor: "rgba(4,241,170,255)"

    },
    navAndSocials: {
        marginTop: "2vh",
        display: "flex",
        // alignItems: "center",
        justifyContent: "start"
    },
    firstNav: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 0.1
        // marginRight: "10vh"
    },
    secondNav: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 0.5
    },
    followUs: {
        display: "flex",
        alignItems: "center"
        // flexDirection: "column",
        // flexGrow: 0.8
    },
    copyright: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center"
    }
}));

export default useStyles;
