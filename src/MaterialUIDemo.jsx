import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';

export default function MaterialUI(){
  let handleClick=()=>{
    console.log("button was clicked");
  }
  
    return(
        <div>
              <h1>MaterialUI Demo</h1>
              {/* <Button variant="text">CLICK ME!</Button> */}
              <Button variant="contained" onClick={handleClick}>CLICK ME!</Button>
              {/* <Button variant="outlined">CLICK ME!</Button> */}
              {/* <Button variant="contained" onClick={handleClick} disabled>CLICK ME2!</Button> */}
              <Button variant="contained" onClick={handleClick} color="success" size='small' 
              startIcon={<DeleteIcon />}
              >CLICK ME!</Button>
              <Alert severity="error">This is an error Alert.</Alert>
        


        </div>
    )
  

}