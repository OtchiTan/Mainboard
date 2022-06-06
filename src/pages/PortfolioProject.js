import { Button, FormControl, MenuItem, Paper, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';

const PortfolioProject = () => {
    const [project, setProject] = useState({
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

    const params = useParams()
    const navigate = useNavigate()

    const getProject = () => {
        axios.get('http://localhost:8000/projet/' + params.id)
            .then(res => {
                var proj = res.data

                proj.textDesc = proj.text.desc
                proj.textFramework = proj.text.framework
                proj.textLangage = proj.text.langage
                proj.textVideo = proj.text.video

                setProject(proj)
            })
    }

    useEffect(() => {
        getProject()
    }, [])
    

    const handleChange = (event) => {
        if (event.currentTarget) {
            const {name,value} = event.currentTarget
            setProject({
                ...project,
                [name]:value
            })
        } else {
            setProject({
                ...project,
                type:event.target.value
            })
        }
    }

    const handleSubmit = async event => {
        event.preventDefault();
        axios.post('http://localhost:8000/projets/update/' + params.id, {project:project})
            .then(res => {
                if (res.data.success) navigate('/portfolio')
            })
    }

    return (
        <Box height="90vh">
            <Navigation/>              
            <Paper sx={{marginTop:'5rem', marginX:'3rem', height:'85vh', padding:'2rem'}}>
                <FormControl sx={{ overflowY:'auto',my:'2rem', display:'grid', gridTemplateColumns:'1fr 1fr',height:'100%' }}>
                    <Box sx={{ display:'flex',flexDirection:'column', justifyContent:'space-evenly',alignItems:'center' }}>
                        <TextField onChange={handleChange} type='text' name='projetId' color='secondary' variant='outlined' label='ID' value={project.projetId}/>
                        <TextField onChange={handleChange} type='text' name='title' color='secondary' variant='outlined' label='Nom' value={project.title}/>
                        <TextField onChange={handleChange} type='text' name='desc' color='secondary' variant='outlined' label='Description' value={project.desc}/>
                        <TextField onChange={handleChange} type='text' name='imgUrl' color='secondary' variant='outlined' label='Image' value={project.imgUrl}/>
                        <TextField onChange={handleChange} type='text' name='imgAlt' color='secondary' variant='outlined' label="Description de l'image" value={project.imgAlt}/>
                        <TextField onChange={handleChange} type='text' name='gitLink' color='secondary' variant='outlined' label='Lien du Git' value={project.gitLink}/>
                    </Box>
                    <Box sx={{ display:'flex',flexDirection:'column', justifyContent:'space-evenly',alignItems:'center' }}>
                        <Select value={project.type} onChange={handleChange} type='text' name='type' color='secondary' variant='outlined'>
                            <MenuItem value='Jeu' selected>Jeu</MenuItem>
                            <MenuItem value='Site Web'>Site Web</MenuItem>
                            <MenuItem value='Application'>Application</MenuItem>
                            <MenuItem value='Logiciel'>Logiciel</MenuItem>
                            <MenuItem value='Autre'>Autre</MenuItem>
                        </Select>
                        <TextField onChange={handleChange} type='text' name='textDesc' color='secondary' variant='outlined' label='Description approfondie' value={project.textDesc}/>
                        <TextField onChange={handleChange} type='text' name='textFramework' color='secondary' variant='outlined' label='Framework' value={project.textFramework}/>
                        <TextField onChange={handleChange} type='text' name='textLangage' color='secondary' variant='outlined' label='Langage' value={project.textLangage}/>
                        <TextField onChange={handleChange} type='text' name='textVideo' color='secondary' variant='outlined' label="Vidéo" value={project.textVideo}/>
                        <Button type='submit' variant='contained' onClick={handleSubmit}>Valider</Button>
                    </Box>
                </FormControl>
            </Paper>
        </Box>
    );
};

export default PortfolioProject;