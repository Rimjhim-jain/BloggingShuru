import {Box,Typography,styled} from '@mui/material';
import {addElipsis} from '../../../utils/common-utils.js';
import {API} from '../../../service/api.js';


const Container = styled(Box)`
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    height: 350px; 
    display:flex;
    align-items:center;
    flex-direction:column;
    &>p{
        padding:0 5px 5px 5px;
    } 

`;

const Text = styled(Typography)`
    color:#878787;
    font-size:12px;
    text-transform: capitalize;
`

const Image = styled('img')({
    width: '100%',
    height: '170px',
    borderRadius: '10px 10px 0 0',
    
})
    
const Heading =  styled(Typography)`
    font-size:18px;
    font-weight:600;
    text-transform: capitalize;
`;

const Details = styled(Typography)`
    font-size:14px;
    word-break: break-word;

`

const Post = ({post}) =>{

    const url = post.picture ? post.picture : require('./postAlternative.webp');

    return(
        <Container>
            <Image src={url} alt="blog"/>
            <Text>{post.categories}</Text>
            <Heading>{addElipsis(post.title,16)}</Heading>
            <Text>{post.username}</Text>
            <Details>{addElipsis(post.description,100)}</Details>
            <Typography>{new Date(post.createdDate).toDateString()}</Typography>
        </Container>
    )
}

export default Post;