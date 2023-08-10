import { Typography,Box,styled } from '@mui/material';
import banner from './banner.jpg';

const Image =styled(Box)`
    background: url(${banner}) ;
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction:column;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height:1;
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () =>{
    return(
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>BloggingShuru</SubHeading>   
        </Image>
    )
}

export default Banner;