import { Button, FormControl, IconButton, List, ListItem, ListItemText, MenuItem, Paper, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { arrayMoveImmutable } from 'array-move';
import { useEffect, useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import DeleteIcon from '@mui/icons-material/Delete'
import Navigation from '../components/Navigation';
import { Edit } from '@mui/icons-material';
import AxiosClient from '../services/AxiosClient';

const Portfolio = () => {
    const [projets, setProjets] = useState([])
    const [newProject, setNewProject] = useState({
        projetId:'',
        title:'',
        desc:'',
        imgUrl:'',
        imgAlt:'',
        gitLink:'',
        type:'Jeu',
        textDesc:'',
        textFramework:'',
        textLangage:'',
        textVideo:''
    })

    const getProjects = () => {
        AxiosClient.get('projets')
                .then((res) => {
                    setProjets(res.data)
                })
            }

    useEffect(() => {
        getProjects()
    }, [])

    const onDrop = ({removedIndex,addedIndex}) => {
        setProjets(arrayMoveImmutable(projets,removedIndex,addedIndex))
    }

    const save = () => {
        var projs = projets
        var i = 1
        projs.forEach(proj => {
            proj.order = i
            i++
        });
        AxiosClient.post('projets/reorder',{projets:projs})
    }

    const handleChange = (event) => {
        if (event.currentTarget) {
            const {name,value} = event.currentTarget
            setNewProject({
                ...newProject,
                [name]:value
            })
        } else {
            setNewProject({
                ...newProject,
                type:event.target.value
            })
        }
    }

    const handleSubmit = async event => {
        event.preventDefault();

        AxiosClient.post('projets/new',{newProjet:newProject})
            .then(res => {
                if (res.data.success) getProjects()
            })
    }

    const handleDelete = (id) => {
        AxiosClient.post('projets/delete',{projetId:id})
            .then(res => {
                if (res.data.success) getProjects()
            })
    }

    return (
        <Box height="90vh">
            <Navigation/>              
            <Paper sx={{marginTop:'5rem', marginX:'3rem', height:'85vh', display:'grid', gridTemplateColumns:'1fr 1fr'}}>
                <Box sx={{ display:'flex',flexDirection:'column',alignItems:'center' }}>
                    <List sx={{ alignSelf:'stretch', overflowY:'auto', my:'2rem', mx:'2rem' }}>
                        <Container lockAxis='y' onDrop={onDrop}>
                        {projets.map(({projetId,title}) => (
                            <Draggable key={projetId}>
                                <ListItem sx={{ ":hover":{cursor:'pointer'},borderBottom:'1px solid',borderColor:'secondary.dark' }}>
                                    <ListItemText primary={title}/>

                                    <IconButton edge="end" aria-label='edit' href={'/portfolio/'+projetId}>
                                        <Edit/>
                                    </IconButton>

                                    <IconButton edge="end" aria-label='delete' onClick={()=> handleDelete(projetId)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </ListItem>
                            </Draggable>
                        ))}
                        </Container>
                    </List>
                    <Button variant='contained' onClick={save}>Sauvegarder</Button>
                </Box>
                <FormControl sx={{ overflowY:'auto',my:'2rem',display:'flex',flexDirection:'column', justifyContent:'space-evenly',alignItems:'center' }}>
                    <TextField onChange={handleChange} type='text' name='projetId' color='secondary' variant='outlined' label='ID'/>
                    <TextField onChange={handleChange} type='text' name='title' color='secondary' variant='outlined' label='Nom'/>
                    <TextField onChange={handleChange} type='text' name='desc' color='secondary' variant='outlined' label='Description'/>
                    <TextField onChange={handleChange} type='text' name='imgUrl' color='secondary' variant='outlined' label='Image'/>
                    <TextField onChange={handleChange} type='text' name='imgAlt' color='secondary' variant='outlined' label="Description de l'image"/>
                    <TextField onChange={handleChange} type='text' name='gitLink' color='secondary' variant='outlined' label='Lien du Git'/>
                    <Select defaultValue='Jeu' onChange={handleChange} type='text' name='type' color='secondary' variant='outlined'>
                        <MenuItem value='Jeu' selected>Jeu</MenuItem>
                        <MenuItem value='Site Web'>Site Web</MenuItem>
                        <MenuItem value='Application'>Application</MenuItem>
                        <MenuItem value='Logiciel'>Logiciel</MenuItem>
                        <MenuItem value='Autre'>Autre</MenuItem>
                    </Select>
                    <TextField onChange={handleChange} type='text' name='textDesc' color='secondary' variant='outlined' label='Description approfondie'/>
                    <TextField onChange={handleChange} type='text' name='textFramework' color='secondary' variant='outlined' label='Framework'/>
                    <TextField onChange={handleChange} type='text' name='textLangage' color='secondary' variant='outlined' label='Langage'/>
                    <TextField onChange={handleChange} type='text' name='textVideo' color='secondary' variant='outlined' label="Vidéo"/>
                    <Button type='submit' variant='contained' onClick={handleSubmit}>Valider</Button>
                </FormControl>
            </Paper>
        </Box>
    );
};

export default Portfolio;