import { asyncThunkCreator, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../services/API";
import { toast } from 'react-toastify';
import ResponsiveDrawer from "../views/ResponsiveDrawer";
import { useNavigate } from "react-router-dom";
export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password, role }, { rejectWithValue }) => {
        try {
            const { data } = await API.post('http://localhost:8000/auth/login', { email, password, role });
            //store token
            if (data.success) {
                naviage = useNavigate();
                localStorage.setItem('token', data.token);
                toast.success(data.message);
                navigate('/dashboard');
            }
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            }
            else {
                return rejectWithValue(error.message);
            }
        }

    }
);

export const userRegister = createAsyncThunk(
    'auth/register',
    async ({ name, email, password, role }, { rejectWithValue }) => {
        try {
            const { data } = await API.post('http://localhost:8000/auth/register', { name, email, password, role });
            if (data.success) {
                alert('Registration Successful');
                toast.success(data.message);
                window.location.replace('/login');
            }
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            }
            else {
                return rejectWithValue(error.message);
            }

        }
    }
);

//current user
export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async ({ rejectWithValue }) => {
        try {
            const res = await API.get('http://localhost:8000/auth/current-user');
            if (res?.data) {
                return res?.data;
            }

        } catch (error) {
            console.log(error);
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            }
            else {
                return rejectWithValue(error.message);
            }

        }
    }
)