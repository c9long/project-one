import { BottomNavigation, Box, Container, Paper, Typography } from "@mui/material";
import CustomizedAccordions from "../components/Accordion";
import ImageList from "../components/ImageList";
import BasicModal from "../components/Modal";


const Tour = () => {
    return (
        <Container sx={{
            width: 900
        }}>
            <Typography variant="h3" component="h1" marginTop={3}>
                Explore the World in Vegas
            </Typography>
            <Box marginTop={3} sx={{ display: "flex" }}>
                <img
                    src="https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg"
                    alt=""
                    height={225}
                />
                <ImageList />
            </Box>
            <Box>
                <Typography variant="h6" component="h4" marginTop={3}>
                    About this tour
                </Typography>
                <Typography variant="paragraph" component="p" marginTop={3}>
                    lorem anim sit consectetur do id anim sit qui cupidatat sit officia deserunt irure laboris voluptate. minim tempor pariatur aute Excepteur nisi esse laborum enim in velit in nisi ad deserunt reprehenderit consectetur minim. ex adipiscing ea enim ipsum esse magna reprehenderit nostrud ex id dolore tempor est do proident cupidatat et magna. sunt irure irure aliqua lorem labore fugiat mollit amet do nulla mollit sunt enim nisi esse exercitation irure. laborum cupidatat officia nisi lorem laboris occaecat proident veniam non dolore sunt occaecat id fugiat consequat aute velit Duis.
                </Typography>
            </Box>
            <Box marginBottom={10}>
                <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                    Frequently Asked Questions
                </Typography>
                <CustomizedAccordions />
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <BasicModal />
                </BottomNavigation>
            </Paper>
        </Container>
    );
}

export default Tour;