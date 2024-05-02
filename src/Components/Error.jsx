import { Box, Button, Container, Typography } from '@mui/material'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
    const {statusText, message} = useRouteError()
  return (
            <Box>
                <Container maxWidth={'xl'} sx={{px:{md:8, xs:4}, bgcolor:'primary', display:'flex', height:'100vh', alignItems:'center'}}>
                    <Box sx={{mx:'auto', gap:'20px', display:'flex', flexDirection:'column', textAlign:'center'}}>
                        <Typography variant='h3' color={'primary'} fontWeight={'700'} component={'h3'}>
                            404 Error
                        </Typography>
                        <Typography variant='body1' sx={{fontSize:{sm:'48px',xs:'36px', lineHeight:'2.25rem'}}} fontWeight={600} color={'greyvariant.light'} >
                            Page not found
                        </Typography>
                        <Typography variant='body1' color={'neutrals.light'}>
                           {statusText || message}
                        </Typography>
                        <Box sx={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:'24px'}} >
                            <Button color='success' sx={{transition:'all', transitionDuration:'500ms', color:'neutrals.light'}} size='large' variant='contained' onClick={()=> navigate(-1)} className="block py-2 px-4 duration-150">
                                Go back
                            </Button>
                            <Button variant='outlined' sx={{transition:'all', transitionDuration:'500ms'}} size='large' >
                                Contact support
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        )                             
}

export default Error