import  React, {useEffect, useState} from 'react';

import NaviagtionBar from './NavigationBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//mport Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function Task() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    // const [title2, setTitle2] = useState('')
    // const [description2, setDescription2] = useState('')
    const [tasks, setTasks] = useState([])
    const [open, setOpen] = React.useState(false);
    const [currentTaskId, setCurrentTaskId] = useState(0);
    
    
    

    const handleOpen = (id) => {
        
        console.log('your id is here', id)
        setCurrentTaskId(id)
       
        setOpen(true);
        

    } 
    //console.log('your currentTaskId is here', currentTaskId);

    const handleClose = () => setOpen(false);

    const paperStyle = {padding:'50px 20px', width: 600, margin: '20px auto'}
    const paperStyle2 = {padding:'50px 20px', width: 700, margin: '20px auto'}
    const style3 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const update = () => {
          
        // event.preventDefault()
        const taskUpdated = {id:currentTaskId, title, description}
        console.log("your task is here",taskUpdated)

        fetch(`http://localhost:8181/task/${currentTaskId}`, {
            method:"PUT",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(taskUpdated)
        }).then(() => {
            console.log("Your  task is updated!!")
            
        })
        window.location.reload();
    }

    const handleClick = (event) => {
        event.preventDefault()
        const task = {title, description}
        console.log("your task is here",task)

        fetch("http://localhost:8181/task/add", {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(task)
        }).then(() => {
            console.log("Your new task is added!!")
        })

        window.location.reload();
    }

    

    const deleteTask = (id) => {
        fetch(`http://localhost:8181/task/${id}`, {
            method:"DELETE",
        }).then(() => {
            console.log("deleted task with id ", id)
        }).then(() => {
            setTasks(tasks.filter(task => task.id !== id))
        })

    }

    useEffect(() => {
        fetch("http://localhost:8181/task/getTasks")
        .then(response => response.json())
        .then((result) => {
            setTasks(result);
        })
    },[])

  return (
      
    <Container>
         <NaviagtionBar />
        <Paper elevation={3} style={paperStyle}>
            <h1> Add Task</h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1,  },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="standard-basic" label="Title" variant="standard"  fullWidth
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <TextField 
                id="standard-textarea"
                placeholder="Placeholder"
                maxRows={4}
                multiline  
                label="Description" 
                variant="outlined" 
                fullWidth
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <Button variant="contained" onClick={handleClick}>SUBMIT</Button>
            </Box>
        
            {title}
            {description}
        </Paper>

        <h1> TASKS</h1>
        
        <Paper elevation={3} style={paperStyle2} >
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'  }} >
            {tasks.map(task => {
                return  <Card sx={{ maxWidth: 345 }} key={task.id} style={{margin:"18px", marginLeft:"54px",  textAlign:"left", width:"250px"}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="100"
                                image="https://cdn.pixabay.com/photo/2020/11/20/22/11/woman-5762754_960_720.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {task.title} 
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{textAlign:"left"}}>
                                {task.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handleOpen(task.id)}>Edit</Button>
                                <Button size="small" onClick={()=> deleteTask(task.id)}>Remove</Button>
                            </CardActions>
                       </Card>
            })}
        </Box>
       </Paper>


       
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style3}> */}
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Task
          </Typography> */}
          <Paper elevation={3} style={paperStyle}>
            <h1>  Edit Task</h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1,  },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="standard-basic" label="Title" variant="outlined"  fullWidth
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <TextField 
                id="standard-textarea"
                placeholder="Placeholder"
                maxRows={4}
                multiline  
                label="Description" 
                variant="outlined" 
                fullWidth
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <Button variant="contained" onClick={update}>SUBMIT</Button>
            </Box>
        
            {title}
            {description}
        </Paper>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        {/* </Box> */}
      </Modal>

    </Container>
  );
}
