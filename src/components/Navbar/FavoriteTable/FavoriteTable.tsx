import { Person } from '@/models';
import { addFavorite, removeFavorite } from '@/redux/state';
import { AppStore } from '@/redux/store';
import { Checkbox, IconButton } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export interface FavoriteTableInterface {}

const FavoriteTable : React.FC<FavoriteTableInterface> = () => {
	const pageSize=5
	const dispatch = useDispatch()
	const stateFavorites = useSelector((store: AppStore) => store.favorites)

	const handleClick = (person : Person)=>{
		dispatch(removeFavorite(person))
	}
	const columns=[
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			width: 50,
			renderCell:(params: GridRenderCellParams)=> 

			<>
				{
					<IconButton 
						color="warning" 
						aria-label="favorite" 
						component="label"
						onClick={()=> handleClick(params.row)}
					>
						<DeleteIcon />
					</IconButton>
				}
			</>
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

	return (
		<DataGrid
			rows={stateFavorites}
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

export default FavoriteTable;
