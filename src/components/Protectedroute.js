import React from 'react'
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Protectedroute({Component}) {
    const islogged = useSelector(state => state.islogged.status)
    return islogged?Component:<Navigate to='/' replace/>
}

export default Protectedroute
