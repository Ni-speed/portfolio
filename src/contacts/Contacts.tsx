import React from 'react';
import {useFormik} from "formik";
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button'
import style from './Contacts.module.css'
import s from './../common/styles/Container.module.css'

export const Contacts = () => {
    const formik = useFormik({
        initialValues: {
            input1: '',
            input2: '',
            text: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    })

    return (
        <div className={style.contactsBlock}>
            <form className={s.container} onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        <p>Контакты</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField label="input1"
                                   margin="normal"
                                   {...formik.getFieldProps('input1')}

                        />
                        <TextField type="input"
                                   label="input2"
                                   margin="normal"
                                   {...formik.getFieldProps('input2')}
                        />
                        <TextField
                            fullWidth
                            id="filled-multiline-static"
                            label="text"
                            multiline
                            rows={6}
                            defaultValue="Default Value"
                            variant="filled"
                            {...formik.getFieldProps('text')}
                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Отправить
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
};

