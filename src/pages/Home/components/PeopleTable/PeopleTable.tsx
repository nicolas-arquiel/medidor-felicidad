import { Person } from '@/models';
import { addFavorite } from '@/redux/state';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export interface PeopleTableInterface {}

const PeopleTable : React.FC<PeopleTableInterface> = () => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
	const pageSize=5
	const dispatch = useDispatch()
	const statePeople = useSelector((store: AppStore) => store.people)
	const favoritesPeople = useSelector((store: AppStore) => store.favorites)

	const findPerson = (person : Person)=> !!favoritesPeople.find(p=> p.id === person.id)
	const filterPerson = (person : Person)=> favoritesPeople.filter(p=> p.id != person.id)
	
	const handleChange = (person : Person)=>{
		const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople,person] 
		dispatch(addFavorite(filteredPeople))
		setSelectedPeople(filteredPeople)
	}
	const columns=[
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			width: 50,
			renderCell:(params: GridRenderCellParams)=> <>{
				<Checkbox size='small' 
				checked={findPerson(params.row)}
				onChange={()=>handleChange(params.row) }
				/>
			} </>
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell:(params: GridRenderCellParams)=> <>{params.value  } </>
		},
		{
			field: 'category',
			headerName: 'Category',
			flex: 1,
			renderCell:(params: GridRenderCellParams)=> <>{params.value  } </>
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			renderCell:(params: GridRenderCellParams)=> <>{params.value  } </>
		},
		{
			field: 'levelOfHappiness',
			headerName: 'Level of Happiness',
			flex: 1,
			renderCell:(params: GridRenderCellParams)=> <>{params.value  } </>
		},
	]

	useEffect(()=>{
		setSelectedPeople(favoritesPeople)
	},[favoritesPeople])

	return (
		<DataGrid
			rows={statePeople}
			columns={columns}
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			pageSize={pageSize}
			rowsPerPageOptions={[pageSize]}
			getRowId={(row:any)=> row.id}
		/>
	)
};

export default PeopleTable;