import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
  
  const [workouts, setWorkouts] = useState(null);
     
  useEffect(() => {
    const fechWorkouts = async () => {
        const response = await fetch('http://localhost:5000/api/workouts');
        const json = await response.json();

        if (response.ok) {
            setWorkouts(json);
        }
    };

    fechWorkouts();
  }, []);

  return (
    <div className='home'>
        <div className="workouts">
            {workouts ? workouts.map((workout) => (
               <WorkoutDetails key={workout._id} workout={workout} />
            )) : <p>No workouts now.</p> }
        </div>
        <WorkoutForm />
    </div>
  )
}

export default Home