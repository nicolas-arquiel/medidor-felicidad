import React, { useEffect, useState } from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data/people';
import { Person } from '@/models';
import { Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addFavorite, addPeople } from '@/redux/state';
import store, { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { PeopleTable } from './components';
export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {
	const dispatch = useDispatch()


	useEffect(()=>{
		dispatch(addPeople(People))
	},[])


	return (
		<PeopleTable/>
	)
};

export default Home;
