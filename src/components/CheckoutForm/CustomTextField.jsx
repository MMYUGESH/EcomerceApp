import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';


function FormInput({ name, label, required }) {
    const { control } = useFormContext();


    return (
        <Grid item xs={12} sm={6}>

        </Grid>
    );
}



export default FormInput;
