import PageHead from "../../components/pageHead/PageHead"
import { useParams } from "react-router-dom"
import { BiBody, BiTargetLock, BiDumbbell, BiBookOpen } from "react-icons/bi"
import workouts from "../../data/workouts.json"
import "./workout.css"

const Workout = () => {

    const {id} = useParams()
    const workout = workouts?.find(item =>  item.id == id)

    return (
        <>
        <PageHead title="Workout" paragraph="A short paragraph goes here."/>
        <div className="workout-detail container">
            <div className="workout-detail__image">
                <img className="workout__img" src={workout.gifUrl} loading="lazy" alt={workout.name} />
            </div>
            <div className="workout-detail__details">
                <div className="workout-detail__detail">
                    <div className="workout-detail__icon"><BiBody /></div>
                    <div className="workout-detail__content">
                        <h3 className="workout-detail__subtitle">Body Part</h3>
                        <p className="workout-detail__para">{workout.bodyPart}</p>
                    </div>
                </div>
                <div className="workout-detail__detail">
                    <div className="workout-detail__icon"><BiTargetLock /></div>
                    <div className="workout-detail__content">
                        <h3 className="workout-detail__subtitle">Target Muscle</h3>
                        <p className="workout-detail__para">{workout.target}</p>
                    </div>
                </div>
                <div className="workout-detail__detail">
                    <div className="workout-detail__icon"><BiDumbbell /></div>
                    <div className="workout-detail__content">
                        <h3 className="workout-detail__subtitle">Equipment</h3>
                        <p className="workout-detail__para">{workout.equipment}</p>
                    </div>
                </div>
                <div className="workout-detail__detail" >
                    <div className="workout-detail__icon" ><BiBookOpen /></div>
                    <div className="workout-detail__content" >
                        <h3 className="workout-detail__subtitle" >Description</h3>
                        <p className="workout-detail__para" >The <span className="workout-detail__span">{workout.name}</span> exercise, is a fantastic workout targeting the <span className="workout-detail__span">{workout.target}</span> muscles. This exercise is perfect for anyone looking to strengthen and tone their <span className="workout-detail__span">{workout.bodyPart}</span>. It utilizes <span className="workout-detail__span">{workout.equipment}</span> for added resistance and effectiveness. With proper form and technique, you can achieve amazing results with this exercise.</p>
                        <p className="workout-detail__para" >Remember to warm up before starting any workout routine. Get ready to sculpt and strengthen your <span className="workout-detail__span">{workout.target}</span> muscles with this challenging yet rewarding exercise!</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Workout