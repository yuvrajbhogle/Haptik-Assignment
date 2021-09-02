import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faSearch, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarO } from '@fortawesome/free-regular-svg-icons';


	const App = () => {

	const [items, setItems] = useState([
		{ itemName: 'Mike', id: 1, isSelected: true },
		{ itemName: 'Eleven', id: 2, isSelected: false },
		{ itemName: 'Will', id: 3, isSelected: false },
	]);

	const [allItems, setallItems] = useState(items);
	const [inputValue, setInputValue] = useState('');
	const [searchValue, setSearchValue] = useState('');
	const [toggleClass, setToggleClass] = useState(false);
	const [leftState, setLeftState] = useState(0);
	const [rightState, setRightState] = useState(4);
	const [currentPage, setCurrentPage] = useState(1);

	const TaskItems = (newItems) => {
		
		let taskToRender = [...newItems];
		let myList1 = taskToRender
				.filter(
					(task) =>
						task.isSelected
				)
	
				let myList2 = taskToRender
				 .filter((task) => !task.isSelected)
			
				 taskToRender = [...myList1,...myList2];

		if(searchValue)
		{
			taskToRender = taskToRender.filter(
				(task) => {
					var x = task.itemName.toLowerCase();
					var y = searchValue.toLowerCase();
					var z = x.search(y) !== -1;
					return z;
				}	
			);
		}else{
			setToggleClass(true);
		}

		return taskToRender;
		//taskToRender = TaskItemsP(taskToRender,leftState, rightState,currentPage);
		//setItems(taskToRender);
	}

	const TaskItemsP = (list, leftState_s, rightState_s, currentPage_s) =>
	{
		if(rightState_s > allItems.length)
		setRightState(allItems.length);
		console.log(leftState_s+"  "+rightState_s);
		console.log(list);
		list = list.slice(leftState_s,rightState_s+1);
		console.log(list);

		return list
	}

	const handleKeyDown = (event) => {

		if (event.key === 'Enter' && inputValue) {
			const newItem = {
				itemName: inputValue,
				id: allItems.length+1,
				isSelected: false,
			};
			const newItems = [...allItems, newItem];
	
			//setItems(newItems);
			setallItems(newItems);
			setInputValue('');
			setItems(TaskItemsP(TaskItems(newItems), leftState, rightState, currentPage));
			 
		}
	};


	const handleDelete = (index) => {
		let newItems = [...allItems];
		newItems = newItems.filter(item => item.id !== index);
		//setItems(newItems);
		setallItems(newItems);
		setItems(TaskItemsP(TaskItems(newItems), leftState, rightState, currentPage));
	};

	const toggleComplete = (index) => {
		const newItems = [...allItems];
		for(var i in newItems)
		{
			if(newItems[i].id == index)
			{
				newItems[i].isSelected = !newItems[i].isSelected;
			}
		}
		//setItems(newItems);
		setallItems(newItems);
		setItems(TaskItemsP(TaskItems(newItems), leftState, rightState, currentPage));
	};

	const handleLeft = () => {
		console.log(leftState);
		if(leftState>=4)
		{
			setLeftState(leftState-4);
			setRightState(leftState-1);
			setCurrentPage(currentPage-1);
			setItems(TaskItemsP(TaskItems(allItems), leftState-4, leftState-1, currentPage-1));
		}
	};

	const handleRight = () => {
		if(rightState<allItems.length)
		{
			setLeftState(leftState+4);
			setRightState(rightState+4);
			setCurrentPage(currentPage+1);
			setItems(TaskItemsP(TaskItems(allItems), leftState+4, rightState+4, currentPage+1));
		}
	};




	return (
		<div className='app-background'>
			<div className='main-container'>
				<h1>Friend List</h1> 
				<div className={toggleClass ? 'search-box active':'search-box'}>
					<input className="search-txt" type="text" value={searchValue} onChange={(event) => {setSearchValue(event.target.value); TaskItems(allItems)}} placeholder="Type your query and click icon" />
						<button className="search-btn" onClick={() => setItems(TaskItemsP(TaskItems(allItems), leftState, rightState, currentPage))}><FontAwesomeIcon icon={faSearch} /></button>
				</div>
				<div className='add-item-box'>
					<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} onKeyDown={handleKeyDown} className='add-item-input' placeholder='Enter Your friends name' />
					{/* <FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} /> */}
				</div>
				<div className='item-list'>
					{items.map((item, index) => (
						<div className='item-container'>
							<div className='item-name'>
								<h6>{(index+1)+")"} {item.itemName}</h6>
								<small>is your friend</small>
							</div>
							<div className='two-buttons'>
								<button className="mybutton" onClick={() => toggleComplete(item.id)}>
										{item.isSelected ? (
											<FontAwesomeIcon icon={faStar} />
										) : (
											<FontAwesomeIcon icon={faStarO} />
										)}
								</button>
								<button className="mybutton" onClick={() => handleDelete(item.id)}>
									<FontAwesomeIcon icon={faTrash} />
								</button>
							</div>
						</div>
					))}
				</div>
				 <div className='footer'>
											
				 <button className="mybutton" onClick={() => handleLeft()} disabled={leftState == 0} >
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				{currentPage}
				<button className="mybutton" onClick={() => handleRight()} disabled={rightState+1 > allItems.length}>
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
				</div> 
			</div>
		</div>
	);
};

export default App;
