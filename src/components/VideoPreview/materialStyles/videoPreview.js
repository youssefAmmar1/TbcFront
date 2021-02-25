import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        minHeight: "100vh",
        [theme.breakpoints.down("md")]: {
            minHeight: "20vh"
        }
    },
    videoPlayer: {
        // marginTop: "1em",
        [theme.breakpoints.down("md")]: {
        width: "100%",
        }
    }
}));

export default useStyles;