import { useState } from "react"
import { Link as LinkRouter, useParams } from "react-router-dom"
import PageHead from "../../components/pageHead/PageHead"
import workouts from "../../data/workouts.json"
import { FaChevronRight, FaChevronLeft ,FaSlidersH } from "react-icons/fa"
import "./category.css"

const Category = () => {

    const [isFilterClicked, setIsFilterClicked] = useState(false)
    const {category} = useParams()
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 9
    const categoryWorkouts = workouts?.filter(workout =>  workout.target == category)
    const equipment = new Set()

    categoryWorkouts.forEach((item) => {
        equipment.add(item.equipment)
    })

    const equipmentArray = Array.from(equipment)

    const equipmentObject = equipmentArray.reduce((obj, item) => {
        return {...obj, [item]: true}
    }, {})

    const [isChecked, setIsChecked] = useState(equipmentObject)

    const [filteredWorkouts, setFilteredWorkouts] = useState(categoryWorkouts)
    let startIndex = (currentPage - 1) * itemsPerPage
    let endIndex = startIndex + itemsPerPage
    let workoutsToDisplay = filteredWorkouts.slice(startIndex, endIndex)
    let totalPages = Math.ceil(filteredWorkouts.length / itemsPerPage)
    
    let range = []
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
        range.push(i)
    }

    const handlePageClick = (page) => {
        setCurrentPage(page)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    function filterEquipment(e) {
        const name = e.target.name
        setIsChecked((prevIsChecked) => {
            const updatedIsChecked = { ...prevIsChecked, [name]: !prevIsChecked[name] }
            const updatedFilteredWorkouts = categoryWorkouts.filter((workout) => updatedIsChecked[workout.equipment])
            setFilteredWorkouts(updatedFilteredWorkouts)
            return updatedIsChecked
        })
        setCurrentPage(1)
    }

    function clickFilter() {
        setIsFilterClicked(prev => !prev)
    }

    return (
        <>
        <PageHead title={`${category} exercises`} paragraph="A short paragraph goes here."/>
        <div className="category container">
            <div className="workouts__filter">
                <span>Results: {filteredWorkouts?.length}</span>
                <button className="primary-btn btn" onClick={clickFilter}>
                    <span>Filter </span><FaSlidersH />
                </button>
                
            </div>
            {isFilterClicked &&
            <div className="equipment" >
                Equipment:
                <ul className="equipment__list" >
                    {equipmentArray.map((equipmentItem) => (
                    <li key={equipmentItem} className="equipment__list-item" >
                        <input className="equipment__list-input"
                        id={equipmentItem} 
                        type="checkbox" 
                        name={equipmentItem} 
                        checked={isChecked[equipmentItem]}
                        onChange={(e) => filterEquipment(e)}
                        />
                        <label className="equipment__list-label" htmlFor={equipmentItem} >{equipmentItem}</label>
                    </li>
                    ))}
                </ul>
            </div>}
            <div className="workouts">
            {workoutsToDisplay?.map((categoryWorkout) => {
                return (
                    <LinkRouter className="workout" to={`/exercises/exercise/${categoryWorkout.id}`} key={categoryWorkout.id}>
                        <div className="workout__image">
                            <img className="workout__img" src={categoryWorkout.gifUrl} loading="lazy" alt={categoryWorkout.name} />
                        </div>
                        <p className="workout__name">
                            {categoryWorkout.name}
                        </p>
                    </LinkRouter>
                )
                })
            }
            </div>
            <div className="pagination">
                <button className="pagination__btn inactive-page" onClick={() => handlePageClick(Math.max(1, currentPage - 1))} disabled={currentPage === 1} >
                    <FaChevronLeft />
                </button>
                {currentPage > 3 && <button className="pagination__btn inactive-page" onClick={() => handlePageClick(1)}>1</button>}
                {currentPage > 4 && <span className="pagination__btn inactive-page">...</span>}
                {range.map((page) => (
                <button className={currentPage === page ? 'active-page pagination__btn' : 'inactive-page pagination__btn'} key={page} onClick={() => handlePageClick(page)} >
                    {page}
                </button>
                ))}
                {currentPage < totalPages - 3 && <span className="inactive-page pagination__btn" >...</span>}
                {currentPage < totalPages - 2 && <button className="inactive-page pagination__btn" onClick={() => handlePageClick(totalPages)}>{totalPages}</button>}
                <button className="inactive-page pagination__btn" onClick={() => handlePageClick(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
        </>
    )
}

export default Category